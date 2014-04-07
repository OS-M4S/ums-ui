// Copyright 2012 Omar AL Zabir
// Part of Droptiles project.
// This file holds the definition of tiles and which tiles appear by default 
// to new visitors. 


// The default tile setup offered to new users.
window.DefaultTiles = [
	{
		name :"Main_Dashboard",
		tiles: [
			{ id: "composited-drillhole-data", name:"cdd" },
			{ id: "ore-body-modeling", name:"obm" },
			{ id: "ore-body-volume-and-tonnage", name:"obvt" },
			{ id: "sectioning", name:"scing" },
			{ id: "intersecting-drillholes", name:"id" }
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
	
	cdd: function (uniqueId) {
		return {
			uniqueId: uniqueId,
			name: "cdd",
			iconSrc: "img/modules/gms.png",
			label: "Composite DrillHole Data",
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
	
	obm: function (uniqueId) {
		return {
			uniqueId: uniqueId,
			name: "obm",
			iconSrc: "img/modules/gpr.png",
			label: "Ore Body Modeling",
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
	
	obvt: function (uniqueId) {
		return {
			uniqueId: uniqueId,
			name: "obvt",
			iconSrc: "img/modules/mcs.png",
			label: "Ore Body Volume and Tonnage",
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
	
	scing: function (uniqueId) {
		return {
			uniqueId: uniqueId,
			name: "scing",
			iconSrc: "img/modules/gpr.png",
			label: "Sectioning",
			size: "tile-double",
			color: "bg-color-pink",
			appUrl: "Tiles/Flickr/App/FlickrApp.html",
			// cssSrc: ["tiles/flickr/flickr.css"],
			// scriptSrc: ["tiles/flickr/flickr.js?v=1"],
			// criptSrc: ["tiles/flickr/flickr_interesting.js"],
			// cssSrc: ["tiles/flickr/flickr_interesting.css"],
			// initFunc: "gms_load"
		};
	},
	
	id: function (uniqueId) {
		return {
			uniqueId: uniqueId,
			name: "id",
			iconSrc: "img/modules/gpr.png",
			label: "Intersecting Drillholes",
			size: "tile-double",
			color: "bg-color-blue",
			appUrl: "Tiles/Flickr/App/FlickrApp.html",
			// cssSrc: ["tiles/flickr/flickr.css"],
			// scriptSrc: ["tiles/flickr/flickr.js?v=1"],
			// criptSrc: ["tiles/flickr/flickr_interesting.js"],
			// cssSrc: ["tiles/flickr/flickr_interesting.css"],
			// initFunc: "gms_load"
		};
	}
        
};