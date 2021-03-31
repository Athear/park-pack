module.exports = {

  get_dog_pic: (dog_user, dog_picture) => {
    let picture = './images/icons/parkpackicon.png'
    if(dog_picture){
      picture=`http://www.chriscastle.com/park-pack/${dog_user}/${dog_picture}`
    }
    return picture;
  },
  
};
  