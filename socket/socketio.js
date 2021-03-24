const router = require('../controllers/api/userRoutes')
const io = require("socket.io")(server);

const users = [];
const connnections = [];
// const userData = { id: req.session.user_id,
// name: req.session.name }
//listen on every connection
io.on('connection', (socket) => {
    console.log('New user connected');
    //add the new socket to the connections array
    connnections.push(socket)
    //initialize a random color for the socket
    let color = randomColor();

    //Set the first username of the user as 'Anonymous'
    socket.username = 'Anonymous';
    socket.color = color;

    //listen on change_username
    socket.on('change_username', data => {

        socket.id = userData.id;
        socket.username = userData.name;
        users.push({id, username: socket.username, color: socket.color});
        updateUsernames();
    })

    //update Usernames in the client
    const updateUsernames = () => {
        io.sockets.emit('get users',users)
    }

    //listen on new_message
    socket.on('new_message', (data) => {
        //broadcast the new message
        io.sockets.emit('new_message', {message : data.message, username : socket.username,color: socket.color});
    })

    //Disconnect
    socket.on('disconnect', data => {

        if(!socket.username)
            return;
        //find the user and delete from the users list
        let user = undefined;
        for(let i= 0;i<users.length;i++){
            if(users[i].id === socket.id){
                user = users[i];
                break;
            }
        }
        users.splice(user,1);
        //Update the users list
        updateUsernames();
        connnections.splice(connnections.indexOf(socket),1);
    })
})

module.exports = socket;