const chatForm = document.getElementById("chat-form");
const chatMessages = document.querySelector(".chat-messages");
const roomName = document.getElementById("room-name");
const userList = document.getElementById("users");
const socket = io();

const room = location.pathname.split("/chatroom/")[1];
roomName.textContent = room;
async function getUserData() {
  try {
    const response = await fetch("/api/users/user_data");
    const userData = await response.json();
    const username = userData.name;

    // Join chatroom
    socket.emit("joinRoom", { username, room });

    // Get room and users
    socket.on("roomUsers", ({ room, users }) => {
      outputRoomName(room);
      outputUsers(users);
    });
    socket.on("history", (messages) => {
      messages.forEach((message) => {
        outputMessage({
          time: new Date(message.createdAt).toLocaleTimeString(),
          text: message.message,
          username: message.user,
        });
      });
    });
    // Message from server
    socket.on("message", (message) => {
      outputMessage(message);

      // Scroll down
      chatMessages.scrollTop = chatMessages.scrollHeight;
    });

    // Message submit
    chatForm.addEventListener("submit", (e) => {
      e.preventDefault();

      // Get message text
      let msg = e.target.elements.msg.value;

      msg = msg.trim();

      if (!msg) {
        return false;
      }

      // Emit message to server
      socket.emit("chatMessage", msg);

      // Clear input
      e.target.elements.msg.value = "";
      e.target.elements.msg.focus();
    });

    // Output message to DOM
    function outputMessage(message) {
      const div = document.createElement("div");
      div.classList.add("message");
      const p = document.createElement("p");
      p.classList.add("meta");
      p.innerText = message.username;
      p.innerHTML += `<span>${message.time}</span>`;
      div.appendChild(p);
      const para = document.createElement("p");
      para.classList.add("text");
      para.innerText = message.text;
      div.appendChild(para);
      document.querySelector(".chat-messages").appendChild(div);
    }

    // Add room name to page
    function outputRoomName(room) {
      roomName.innerText = room;
    }

    // Add users to page
    function outputUsers(users) {
      userList.innerHTML = "";
      users.forEach((user) => {
        const li = document.createElement("li");
        li.innerText = user.username;
        userList.appendChild(li);
      });
    }
    document.getElementById("leave-btn").addEventListener("click", () => {
      sweetAlert
        .fire({
          title: "Are you sure you want to leave this room?",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, Leave!",
        })
        .then((result) => {
          if (result.isConfirmed) {
            window.location = "../chat";
          }
        });
    });
  } catch (err) {
    console.log(err);
  }
}
getUserData();
