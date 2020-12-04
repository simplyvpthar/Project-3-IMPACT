module.exports = function(sequelize, DataTypes) {
  var peerFunding = sequelize.define("peerFunding", {
    firstname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false,},
    
    amount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: true,
    }
    
    
  });
  return peerFunding;
};