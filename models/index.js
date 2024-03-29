// import models
// const ProfilePic = require("./ProfilePic");
const User = require("./User");
const Gym = require("./Gym");
const City = require("./City");
const Workout = require("./Workout");
const user_workout = require("./user_workout")

//ProfilePic.belongsTo(User, {
//  foreignKey: "user_id",
//as: "profile_pic",
//});
//User.hasOne(ProfilePic,  {
//    foreignKey: "user_id",
//   as: "profile_pic",
//});

Gym.hasMany(User, {
    foreignKey: "gym_id",
    // as: "gym_user",
});

User.belongsTo(Gym,  {
    foreignKey: "gym_id",
    // as: "gym_user",
});

User.belongsTo(City,{
    foreignKey:"city_id"
})

City.hasMany(User,{
    foreignKey:"city_id"
})

Workout.hasMany(User, {
    foreignKey: "workout_id",
    // as: "userWorkouts",
});

User.belongsTo(Workout,{
    foreignKey:"workout_id"
});

// User.belongsToMany(Workout, {  //defining the through table for the many to many relationship
//     through: {
//         model: user_workout,
//         unique: false
//       },
//       // Define an alias for when data is retrieved
//     //   as: 'user_workout'
// })

// User.hasOne(City, {
//     foreignKey: "city_id",
//     as: "city",
// });


module.exports = { City, Gym, Workout, User };
