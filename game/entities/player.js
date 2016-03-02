ig.module(
'game.entities.player'
)
.requires(
'impact.entity'
)
.defines(function(){
 	EntityPlayer = ig.Entity.extend({
 	animSheet: new ig.AnimationSheet( 'media/kristoff.png', 16, 16 ),
	powerup: false,
	climbing: false,
	swim: false,
	weapon: 0,
	health: 20,
	startPosition: null,
	totalWeapons: 3,
 	size: {x: 8, y:14},
 	offset: {x: 4, y: 2},
 	flip: false,
 	maxVel: {x: 100, y: 150},
 	friction: {x: 600, y: 0},
 	accelGround: 400,
 	accelAir: 200,
 	jump: 200,
	type: ig.Entity.TYPE.A,
	checkAgainst: ig.Entity.TYPE.NONE,
	collides: ig.Entity.COLLIDES.PASSIVE,
	activeWeapon: "EntityPunch",
	startPosition: null,

 		init: function( x, y, settings ) {
			this.startPosition = {x:x,y:y};
 			this.parent( x, y, settings );
 			// Add the animations
 			this.setupAnimation();	
			ig.game.player = this;
 		},

		update: function() {
 			// move left or right
 			var accel = this.standing ? this.accelGround : this.accelAir;
 			if( ig.input.state('left') ) {
 				this.accel.x = -accel;
 				this.flip = true;
 			}
			else if( ig.input.state('right') ) {
 				this.accel.x = accel;
 				this.flip = false;
 			}
			else if( ig.input.state('up') ){
				if(ig.game.gravity == 0){
					this.accel.y = -accel;
				}
				this.climbing = true;
			}
			else if( ig.input.state('down') ){
				if(ig.game.gravity == 0){
					this.accel.y = accel;
				}
				this.climbing = true;
			}
			else{
				this.accel.y = 0;
 				this.accel.x = 0;
 			}
 			// jump
 			if( this.standing && ig.input.pressed('jump') ) {
 				this.climbing = false;
				this.vel.y = -this.jump;
				
 			}
			if (ig.input.pressed('gravity')){
				if( ig.game.gravity == 0){				
					ig.game.gravity = 300;
				}
				else{
					ig.game.gravity = 0;
				}
				
			}
			if( ig.input.pressed('shoot') ) {
				if(this.weapon == 0){
					this.currentAnim = this.anims.punch.rewind();
					ig.game.spawnEntity( this.activeWeapon, this.pos.x, this.pos.y, {flip:this.flip} );

				}
				else if (this.weapon == 1){
					this.currentAnim = this.anims.kick.rewind();
					ig.game.spawnEntity( this.activeWeapon, this.pos.x, this.pos.y, {flip:this.flip} );
				}
				else if (this.weapon == 2 && this.powerup == true){	
					this.currentAnim = this.anims.throw.rewind();
						ig.game.spawnEntity( this.activeWeapon, this.pos.x, this.pos.y, {flip:this.flip} );
					
				}
				else
					ig.game.spawnEntity( this.activeWeapon, this.pos.x, this.pos.y, {flip:this.flip} );

				//add switch statement for weapons
			}			
			if( ig.input.pressed('switch') ) {
 				this.weapon ++;
 				if(this.weapon >= this.totalWeapons)
 				this.weapon = 0;
 				switch(this.weapon){
					case(0):
 						this.activeWeapon = "EntityPunch";
 						break;
 					case(1):
						this.activeWeapon = "EntityKick";
						break;
					case(2):
						if(this.powerup == true){
							this.activeWeapon = "EntityLightning";
							break;
						}
						else
							break;
 				}
				this.setupAnimation();
			}

			// set the current animation, based on the player's speed
			if( this.vel.y < 0 ) {
				if(ig.game.gravity == 0){
					
				}
				else{
					if(this.climbing == false){
 						this.currentAnim = this.anims.jump;
					}
					else{
						this.currentAnim = this.anims.climb;
					}
				}
			}
			else if( this.vel.y > 0 ) {
 					if(this.climbing == false){
 						this.currentAnim = this.anims.fall;
					}
					else{
						this.currentAnim = this.anims.climb;
					}
			}
			else if( this.vel.x != 0 ) {
				if(this.swim == false){
 					this.currentAnim = this.anims.run;
				}
				else
					this.currentAnim = this.anims.swim;
			}
			else{
				if(this.currentAnim == this.anims.punch || this.currentAnim == this.anims.kick || this.currentAnim == this.anims.throw){
 					if(this.currentAnim.loopCount){
						this.currentAnim = this.anims.idle;
					}
				}
				else
					this.currentAnim = this.anims.idle;
			}
			this.currentAnim.flip.x = this.flip;
 			

 	// ------------------ begin ladder code ------------------
            if (this.isConfiguredForClimbing){      // this will only be true if level contains a ladder
                this.checkForLadder(this);
                if (this.ladderTouchedTimer.delta() > 0) this.isTouchingLadder = false;
                // reset in case player leaves ladder. This allows to walk across/atop ladder
            }else{
                var ladders = ig.game.getEntitiesByType("EntityLadder")
                if (ladders != undefined) {
                    for (var i = 0 ; i < ladders.length; i ++){
                        ladders[i].makeEntitiesEligibleClimbers();
                    }
                }
            }
            // ------------------  end  ladder code ------------------



			// move!
 			this.parent();

		},

		setSausage: function(){
			this.powerup = true;

		},

		setSwim: function(){
			this.swim = true;
		},

		setupAnimation: function(){
			
			if(this.powerup == true){
				offset = 21;
			}	
			else{
				offset = 0;
			}

			if(this.swim == true){
				this.addAnim('idle', 1, [52]);
			}
			else{
				this.addAnim('idle', 1, [0+offset]);
			}
 			this.addAnim('run', .07, [0+offset,1+offset,2+offset,3+offset,4+offset,5+offset]);
 			this.addAnim('jump', 1, [9+offset]); //9
 			this.addAnim('fall', 0.4, [6+offset,7+offset]); //6, 7
			this.addAnim('punch', .07, [10+offset, 11+offset, 12+offset, 13+offset]);
			this.addAnim('kick', .07, [14+offset, 15+offset, 16+offset, 17+offset]);
			this.addAnim('climb', 1, [18+offset, 19+offset, 20+offset]);
			this.addAnim('throw', .03, [42, 43, 44, 45, 46, 47, 48, 49, 50, 51]);
			this.addAnim('swim', 0.07, [52, 53, 54, 55, 56, 57]);
			this.swim = false;

		},

		kill: function(){
 			this.parent();
			this.onDeath();
			//ig.game.spawnEntity(EntityPlayer, this.startPosition.x, this.startPosition.y);
			
		},

		onDeath: function(){
			ig.game.lives--;
			if(ig.game.lives < 0){
				ig.game.gameOver();
			}
			else{
				ig.game.spawnEntity(EntityPlayer, this.startPosition.x, this.startPosition.y);
			}

		},


	});

	EntityLightning = ig.Entity.extend({
		size: {x: 5, y: 3},
		animSheet: new ig.AnimationSheet( 'media/lightning.png', 13, 8 ),
		maxVel: {x: 200, y: 0},
		type: ig.Entity.TYPE.NONE,
		checkAgainst: ig.Entity.TYPE.B,
		collides: ig.Entity.COLLIDES.PASSIVE,

		init: function( x, y, settings ) {
			this.parent( x + (settings.flip ? -4 : 8) , y+4, settings );
			this.vel.x = this.accel.x = (settings.flip ? -this.maxVel.x : this.maxVel.x);
 			this.addAnim( 'idle', 0.2, [0] );
			this.currentAnim.flip.x = settings.flip;
		},


		handleMovementTrace: function( res ) {
 			this.parent( res );
 			if( res.collision.x || res.collision.y ){
 				this.kill();
 			}
		},

		check: function( other ) {
 			other.receiveDamage( 3, this );
 			this.kill();
		},
	});

	EntityPunch = ig.Entity.extend({
		size: {x: 5, y: 3},
		animSheet: new ig.AnimationSheet( 'media/fist.png', 11, 10 ),
		maxVel: {x: 200, y: 0},
		type: ig.Entity.TYPE.NONE,
		checkAgainst: ig.Entity.TYPE.B,
		collides: ig.Entity.COLLIDES.PASSIVE,

		init: function( x, y, settings ) {
			this.parent( x + (settings.flip ? -4 : 8) , y+4, settings );
			this.vel.x = this.accel.x = (settings.flip ? -this.maxVel.x : this.maxVel.x);
 			this.addAnim( 'idle', 0.2, [0] );
			this.currentAnim.flip.x = settings.flip;
			this.timer = new ig.Timer(0.5);
		},


		update: function(){
			if(this.timer.delta() > 0){
				this.kill();
			}
			this.parent();
		},

		handleMovementTrace: function( res ) {
 			this.parent( res );
 			if( res.collision.x || res.collision.y ){
 				this.kill();
 			}
		},

		check: function( other ) {
 			other.receiveDamage( 3, this );
 			this.kill();
		},
	});

	EntityKick = ig.Entity.extend({
		size: {x: 1, y: 1},
		animSheet: new ig.AnimationSheet( 'media/boot.png', 10, 7 ),
		maxVel: {x: 200, y: 0},
		type: ig.Entity.TYPE.NONE,
		checkAgainst: ig.Entity.TYPE.B,
		collides: ig.Entity.COLLIDES.PASSIVE,
		

		init: function( x , y , settings ) {
			this.parent( x + (settings.flip ? -4 : 8) , y+6, settings );
			this.vel.x = this.accel.x = (settings.flip ? -this.maxVel.x : this.maxVel.x);
 			this.addAnim( 'idle', 0.2, [0] );
			this.currentAnim.flip.x = settings.flip;
			this.timer = new ig.Timer(0.005);
		},

		update: function(){
			if(this.timer.delta() > 0){
				this.kill();
			}
			this.parent();
		},

		handleMovementTrace: function( res ) {
 			this.parent( res );
 			if( res.collision.x || res.collision.y ){
 				this.kill();
 			}
		},

		check: function( other ) {
 			other.receiveDamage( 5, this );
 			this.kill();
		},
	});




	

});