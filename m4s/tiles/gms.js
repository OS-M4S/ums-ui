// Copyright 2012 Omar AL Zabir
// Part of Droptiles project.
// This file holds the definition of tiles and which tiles appear by default 
// to new visitors. 


// The default tile setup offered to new users.
window.DefaultTiles = [
	{
		name :"Main_Dashboard",
		tiles: [
			{ id: "visualize-geodata", name:"vg" },
			{ id: "access-geodata", name:"ag" },
			{ id: "download-geodata", name:"dg" },
			{ id: "create-metadata", name:"cm" },
			{ id: "search-metadata", name:"sm" },
			{ id: "map-view", name:"mv" },
			{ id: "mineral-data-management", name:"mdm" },
			{ id: "contour-maps-management", name:"cmm" },
			{ id: "export-link-data", name:"eld" },
			{ id: "export-geodata", name:"eg" },
			{ id: "export-complaint-data", name:"ecd" },
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
	
	vg: function (uniqueId) {
		return {
			uniqueId: uniqueId,
			name: "vg",
			iconSrc: "img/modules/gms.png",
			label: "Visualise GeoData",
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
	
	ag: function (uniqueId) {
		return {
			uniqueId: uniqueId,
			name: "ag",
			iconSrc: "img/modules/gpr.png",
			label: "Access GeoData",
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
	
	dg: function (uniqueId) {
		return {
			uniqueId: uniqueId,
			name: "dg",
			iconSrc: "img/modules/mcs.png",
			label: "Download GeoData",
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
	
	cm: function (uniqueId) {
		return {
			uniqueId: uniqueId,
			name: "cm",
			iconSrc: "img/modules/gpr.png",
			label: "Create MetaData",
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
	
	sm: function (uniqueId) {
		return {
			uniqueId: uniqueId,
			name: "sm",
			iconSrc: "img/modules/gpr.png",
			label: "Search MetaData",
			size: "tile-double",
			color: "bg-color-blue",
			appUrl: "Tiles/Flickr/App/FlickrApp.html",
			// cssSrc: ["tiles/flickr/flickr.css"],
			// scriptSrc: ["tiles/flickr/flickr.js?v=1"],
			// criptSrc: ["tiles/flickr/flickr_interesting.js"],
			// cssSrc: ["tiles/flickr/flickr_interesting.css"],
			// initFunc: "gms_load"
		};
	},
	
	mv: function (uniqueId) {
		return {
			uniqueId: uniqueId,
			name: "mv",
			iconSrc: "img/modules/gpr.png",
			label: "Map View",
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
	
	mdm: function (uniqueId) {
		return {
			uniqueId: uniqueId,
			name: "mdm",
			iconSrc: "img/modules/gpr.png",
			label: "Mineral Data Management",
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
	
	cmm: function (uniqueId) {
		return {
			uniqueId: uniqueId,
			name: "cmm",
			iconSrc: "img/modules/gpr.png",
			label: "Contours Maps Management",
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
	
	eld: function (uniqueId) {
		return {
			uniqueId: uniqueId,
			name: "eld",
			iconSrc: "img/modules/gpr.png",
			label: "Export Link Data",
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
	
	eg: function (uniqueId) {
		return {
			uniqueId: uniqueId,
			name: "eg",
			iconSrc: "img/modules/gpr.png",
			label: "Export GeoData",
			size: "tile-double",
			color: "bg-color-yellow",
			appUrl: "Tiles/Flickr/App/FlickrApp.html",
			// cssSrc: ["tiles/flickr/flickr.css"],
			// scriptSrc: ["tiles/flickr/flickr.js?v=1"],
			// criptSrc: ["tiles/flickr/flickr_interesting.js"],
			// cssSrc: ["tiles/flickr/flickr_interesting.css"],
			// initFunc: "gms_load"
		};
	},
	
	ecd: function (uniqueId) {
		return {
			uniqueId: uniqueId,
			name: "ecd",
			iconSrc: "img/modules/gpr.png",
			label: "Export Open M4S Complaint Data",
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