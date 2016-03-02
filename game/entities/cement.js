ig.module(
	'game.entities.cement'
)
.requires(
	'impact.entity'
)
.defines(function(){
	EntityCement = ig.Entity.extend({
		size: {x: 8, y:8},
		offset: {x: 4, y: 2},
		type: ig.Entity.TYPE.B,
		checkAgainst: ig.Entity.TYPE.A,
		collides: ig.Entity.COLLIDES.PASSIVE,
		_wmScalable: true,
    		_wmDrawBox: true,
    		_wmBoxColor: 'rgba(196, 255, 0, 0.7)',

		init: function( x, y, settings ) {
 			this.parent( x, y, settings );
		},

		update: function() {
 			this.parent();
		},

	
		check: function( other ) {
			other.setSwim();
			
		},

	});
});