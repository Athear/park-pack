var addpack = async (event, req) => {
    console.log(event.srcElement.dataset.user);
    event.preventDefault();
    
    
    const friend_id = event.srcElement.dataset.user;
    console.log(friend_id);
    // const friend_id = event.dataset.user;
    const user_id =  req.session.user_id;

    if (friend_id && user_id) {
        const response = await fetch('/api/dogs/profilecard', {
            method: 'POST',
            body: JSON.stringify({ friend_id, user_id}),
            headers: { 'Content-Type': 'application/json' },
        });
        if (response.ok) {
            document.location.replace('/dashboard');
            console.log('youve added to your pack!')
        } else {
            alert(response.statusText);
            console.log('oops, theres a bug!');
        }
    }
};
document.querySelector('#addpack').addEventListener('click', addpack);