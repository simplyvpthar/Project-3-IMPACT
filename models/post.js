module.exports = function(sequelize, DataTypes) {
  var Charity = sequelize.define("Charity", {
    user: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    charityname: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    category: {
      type: DataTypes.STRING,
      defaultValue: "Personal"
    }
    
  });
  return Charity;
};
