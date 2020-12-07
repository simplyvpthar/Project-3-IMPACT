module.exports = function(sequelize, DataTypes) {
  var PeerFunding = sequelize.define("PeerFunding", {
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
  return PeerFunding;
};