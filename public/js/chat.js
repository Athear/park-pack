document.getElementById('choose-chat').addEventListener
('submit', function (event) {
    console.log(event);
    event.preventDefault()
    const id = document.getElementById('room').value
    location.replace('/chatroom/' + id)
});