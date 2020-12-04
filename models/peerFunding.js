module.exports = function(sequelize, DataTypes) {
  var peerFunding = sequelize.define("peerFunding", {
    user: {
      type: DataTypes.STRING,
      allowNull: false,
    },
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