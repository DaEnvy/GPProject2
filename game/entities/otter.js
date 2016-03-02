ig.module(
	'game.entities.otter'
)
.requires(
	'impact.entity'
)
.defines(function(){
	EntityOtter = ig.Entity.extend({
		animSheet: new ig.AnimationSheet( 'media/otter.png', 27, 20 ),
		flip: true,
		size: {x: 8, y:14},
		offset: {x: 4, y: 2},
		type: ig.Entity.TYPE.B,
		checkAgainst: ig.Entity.TYPE.A,
		collides: ig.Entity.COLLIDES.PASSIVE,

		init: function( x, y, settings ) {
 			this.parent( x, y, settings );
			this.addAnim('idle', .05, [0]); 
			this.addAnim('open', .05, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
			this.addAnim('throw', .05, [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31] )
			this.timer = new ig.Timer(2);
		
			
		},

		update: function() {
			if(this.timer.delta() > 0){
				this.currentAnim = this.anims.open.rewind();
				this.timer.set(3);
			}
	
			if(this.currentAnim == this.anims.open){
				if(this.currentAnim.loopCount){
					ig.game.spawnEntity( EntityRock, this.pos.x, this.pos.y, {flip:this.flip}  );
					this.currentAnim = this.anims.throw.rewind();
				}
			}
			else if(this.currentAnim == this.anims.throw){
				if(this.currentAnim.loopCount){
					this.currentAnim = this.anims.idle;
				}
			}
 			this.parent();
		},

		handleMovementTrace: function( res ) {
 			this.parent( res );
		},
	
		check: function( other ) {
 			other.receiveDamage( 1, this );
		},

	});

	EntityRock = ig.Entity.extend({
		size: {x: 6, y: 6},
		offset: {x: 2, y: 2},
		animSheet: new ig.AnimationSheet( 'media/rock.png', 6, 6 ),
		type: ig.Entity.TYPE.NONE,
		checkAgainst: ig.Entity.TYPE.BOTH,
		collides: ig.Entity.COLLIDES.PASSIVE,
		maxVel: {x: 200, y: 200},
		bounciness: 0.2,
		bounceCounter: 0,


		init: function( x, y, settings ) {
 			this.parent( x + (settings.flip ? -4 : 7), y, settings );
 			this.vel.x = (settings.flip ? -this.maxVel.x : this.maxVel.x);
 			this.vel.y = -(50 + (Math.random()*100));
 			this.addAnim( 'idle', 0.2, [0,1] );
			this.currentAnim.flip.x = settings.flip;
		},

		handleMovementTrace: function( res ) {
 			this.parent( res );
			if( res.collision.x || res.collision.y ) {
				 this.bounceCounter++;
 				if( this.bounceCounter > 1 ) {
 					this.kill();
 				}
 			}

		},

		check: function(){
 			other.receiveDamage( 10, this );
 			this.kill();
		},		


	});
});