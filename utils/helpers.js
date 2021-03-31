module.exports = {


  get_dog_pic: (dog_user, dog_picture) => {
    let picture = './images/icons/parkpackicon.png'
    console.log(`user:${dog_user}; picture:${dog_picture}`)
    return picture;
  },

    
    // get_emoji: () => {
    //   const randomNum = Math.random();
    //   let book = "📗";
  
    //   if (randomNum > 0.7) {
    //     book = "📘";
    //   } else if (randomNum > 0.4) {
    //     book = "📙";
    //   }
  
    //   return `<span for="img" aria-label="book">${book}</span>`;
    // },
  };
  