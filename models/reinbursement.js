module.exports = function(sequelize, DataTypes) {
    var Reinbursement = sequelize.define("Reinbursement", {
      user: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      school: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      course: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      grade: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      message: {
        type: DataTypes.TEXT,
        allowNull: true,
      }
      
      
    });
    return Reinbursement;
  };