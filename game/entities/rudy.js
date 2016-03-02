ig.module(
	'game.entities.rudy'
)
.requires(
	'impact.entity'
)
.defines(function(){
	EntityRudy = ig.Entity.extend({
		animSheet: new ig.AnimationSheet( 'media/rudy.png', 16, 25 ),
		size: {x: 8, y:14},
		offset: {x: 4, y: 2},
		type: ig.Entity.TYPE.B,
		checkAgainst: ig.Entity.TYPE.A,
		collides: ig.Entity.COLLIDES.PASSIVE,

		init: function( x, y, settings ) {
 			this.parent( x, y, settings );
 			this.addAnim('idle', .07, [0, 1, 2, 3]);
		},

		update: function() {
 			this.parent();
		},

	
		check: function( other ) {
			
		},

	});
});