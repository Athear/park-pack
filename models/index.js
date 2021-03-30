const User = require('./User');
const Friends = require('./Friends');
const Dog = require('./Dog');
const Activity = require('./Activity');
const Join_Dog_Activity = require('./Join_Dog_Activity');
const chatMessage = require('./chatMessage')
User.hasMany(Dog, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Dog.belongsTo(User, {
    foreignKey: 'user_id'
});

// User.hasMany(Friends,{
//     foreignKey: 'friend_id',
// });

// Friends.belongsTo(User, {
//     foreignKey: 'User_id',
// });

User.belongsToMany(User, {
    through: { 
        model: Friends,
        unique: false,
    },
    foreignKey: 'user_id',
    as: 'user',
});

User.belongsToMany(User, {
    through: {
        model: Friends,
    },
    foreignKey: 'friend_id',
    as: 'test',
});

Activity.belongsToMany(Dog, {
    through: {
        model: Join_Dog_Activity,
    },
    foreignKey: 'activity_id'
});
Dog.belongsToMany(Activity, {
    through: {
        model: Join_Dog_Activity,
    },
    foreignKey: 'dog_id'
})


module.exports = { User, Dog, Friends, Join_Dog_Activity, Activity, chatMessage };