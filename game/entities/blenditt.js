ig.module(
	'game.entities.blenditt'
)
.requires(
	'impact.entity'
)
.defines(function(){
	EntityBlenditt = ig.Entity.extend({
		animSheet: new ig.AnimationSheet( 'media/blenditt.png', 11, 19 ),
		size: {x: 8, y:14},
		offset: {x: 4, y: 2},
		maxVel: {x: 100, y: 100},
		type: ig.Entity.TYPE.B,
		checkAgainst: ig.Entity.TYPE.A,
		collides: ig.Entity.COLLIDES.PASSIVE,

		init: function( x, y, settings ) {
 			this.parent( x, y, settings );
 			this.addAnim('idle', .07, [0, 1, 2, 3, 4, 5]);
		},

		update: function() {
 			this.parent();
		},

	
		check: function( other ) {			
		},

	});
});