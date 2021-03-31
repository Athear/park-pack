module.exports = {


  get_dog_pic: (dog_user, dog_picture) => {
    let picture = './images/icons/parkpackicon.png'
    if(dog_picture){
      picture=`http://www.chriscastle.com/park-pack/${13}/${dog_picture}`
    }
    console.log(`user:${dog_user}; picture:${dog_picture}`)
    console.log(`final picutre ${picture}`)
    return picture;
  },
};
  