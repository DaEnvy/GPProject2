ig.module( 
	'game.main' 
)
.requires(
	'impact.game',
	'game.levels.ground',
	'game.levels.construction',
	'game.levels.museum'
)
.defines(function(){

	MyGame = ig.Game.extend({
	
	lives: 3,
	life: new ig.Image('media/life.png'),
	gravity: 300,
	
		init: function() {
			// Initialize your game here; bind keys etc.
			this.loadLevel( LevelConstruction );
			this._mapWidth = ig.game.backgroundMaps[0].width * ig.game.backgroundMaps[0].tilesize - (ig.system.width);
			this._mapHeight = ig.game.backgroundMaps[0].height * ig.game.backgroundMaps[0].tilesize - (ig.system.height);
			//Bind keys
			ig.input.bind( ig.KEY.LEFT_ARROW, 'left');
			ig.input.bind( ig.KEY.RIGHT_ARROW, 'right');
			ig.input.bind( ig.KEY.X, 'jump');
			ig.input.bind( ig.KEY.TAB, 'switch' );
			ig.input.bind( ig.KEY.C, 'shoot');
			ig.input.bind( ig.KEY.G, 'gravity');
			ig.input.bind( ig.KEY.UP_ARROW, 'up');
			ig.input.bind( ig.KEY.DOWN_ARROW, 'down');
		},
	
		update: function() {
			// screen follows the player
			ig.game.screen = this.screen;

			var player = this.getEntitiesByType( EntityPlayer )[0];

			x = player.startPosition.x - (ig.system.width / 2);
			y = player.startPosition.y - (ig.system.height / 2);

			//this.screen.x = (x > 0 && x < this._mapWidth) ? x : this.screen.x;
			//this.screen.y = (y > 0 && y < this._mapHeight) ? y : this.screen.y;

 			if( player ) {
				x = player.pos.x - (ig.system.width / 2);
				y = player.pos.y - (ig.system.height / 2);
				this.screen.x = (x > 0 && x < this._mapWidth) ? x : this.screen.x;
				this.screen.y = (y > 0 && y < this._mapHeight) ? y : this.screen.y;
 			}
 			// Update all entities and BackgroundMaps
			// Update all entities and backgroundMaps
			this.parent();
		
			// Add your own, additional update code here
		},
	
		draw: function() {
			// Draw all entities and backgroundMaps
			this.parent();
			for(var i = 0; i < this.lives; i++){
				this.life.draw(((this.life.width+2) * i) +5, 3);
			}
		},

		gameOver: function(){
			ig.system.setGame(GameOverScreen);

		},

	});


// Start the Game with 60fps, a resolution of 320x240, scaled
// up by a factor of 2


	StartScreen = ig.Game.extend({
 		background: new ig.Image('media/title.png'),
 		
		init: function() {
 			ig.input.bind( ig.KEY.SPACE, 'start');
 		},
 
		update: function() {
 			if(ig.input.pressed ('start')){
 				ig.system.setGame(MyGame);
 			}
 			this.parent();
 		},
 
		draw: function() {
 			this.parent();
			this.background.draw(0,0);

 		},
	});


	GameOverScreen = ig.Game.extend({
 		background: new ig.Image('media/end.png'),
 
 		stats: {},

 		init: function() {
 			ig.input.bind( ig.KEY.SPACE, 'start');

 		},

 	update: function() {
 		if(ig.input.pressed('start')){
 			ig.system.setGame(StartScreen);
 		}
 		this.parent();
 	},

 	draw: function() {
 		this.parent();
		this.background.draw(0,0);
 	},
});
		






ig.main( '#canvas', StartScreen, 60, 320, 240, 2 );
});
