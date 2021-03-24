const User = require('../User');
const Friends = require('./Friends');
const Dog = require('./Dog');

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
}),

module.exports = { User, Dog, Friends };