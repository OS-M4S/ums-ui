// Copyright 2012 Omar AL Zabir
// Part of Droptiles project.
// This file holds the definition of tiles and which tiles appear by default 
// to new visitors. 


// The default tile setup offered to new users.
window.DefaultTiles = [
	{
		name :"Main_Dashboard",
		tiles: [
			{ id: "blast-design", name:"bd" },
			{ id: "mining-budget-and-schedule", name:"mbs" },
			{ id: "grade-control", name:"gc" },
			{ id: "refine-reserves-calculations", name:"rrc" },
			{ id: "equipment-management", name:"em" },
			{ id: "human-resource-management", name:"hrm" },
			{ id: "material-management", name:"mm" },
			{ id: "safety-management", name:"sm" },
			{ id: "mining-requirements", name:"mr" },
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
	
	bd: function (uniqueId) {
		return {
			uniqueId: uniqueId,
			name: "bd",
			iconSrc: "img/modules/gms.png",
			label: "Blast Design",
			size: "tile-double",
			color: "bg-color-darken",
			appUrl: "gms.php",
			// cssSrc: ["tiles/flickr/flickr.css"],
			// scriptSrc: ["tiles/flickr/flickr.js?v=1"],
			// criptSrc: ["tiles/flickr/flickr_interesting.js"],
			// cssSrc: ["tiles/flickr/flickr_interesting.css"],
			// initFunc: "gms_load"
		};
	},
	
	mbs: function (uniqueId) {
		return {
			uniqueId: uniqueId,
			name: "mbs",
			iconSrc: "img/modules/gpr.png",
			label: "Mining Budget and Schedule",
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
	
	gc: function (uniqueId) {
		return {
			uniqueId: uniqueId,
			name: "gc",
			iconSrc: "img/modules/mcs.png",
			label: "Grade Control",
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
	
	rrc: function (uniqueId) {
		return {
			uniqueId: uniqueId,
			name: "rrc",
			iconSrc: "img/modules/gpr.png",
			label: "Refine Reserves Calculations",
			size: "tile-double",
			color: "bg-color-pink",
			appUrl: "dms.php",
			// cssSrc: ["tiles/flickr/flickr.css"],
			// scriptSrc: ["tiles/flickr/flickr.js?v=1"],
			// criptSrc: ["tiles/flickr/flickr_interesting.js"],
			// cssSrc: ["tiles/flickr/flickr_interesting.css"],
			// initFunc: "gms_load"
		};
	},
	
	em: function (uniqueId) {
		return {
			uniqueId: uniqueId,
			name: "em",
			iconSrc: "img/modules/gpr.png",
			label: "Equipment Management",
			size: "tile-double",
			color: "bg-color-blue",
			appUrl: "mrmvs.php",
			// cssSrc: ["tiles/flickr/flickr.css"],
			// scriptSrc: ["tiles/flickr/flickr.js?v=1"],
			// criptSrc: ["tiles/flickr/flickr_interesting.js"],
			// cssSrc: ["tiles/flickr/flickr_interesting.css"],
			// initFunc: "gms_load"
		};
	},
	
	hrm: function (uniqueId) {
		return {
			uniqueId: uniqueId,
			name: "hrm",
			iconSrc: "img/modules/gpr.png",
			label: "Human Resource Management",
			size: "tile-double",
			color: "bg-color-orange",
			appUrl: "Tiles/Flickr/App/FlickrApp.html",
			// cssSrc: ["tiles/flickr/flickr.css"],
			// scriptSrc: ["tiles/flickr/flickr.js?v=1"],
			// criptSrc: ["tiles/flickr/flickr_interesting.js"],
			// cssSrc: ["tiles/flickr/flickr_interesting.css"],
			// initFunc: "gms_load"
		};
	},
	
	mm: function (uniqueId) {
		return {
			uniqueId: uniqueId,
			name: "mm",
			iconSrc: "img/modules/gpr.png",
			label: "Material Management",
			size: "tile-double",
			color: "bg-color-purple",
			appUrl: "Tiles/Flickr/App/FlickrApp.html",
			// cssSrc: ["tiles/flickr/flickr.css"],
			// scriptSrc: ["tiles/flickr/flickr.js?v=1"],
			// criptSrc: ["tiles/flickr/flickr_interesting.js"],
			// cssSrc: ["tiles/flickr/flickr_interesting.css"],
			// initFunc: "gms_load"
		};
	},
	
	sm: function (uniqueId) {
		return {
			uniqueId: uniqueId,
			name: "sm",
			iconSrc: "img/modules/gpr.png",
			label: "Safety Management",
			size: "tile-double",
			color: "bg-color-red",
			appUrl: "Tiles/Flickr/App/FlickrApp.html",
			// cssSrc: ["tiles/flickr/flickr.css"],
			// scriptSrc: ["tiles/flickr/flickr.js?v=1"],
			// criptSrc: ["tiles/flickr/flickr_interesting.js"],
			// cssSrc: ["tiles/flickr/flickr_interesting.css"],
			// initFunc: "gms_load"
		};
	},
	
	mr: function (uniqueId) {
		return {
			uniqueId: uniqueId,
			name: "mr",
			iconSrc: "img/modules/gpr.png",
			label: "Mining Requirements",
			size: "tile-double",
			color: "bg-color-green",
			appUrl: "Tiles/Flickr/App/FlickrApp.html",
			// cssSrc: ["tiles/flickr/flickr.css"],
			// scriptSrc: ["tiles/flickr/flickr.js?v=1"],
			// criptSrc: ["tiles/flickr/flickr_interesting.js"],
			// cssSrc: ["tiles/flickr/flickr_interesting.css"],
			// initFunc: "gms_load"
		};
	}
        
};