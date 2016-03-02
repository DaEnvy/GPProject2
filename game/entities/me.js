ig.module(
	'game.entities.me'
)
.requires(
	'impact.entity'
)
.defines(function(){
	EntityMe = ig.Entity.extend({
		animSheet: new ig.AnimationSheet( 'media/me.png', 20, 32 ),
		size: {x: 8, y:14},
		offset: {x: 4, y: 2},
		maxVel: {x: 100, y: 100},
		type: ig.Entity.TYPE.B,
		checkAgainst: ig.Entity.TYPE.A,
		collides: ig.Entity.COLLIDES.PASSIVE,

		init: function( x, y, settings ) {
 			this.parent( x, y, settings );
 			this.addAnim('idle', .04, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]);
		},

		update: function() {
 			this.parent();
		},

	
		check: function( other ) {			
		},

	});
});