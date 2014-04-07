// Copyright 2012 Omar AL Zabir
// Part of Droptiles project.
// This file holds the definition of tiles and which tiles appear by default 
// to new visitors. 


// The default tile setup offered to new users.
window.DefaultTiles = [
	{
		name :"Main_Dashboard",
		tiles: [
			{ id: "map-customization", name:"mc" },
			{ id: "search-map-information", name:"smi" },
			{ id: "map-user-assignment", name:"mua" },
			{ id: "publish-map", name:"pm" }
		]
	},
];


// Convert it to a serialized string
window.DefaultTiles = _.map(window.DefaultTiles, function (section) {
	return "" + section.name + "~" + (_.map(section.tiles, function (tile) {
		return "" + tile.id + "," + tile.name;
	})).join(".");
}).join("|");
        

// Definition of the tiles, their default values.
window.TileBuilders = {
	
	mc: function (uniqueId) {
		return {
			uniqueId: uniqueId,
			name: "mc",
			iconSrc: "img/modules/gms.png",
			label: "Map Customization",
			size: "tile-double",
			color: "bg-color-darken",
			appUrl: "Tiles/Flickr/App/FlickrApp.html",
			// cssSrc: ["tiles/flickr/flickr.css"],
			// scriptSrc: ["tiles/flickr/flickr.js?v=1"],
			// criptSrc: ["tiles/flickr/flickr_interesting.js"],
			// cssSrc: ["tiles/flickr/flickr_interesting.css"],
			// initFunc: "gms_load"
		};
	},
	
	smi: function (uniqueId) {
		return {
			uniqueId: uniqueId,
			name: "smi",
			iconSrc: "img/modules/gpr.png",
			label: "Search Information on Map",
			size: "tile-double",
			color: "bg-color-green",
			appUrl: "Tiles/Flickr/App/FlickrApp.html",
			// cssSrc: ["tiles/flickr/flickr.css"],
			// scriptSrc: ["tiles/flickr/flickr.js?v=1"],
			// criptSrc: ["tiles/flickr/flickr_interesting.js"],
			// cssSrc: ["tiles/flickr/flickr_interesting.css"],
			// initFunc: "gms_load"
		};
	},
	
	mua: function (uniqueId) {
		return {
			uniqueId: uniqueId,
			name: "mua",
			iconSrc: "img/modules/mcs.png",
			label: "Map User Assignment",
			size: "tile-double",
			color: "bg-color-yellow",
			appUrl: "mcs.php",
			// cssSrc: ["tiles/flickr/flickr.css"],
			// scriptSrc: ["tiles/flickr/flickr.js?v=1"],
			// criptSrc: ["tiles/flickr/flickr_interesting.js"],
			// cssSrc: ["tiles/flickr/flickr_interesting.css"],
			// initFunc: "gms_load"
		};
	},
	
	pm: function (uniqueId) {
		return {
			uniqueId: uniqueId,
			name: "pm",
			iconSrc: "img/modules/gpr.png",
			label: "Publish Map",
			size: "tile-double",
			color: "bg-color-pink",
			appUrl: "Tiles/Flickr/App/FlickrApp.html",
			// cssSrc: ["tiles/flickr/flickr.css"],
			// scriptSrc: ["tiles/flickr/flickr.js?v=1"],
			// criptSrc: ["tiles/flickr/flickr_interesting.js"],
			// cssSrc: ["tiles/flickr/flickr_interesting.css"],
			// initFunc: "gms_load"
		};
	}
        
};