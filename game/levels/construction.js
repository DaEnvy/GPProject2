ig.module( 'game.levels.construction' )
.requires( 'impact.image','game.entities.player','game.entities.otter','game.entities.sausage','game.entities.beaver','game.entities.cement','game.entities.levelexit','game.entities.rudy','game.entities.blenditt','game.entities.ladder' )
.defines(function(){
LevelConstruction=/*JSON[*/{
	"entities": [
		{
			"type": "EntityPlayer",
			"x": 24,
			"y": 298
		},
		{
			"type": "EntityOtter",
			"x": 244,
			"y": 242
		},
		{
			"type": "EntitySausage",
			"x": 32,
			"y": 150
		},
		{
			"type": "EntityOtter",
			"x": 128,
			"y": 18
		},
		{
			"type": "EntityBeaver",
			"x": 300,
			"y": 186
		},
		{
			"type": "EntityBeaver",
			"x": 308,
			"y": 242
		},
		{
			"type": "EntityOtter",
			"x": 292,
			"y": 122
		},
		{
			"type": "EntityCement",
			"x": 208,
			"y": 320,
			"settings": {
				"size": {
					"x": 64,
					"y": 32
				}
			}
		},
		{
			"type": "EntityCement",
			"x": 88,
			"y": 328,
			"settings": {
				"size": {
					"x": 80,
					"y": 24
				}
			}
		},
		{
			"type": "EntityBeaver",
			"x": 180,
			"y": 242
		},
		{
			"type": "EntityLevelexit",
			"x": 60,
			"y": 24,
			"settings": {
				"level": "ground"
			}
		},
		{
			"type": "EntityCement",
			"x": 320,
			"y": 312,
			"settings": {
				"size": {
					"x": 72,
					"y": 40
				}
			}
		},
		{
			"type": "EntityBeaver",
			"x": 132,
			"y": 66
		},
		{
			"type": "EntityBeaver",
			"x": 236,
			"y": 34
		},
		{
			"type": "EntityCement",
			"x": 216,
			"y": 312,
			"settings": {
				"size": {
					"x": 48,
					"y": 8
				}
			}
		},
		{
			"type": "EntityCement",
			"x": 96,
			"y": 320,
			"settings": {
				"size": {
					"x": 64,
					"y": 8
				}
			}
		},
		{
			"type": "EntityCement",
			"x": 104,
			"y": 312,
			"settings": {
				"size": {
					"x": 48,
					"y": 8
				}
			}
		},
		{
			"type": "EntityRudy",
			"x": 20,
			"y": 10
		},
		{
			"type": "EntityBlenditt",
			"x": 36,
			"y": 18
		},
		{
			"type": "EntityLadder",
			"x": 328,
			"y": 80,
			"settings": {
				"size": {
					"x": 8,
					"y": 56
				}
			}
		},
		{
			"type": "EntityLadder",
			"x": 288,
			"y": 48,
			"settings": {
				"size": {
					"x": 8,
					"y": 32
				}
			}
		},
		{
			"type": "EntityLadder",
			"x": 176,
			"y": 48,
			"settings": {
				"size": {
					"x": 8,
					"y": 32
				}
			}
		},
		{
			"type": "EntityLadder",
			"x": 56,
			"y": 256,
			"settings": {
				"size": {
					"x": 8,
					"y": 56
				}
			}
		},
		{
			"type": "EntityLadder",
			"x": 80,
			"y": 136,
			"settings": {
				"size": {
					"x": 8,
					"y": 40
				}
			}
		},
		{
			"type": "EntityLadder",
			"x": 112,
			"y": 32,
			"settings": {
				"size": {
					"x": 10,
					"y": 48
				}
			}
		},
		{
			"type": "EntityLadder",
			"x": 344,
			"y": 200,
			"settings": {
				"size": {
					"x": 8,
					"y": 56
				}
			}
		},
		{
			"type": "EntityLadder",
			"x": 240,
			"y": 136,
			"settings": {
				"size": {
					"x": 8,
					"y": 64
				}
			}
		}
	],
	"layer": [
		{
			"name": "parallax",
			"width": 50,
			"height": 100,
			"linkWithCollision": false,
			"visible": 0,
			"tilesetName": "media/Project2/parallax-tiles.png",
			"repeat": true,
			"preRender": false,
			"distance": "2",
			"tilesize": 8,
			"foreground": false,
			"data": [
				[23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,19,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23],
				[23,23,23,23,23,23,21,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,25,25,23,23,23,23,23,23,23,23],
				[23,23,23,23,23,23,23,23,23,23,25,25,25,23,23,23,23,23,23,23,23,23,21,23,23,23,23,23,23,23,23,23,23,23,21,23,23,23,23,25,25,25,23,23,23,23,23,23,23,23],
				[23,23,23,23,23,23,23,23,23,23,23,25,25,25,23,23,23,23,23,23,23,23,23,23,23,25,23,23,23,23,23,23,23,23,23,23,23,23,25,25,25,28,23,23,23,23,19,23,23,23],
				[23,23,23,23,23,23,23,23,23,23,23,25,23,25,23,23,23,23,23,23,23,23,23,23,23,25,25,25,23,23,23,23,23,23,23,23,23,23,25,25,25,25,25,23,23,23,23,23,23,23],
				[23,23,23,23,23,23,23,23,23,23,25,25,25,23,23,23,23,23,23,23,23,23,23,23,23,25,25,25,25,25,25,23,23,23,23,23,23,23,23,25,25,25,25,25,23,23,23,23,23,23],
				[23,23,23,23,23,23,23,23,23,25,25,23,23,23,23,23,23,23,23,23,23,23,23,23,25,23,23,23,25,23,25,23,23,23,23,23,23,23,23,23,25,25,23,23,23,23,23,23,23,23],
				[23,23,23,23,21,23,23,23,23,25,25,23,23,23,23,23,23,23,23,19,23,23,23,23,25,25,25,25,25,25,25,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23],
				[23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,25,25,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23],
				[23,23,19,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,25,25,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23],
				[23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,24,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23],
				[23,23,23,21,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23],
				[23,23,23,23,23,23,23,23,19,23,23,23,23,23,23,23,24,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,21,23,23,23],
				[23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,25,23,25,23,23,23,23,23,23,21,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23],
				[23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,25,25,25,25,5,23,23,23,23,23,23,23,23,23,23,23,23,23,25,25,25,23,23,23,23,23,23,23,23,23,23,23],
				[23,23,23,23,23,23,23,23,25,25,23,23,23,23,23,23,23,25,25,25,25,25,11,23,23,23,23,23,23,23,23,23,23,18,25,25,25,25,25,25,23,23,19,23,23,23,23,23,23,23],
				[23,23,23,23,23,23,23,25,25,23,23,23,23,23,23,23,23,23,23,25,25,7,9,23,23,23,23,23,23,23,23,23,23,25,25,25,25,25,25,25,23,23,23,23,23,23,23,23,23,23],
				[23,23,23,23,23,23,25,25,25,25,25,25,23,23,23,23,23,23,23,6,10,7,9,23,23,23,23,23,23,23,23,23,23,25,25,25,25,25,25,23,23,23,23,23,23,23,23,23,23,23],
				[23,23,23,20,23,23,18,25,25,25,23,23,23,23,23,23,23,23,23,8,2,2,11,23,23,23,23,23,23,23,23,23,23,23,25,25,25,25,23,23,23,23,23,23,23,23,23,23,23,23],
				[23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,6,10,7,9,23,23,23,23,23,23,23,23,23,23,23,23,25,25,23,23,23,23,23,23,23,23,23,23,23,23,23],
				[23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,6,10,7,9,23,23,23,23,23,23,20,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23],
				[23,23,23,23,23,23,23,23,23,23,23,23,23,21,23,23,23,23,23,8,2,2,11,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23],
				[1,17,17,5,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,6,10,7,9,19,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,19,23,23,23,23,23],
				[6,10,7,9,23,23,23,23,23,23,18,25,25,23,23,25,23,23,23,6,10,7,9,23,23,23,23,23,23,23,23,23,23,23,21,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23],
				[6,10,7,9,23,23,19,23,23,23,25,25,25,25,25,25,23,23,23,8,2,2,11,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23],
				[8,2,2,11,23,23,23,23,23,23,25,25,25,25,25,23,23,23,23,6,10,7,9,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23],
				[6,10,7,9,23,23,23,23,23,23,23,23,25,25,23,23,23,23,23,6,10,7,9,23,23,23,23,25,25,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23],
				[6,10,7,9,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,8,2,2,11,23,23,23,25,25,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,1,17,17,5,23,23],
				[8,2,2,11,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,6,10,7,9,23,23,23,25,25,25,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,6,10,7,9,23,23],
				[6,10,7,9,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,6,10,7,9,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,25,23,23,23,23,23,6,10,7,9,23,23],
				[6,10,7,9,23,23,23,23,23,23,23,23,23,23,23,20,23,23,23,8,2,2,11,23,23,23,23,23,23,23,23,23,23,23,23,23,23,18,25,25,25,23,23,23,8,2,2,11,23,23],
				[8,2,2,11,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,6,10,7,9,23,23,23,20,23,23,23,23,23,23,23,23,23,23,25,24,25,25,23,23,23,6,10,7,9,23,23],
				[6,10,7,9,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,6,10,7,9,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,25,23,23,6,10,7,9,23,23],
				[6,10,7,9,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,8,2,2,11,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,8,2,2,11,23,23],
				[8,2,2,11,23,23,23,23,23,23,23,1,17,17,5,23,23,23,23,6,10,7,9,23,23,23,23,23,23,23,23,19,23,23,23,23,23,23,23,23,23,23,23,23,6,10,7,9,23,23],
				[6,10,7,9,23,23,23,23,19,23,23,6,10,7,9,23,23,23,23,6,10,7,9,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,6,10,7,9,23,23],
				[6,10,7,9,23,23,23,23,23,23,23,8,2,2,11,23,23,23,23,8,2,2,11,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,8,2,2,11,23,23],
				[8,2,2,11,23,23,23,23,23,23,23,8,2,2,11,21,23,23,23,6,10,7,25,25,25,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,21,23,23,6,10,7,9,23,23],
				[6,10,7,9,23,23,23,23,23,23,23,6,10,7,9,23,23,23,25,25,25,25,25,25,25,25,23,1,5,1,5,23,23,23,23,23,23,25,25,23,23,23,23,23,6,10,7,9,17,17],
				[6,10,7,9,17,17,17,17,17,17,17,8,2,2,11,23,23,23,25,25,25,25,25,25,25,25,23,6,9,6,9,23,23,23,23,23,23,25,25,25,23,23,23,23,8,2,2,11,14,14],
				[8,2,2,11,14,14,14,14,14,14,14,8,2,2,11,23,23,23,25,25,25,25,25,25,25,25,23,8,11,8,11,23,23,25,25,25,18,25,25,25,23,23,23,23,6,10,7,9,23,23],
				[6,10,7,9,23,23,23,23,23,23,23,6,10,7,9,23,23,23,18,25,25,25,25,25,23,23,23,6,9,6,9,23,23,23,23,25,25,23,25,25,23,23,23,23,6,10,7,9,23,23],
				[6,10,7,9,23,23,23,23,23,23,23,8,2,2,11,17,17,17,17,17,25,25,25,17,17,17,17,8,11,8,11,23,23,23,23,23,25,25,23,23,23,23,23,23,8,2,2,11,23,23],
				[8,2,2,11,23,23,23,23,23,23,23,8,2,2,11,14,14,14,14,14,14,14,25,14,14,14,14,6,9,6,9,23,23,23,23,23,23,23,23,23,23,23,23,23,6,10,7,9,23,23],
				[6,10,7,9,23,23,23,23,23,23,23,6,10,7,9,23,23,23,23,6,10,7,9,23,23,23,23,8,11,8,11,23,23,23,23,23,23,23,23,23,23,23,23,23,6,10,7,9,23,23],
				[6,10,7,9,23,23,23,23,23,23,23,8,2,2,11,23,23,23,23,8,2,2,11,23,23,23,23,6,9,6,9,17,17,17,17,17,17,17,17,17,17,17,17,17,8,2,2,11,23,23],
				[23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23],
				[23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23],
				[23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23],
				[23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23],
				[23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23],
				[23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23],
				[23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23],
				[23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23],
				[23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23],
				[23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23],
				[23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23],
				[23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23],
				[23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23],
				[23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23],
				[23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23],
				[23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23],
				[23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,20,23,23],
				[23,23,22,23,23,23,23,23,23,23,23,23,20,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,25,23,23,23,23,23,23,23,23,23,23,23,23,23],
				[23,23,23,23,25,23,25,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,22,23,23,23,23,23,23,23,20,23,23,23,25,25,25,25,23,23,22,23,23,23,23,23,23,23,23],
				[23,23,25,25,25,23,23,23,23,23,23,23,23,23,23,23,23,23,23,25,25,23,23,23,23,23,23,23,23,23,23,23,23,23,23,25,25,25,25,23,23,23,23,23,23,23,23,23,23,23],
				[23,23,25,23,25,25,25,23,23,23,23,23,23,23,23,23,23,23,25,25,25,25,23,23,23,23,23,23,23,23,23,23,23,23,23,23,25,25,25,23,23,23,23,23,23,23,23,23,23,23],
				[23,23,23,23,25,25,25,25,23,23,23,23,23,23,23,23,23,25,25,25,25,25,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23],
				[23,20,23,23,25,23,25,23,23,23,23,23,23,22,23,23,23,23,23,23,25,23,23,23,23,23,20,23,23,23,23,23,23,22,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23],
				[23,23,23,25,23,25,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,20,23,23,23,23,23,23],
				[23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23]
			]
		},
		{
			"name": "fix_",
			"width": 50,
			"height": 50,
			"linkWithCollision": false,
			"visible": 1,
			"tilesetName": "media/Project2/tiles- level 2.png",
			"repeat": false,
			"preRender": false,
			"distance": "1",
			"tilesize": 8,
			"foreground": false,
			"data": [
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20],
				[20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20],
				[20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20],
				[20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20],
				[20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20]
			]
		},
		{
			"name": "collision",
			"width": 50,
			"height": 45,
			"linkWithCollision": false,
			"visible": 1,
			"tilesetName": "",
			"repeat": false,
			"preRender": false,
			"distance": 1,
			"tilesize": 8,
			"foreground": false,
			"data": [
				[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
				[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				[1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				[1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				[1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,1,1,0,0,0,0,1],
				[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				[1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				[1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				[1,0,0,0,0,0,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,1],
				[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				[1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				[1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,1],
				[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				[1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,1],
				[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				[1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1],
				[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1],
				[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1],
				[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,1],
				[1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1],
				[0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1],
				[0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1],
				[0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1],
				[0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1],
				[0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1]
			]
		},
		{
			"name": "level",
			"width": 50,
			"height": 45,
			"linkWithCollision": false,
			"visible": 1,
			"tilesetName": "media/Project2/tiles- level 2.png",
			"repeat": false,
			"preRender": false,
			"distance": "1",
			"tilesize": 8,
			"foreground": false,
			"data": [
				[20,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,20],
				[20,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,20],
				[20,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,20],
				[20,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,20],
				[20,2,2,2,2,2,2,8,8,8,8,8,8,10,13,1,8,8,10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,20],
				[20,0,0,0,0,0,0,0,0,0,0,0,0,0,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,20],
				[20,0,0,0,0,0,0,0,0,0,0,0,0,0,12,0,0,0,0,0,0,0,13,1,2,2,2,2,2,2,2,8,8,8,8,10,13,0,0,0,0,0,0,0,0,0,0,0,0,20],
				[20,0,0,0,0,0,0,0,0,0,0,0,0,0,12,0,0,0,0,0,0,0,12,0,0,0,0,0,0,0,0,0,0,0,0,0,12,0,0,0,0,0,0,0,0,0,0,0,0,20],
				[20,0,0,0,0,0,0,0,0,0,0,0,0,0,12,0,0,0,0,0,0,0,12,0,0,0,0,0,0,0,0,0,0,0,0,0,12,0,0,0,0,0,0,0,0,0,0,0,0,20],
				[20,0,0,0,0,0,0,0,0,0,0,0,0,0,11,0,0,0,0,0,0,0,11,0,0,0,0,0,0,0,0,0,0,0,0,0,11,0,0,0,0,0,0,0,0,0,0,0,0,20],
				[20,0,0,0,0,0,0,0,0,0,0,0,1,2,2,2,2,2,8,8,8,8,8,10,0,0,0,0,0,0,0,0,0,0,0,1,2,2,8,8,10,13,1,2,10,0,0,0,0,20],
				[20,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,12,0,0,0,0,0,0,0,20],
				[20,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,12,0,0,0,0,0,0,0,20],
				[20,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,12,0,0,0,0,0,0,0,20],
				[20,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,12,0,0,0,0,0,0,0,20],
				[20,0,0,0,0,0,0,0,0,0,0,0,25,24,25,24,0,0,25,24,25,24,25,24,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,12,0,0,0,0,0,0,0,20],
				[20,0,0,0,0,0,0,0,0,0,0,0,22,23,22,23,0,0,22,23,22,23,22,23,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,11,0,0,0,0,0,0,0,20],
				[20,0,0,0,0,0,1,2,8,10,13,1,2,2,2,2,2,2,8,8,8,8,8,8,8,8,8,8,8,10,13,1,2,2,2,2,2,8,8,8,8,8,8,10,0,0,0,0,0,20],
				[20,0,0,0,0,0,0,0,0,0,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,20],
				[20,0,0,0,0,0,0,0,0,0,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,20],
				[20,0,0,0,0,0,0,0,0,0,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,20],
				[20,0,0,0,0,0,0,0,0,0,11,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,20],
				[20,0,0,1,2,2,2,2,2,2,8,8,8,8,8,8,10,0,0,0,0,0,0,0,0,0,0,0,0,0,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,20],
				[20,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,20],
				[20,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,11,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,20],
				[20,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,2,2,2,2,2,8,8,8,8,8,8,10,13,0,0,0,0,0,20],
				[20,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,12,0,0,0,0,0,20],
				[20,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,12,0,0,0,0,0,20],
				[20,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,12,0,0,0,0,0,20],
				[20,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,12,0,0,0,0,0,20],
				[20,0,0,0,0,0,0,0,0,0,0,0,0,0,25,24,25,24,25,24,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,12,0,0,0,0,0,20],
				[20,0,0,0,0,0,0,0,0,0,0,0,0,0,22,23,22,23,22,23,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,11,0,0,0,0,0,20],
				[20,0,0,0,0,0,0,13,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,10,0,0,0,0,20],
				[20,0,0,0,0,0,0,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,20],
				[20,0,0,0,0,0,0,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,20],
				[25,24,0,0,0,0,0,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,25,24,0,0,0,0,0,0,0,0,0,0,0,0,25,24,0,0,0,0,0,0,0,0,0,0,20],
				[22,23,0,0,0,0,0,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,22,23,0,0,0,0,0,0,0,0,0,0,0,0,22,23,0,0,0,0,0,0,0,0,0,0,20],
				[25,24,0,0,0,0,0,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,25,24,25,24,0,0,0,0,0,0,0,0,0,25,24,25,24,0,0,0,0,0,0,0,0,0,0,20],
				[22,23,0,0,0,0,0,11,0,0,0,0,0,0,0,0,0,0,0,0,0,0,22,23,22,23,0,0,0,0,0,0,0,0,0,22,23,22,23,0,0,0,0,0,0,0,0,0,0,20],
				[20,19,19,21,21,20,20,21,21,20,20,20,21,17,15,16,16,15,18,20,21,20,21,21,20,20,21,17,15,15,16,15,18,21,20,21,21,20,21,20,17,15,16,15,16,16,15,15,18,20],
				[21,20,20,21,21,20,20,20,21,20,20,20,17,15,15,16,15,16,15,18,20,21,21,20,21,20,17,15,15,16,15,16,15,18,20,21,21,20,21,20,17,16,15,15,16,16,15,15,18,20],
				[21,20,20,21,21,20,20,20,20,20,20,17,15,15,16,15,15,15,16,15,18,21,21,20,21,20,17,16,15,15,15,16,15,18,20,21,21,20,21,20,17,16,15,15,16,16,15,15,18,20],
				[21,20,20,21,21,20,20,20,21,20,20,17,15,15,16,15,15,15,16,15,18,20,21,20,20,20,17,15,15,16,15,16,15,18,20,20,20,20,20,20,17,16,15,15,16,16,15,15,18,21],
				[21,20,20,21,21,20,20,20,21,20,20,17,15,15,16,15,15,15,16,15,18,20,20,20,20,20,17,15,15,16,15,16,15,18,20,20,20,20,20,20,17,16,15,15,16,16,15,15,18,21],
				[21,20,20,21,21,20,20,20,21,20,20,17,15,15,16,15,15,15,16,15,18,20,20,20,20,20,17,16,15,15,15,16,15,18,20,20,20,20,20,20,17,16,15,15,16,16,15,15,18,21]
			]
		}
	]
}/*]JSON*/;
LevelConstructionResources=[new ig.Image('media/Project2/parallax-tiles.png'), new ig.Image('media/Project2/tiles- level 2.png'), new ig.Image('media/Project2/tiles- level 2.png')];
});