module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 140]
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [6, 100]
      }
    },

    role: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  // User.associate = function(models) {
  //   User.hasOne(models.?);
  //   User.hasOne(models.?);
  // };

  return User;
};
