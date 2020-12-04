module.exports = function(sequelize, DataTypes) {
  var Charity = sequelize.define("Charity", {
    charityName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    amount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    
  });
  return Charity;
};
