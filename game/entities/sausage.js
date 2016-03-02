ig.module(
	'game.entities.sausage'
)
.requires(
	'impact.entity'
)
.defines(function(){
	EntitySausage = ig.Entity.extend({
		animSheet: new ig.AnimationSheet( 'media/sausage.png', 25, 23 ),
		size: {x: 8, y:14},
		offset: {x: 4, y: 2},
		maxVel: {x: 100, y: 100},
		flip: true,
		friction: {x: 150, y: 0},
		speed: 14,
		type: ig.Entity.TYPE.B,
		checkAgainst: ig.Entity.TYPE.A,
		collides: ig.Entity.COLLIDES.PASSIVE,

		init: function( x, y, settings ) {
 			this.parent( x, y, settings );
 			this.addAnim('idle', .07, [0]);
			this.addAnim('open', .7, [0,1,2,3,4,5, 6, 7, 8, 9], true);
		},

		update: function() {
 			this.parent();
		},

	
		check: function( other ) {
			this.currentAnim = this.anims.open;
			other.setSausage();
			
		},

	});
});