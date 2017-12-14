module.exports = function(sequelize, DataTypes) {
	var Games = sequelize.define('Games', {
		first_player: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [1,50],
				isAlphanumeric: true
			}
		},
		second_player: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		first_player_score: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		second_player_score: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		turn: {
			type: DataTypes.STRING,
			allowNull: false
		},
		need_player: {
			type: DataTypes.BOOLEAN,
			allowNull: false
		},
		game_complete: {
			type: DataTypes.BOOLEAN,
			allowNull: false
		}
	})

	Games.associate = function(models) {
		Games.hasOne(models.Users, {
			foreignKey: {
				allowNull: true
			}
		})
	}

	return Games
}