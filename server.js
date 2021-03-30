const path = require("path");
const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");
const routes = require("./controllers");
const helpers = require("./utils/helpers");
// const http = require('http');
const socketio = require("socket.io");
const formatMessage = require("./utils/messages");
const {
  userJoin,
  getCurrentUser,
  userLeave,
  getRoomUsers,
} = require("./utils/chatUsers");
const sequelize = require("./config/connection");
const { chatMessage } = require("./models");

const SequelizeStore = require("connect-session-sequelize")(session.Store);

const app = express();
// const server = http.createServer(app);
// socket.fromClient(server);
// const io = socketio(app);
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({ helpers });

const sess = {
  secret: "Super secret secret",
  cookie: { secure: false },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(routes);
// Set static folder
const botName = "Pack Leader";

sequelize.sync({ force: false }).then(() => {
  const server = app.listen(PORT, () =>
    console.log(`Now listening on port ${PORT}!`)
  );
  const io = socketio(server);
  // Run when client connects
  io.on("connection", (socket) => {
    socket.on("joinRoom", async ({ username, room }) => {
      const user = userJoin(socket.id, username, room);

      socket.join(user.room);
      const messages = await chatMessage.findAll({
        where: {
          room: user.room,
        },
        order: [["createdAt", 'DESC']],
        limit: 10,
      });
      console.log(messages);
      socket.emit("history", messages);
      // Welcome current user
      socket.emit("message", formatMessage(botName, "Welcome to ParkPack!"));

      // Broadcast when a user connects
      socket.broadcast
        .to(user.room)
        .emit(
          "message",
          formatMessage(botName, `${user.username} has joined the chat`)
        );

      // Send users and room info
      io.to(user.room).emit("roomUsers", {
        room: user.room,
        users: getRoomUsers(user.room),
      });
    });

    // Listen for chatMessage
    socket.on("chatMessage", async (msg) => {
      const user = getCurrentUser(socket.id);
      console.log(msg);
      const newMessage = new chatMessage({
        message: msg,
        user: user.username,
        room: user.room,
      });
      await newMessage.save();
      io.to(user.room).emit("message", formatMessage(user.username, msg));
    });

    // Runs when client disconnects
    socket.on("disconnect", () => {
      const user = userLeave(socket.id);

      if (user) {
        io.to(user.room).emit(
          "message",
          formatMessage(botName, `${user.username} has left the chat`)
        );

        // Send users and room info
        io.to(user.room).emit("roomUsers", {
          room: user.room,
          users: getRoomUsers(user.room),
        });
      }
    });
  });
});
