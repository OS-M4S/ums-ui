// Copyright 2012 Omar AL Zabir
// Part of Droptiles project.
// This file holds the definition of tiles and which tiles appear by default 
// to new visitors. 


// The default tile setup offered to new users.
window.DefaultTiles = [
	{
		name :"Main_Dashboard",
		tiles: [
			{ id: "mine-capacity-life", name:"mcl" },
			{ id: "cut-off-grade-analysis", name:"cga" },
			{ id: "mine-method-selection", name:"mms" },
			{ id: "mine-planning", name:"mp" },
			{ id: "mine-equipment-management", name:"mem" },
			{ id: "economic-analysis", name:"ea" },
			{ id: "mine-design", name:"md" }
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
	
	mcl: function (uniqueId) {
		return {
			uniqueId: uniqueId,
			name: "mcl",
			iconSrc: "img/modules/gms.png",
			label: "Mine Capacity Life",
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
	
	cga: function (uniqueId) {
		return {
			uniqueId: uniqueId,
			name: "cga",
			iconSrc: "img/modules/gpr.png",
			label: "Cut-Off Grade Analysis",
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
	
	mms: function (uniqueId) {
		return {
			uniqueId: uniqueId,
			name: "mms",
			iconSrc: "img/modules/mcs.png",
			label: "Mine Method Selection",
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
	
	mp: function (uniqueId) {
		return {
			uniqueId: uniqueId,
			name: "mp",
			iconSrc: "img/modules/gpr.png",
			label: "Mine Planning",
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
	
	mem: function (uniqueId) {
		return {
			uniqueId: uniqueId,
			name: "mem",
			iconSrc: "img/modules/gpr.png",
			label: "Mine Equipment Management",
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
	
	ea: function (uniqueId) {
		return {
			uniqueId: uniqueId,
			name: "ea",
			iconSrc: "img/modules/gpr.png",
			label: "Economic Analysis",
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
	
	md: function (uniqueId) {
		return {
			uniqueId: uniqueId,
			name: "md",
			iconSrc: "img/modules/gpr.png",
			label: "Mine Design",
			size: "tile-double",
			color: "bg-color-purple",
			appUrl: "Tiles/Flickr/App/FlickrApp.html",
			// cssSrc: ["tiles/flickr/flickr.css"],
			// scriptSrc: ["tiles/flickr/flickr.js?v=1"],
			// criptSrc: ["tiles/flickr/flickr_interesting.js"],
			// cssSrc: ["tiles/flickr/flickr_interesting.css"],
			// initFunc: "gms_load"
		};
	}
        
};