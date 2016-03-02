Files Provided:
	game.min.js (Which includes the basics, but also)
		ground.js
		beaver.js
		otter.js
		levelexit.js
		player.js
		cement.js
		sausage.js
		rudy.js
		blenditt.js
		ladder.js
		construction.js
		base-ladder.js
		museum.js
		me.js
		player.js
		

	The media folder (Holding all of the game's .pngs and tile .pngs)


In order to run the game, you must make sure the media folder's directory matches up with the directory structure
in the files (have a folder called media with one sub-folder called Project2 that contains the parallax-tiles.png and tiles-level2.png files)

You may also need to change the scripts in your index.html file to:
		<script type="javascript" src="game.min.js"></script>

		Make sure the location of your game.min.js is set correctly.

If set up properly, running index.html should load the game!

In the event this does not work, simply unbaking the game and placing the entity classes, media files, and level files
into the Impact subfolders should work if you leave index.html unchanged. 



All of my artwork can be viewed publicly at:
	www.piskelapp.com/user/6475290549769280



Credit:
	Jessee Freeman, "Introducing HTML5 Game Development" 
		- Offered a lot of great resources and references for pixel animation/creating and using spirtesheets.
	
	Justin Stahlman (StahlmanDesign)
		- The ImpactJS Ladder plugin allowed my ladders and player to interact. Still had to animate and add the
		logic for actually climbing, but allowed for place-specific y-axis travel.
