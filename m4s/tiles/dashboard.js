// Copyright 2012 Omar AL Zabir
// Part of Droptiles project.
// This file holds the definition of tiles and which tiles appear by default 
// to new visitors. 


// The default tile setup offered to new users.
window.DefaultTiles = [
	{
		name :"Main_Dashboard",
		tiles: [
			{ id: "geodata-management-system", name:"gms" },
			{ id: "geodata-public-repository", name:"gpr" },
			{ id: "mineral-cadasre-system", name:"mcs" },
			{ id: "digital-mapping-system", name:"dms" },
			{ id: "mineral-resourse-visualization", name:"mrmvs" },
			{ id: "mine-management-system", name:"mms" },
			{ id: "mine-planning-design", name:"mpds" },
			{ id: "data-handling-estimation", name:"edhes" },
			{ id: "system-settings", name:"ss" },
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
	
	gms: function (uniqueId) {
		return {
			uniqueId: uniqueId,
			name: "gms",
			iconSrc: "img/modules/gms.png",
			label: "GeoData Management System",
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
	
	gpr: function (uniqueId) {
		return {
			uniqueId: uniqueId,
			name: "gpr",
			iconSrc: "img/modules/gpr.png",
			label: "GeoData Public Repository",
			size: "tile-double",
			color: "bg-color-darken",
			appUrl: "gpr.php",
			// cssSrc: ["tiles/flickr/flickr.css"],
			// scriptSrc: ["tiles/flickr/flickr.js?v=1"],
			// criptSrc: ["tiles/flickr/flickr_interesting.js"],
			// cssSrc: ["tiles/flickr/flickr_interesting.css"],
			// initFunc: "gms_load"
		};
	},
	
	mcs: function (uniqueId) {
		return {
			uniqueId: uniqueId,
			name: "mcs",
			iconSrc: "img/modules/mcs.png",
			label: "Mineral Cadastre System",
			size: "tile-double",
			color: "bg-color-darken",
			appUrl: "mcs.php",
			// cssSrc: ["tiles/flickr/flickr.css"],
			// scriptSrc: ["tiles/flickr/flickr.js?v=1"],
			// criptSrc: ["tiles/flickr/flickr_interesting.js"],
			// cssSrc: ["tiles/flickr/flickr_interesting.css"],
			// initFunc: "gms_load"
		};
	},
	
	dms: function (uniqueId) {
		return {
			uniqueId: uniqueId,
			name: "dms",
			iconSrc: "img/modules/dms.png",
			label: "Digital Mapping System",
			size: "tile-double",
			color: "bg-color-darken",
			appUrl: "dms.php",
			// cssSrc: ["tiles/flickr/flickr.css"],
			// scriptSrc: ["tiles/flickr/flickr.js?v=1"],
			// criptSrc: ["tiles/flickr/flickr_interesting.js"],
			// cssSrc: ["tiles/flickr/flickr_interesting.css"],
			// initFunc: "gms_load"
		};
	},
	
	mrmvs: function (uniqueId) {
		return {
			uniqueId: uniqueId,
			name: "mrmvs",
			iconSrc: "img/modules/gpr.png",
			label: "Mineral Resourse Modeling and Visualization System",
			size: "tile-double",
			color: "bg-color-darken",
			appUrl: "mrmvs.php",
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
			iconSrc: "img/modules/gpr.png",
			label: "Mine Management System",
			size: "tile-double",
			color: "bg-color-darken",
			appUrl: "mms.php",
			// cssSrc: ["tiles/flickr/flickr.css"],
			// scriptSrc: ["tiles/flickr/flickr.js?v=1"],
			// criptSrc: ["tiles/flickr/flickr_interesting.js"],
			// cssSrc: ["tiles/flickr/flickr_interesting.css"],
			// initFunc: "gms_load"
		};
	},
	
	mpds: function (uniqueId) {
		return {
			uniqueId: uniqueId,
			name: "mpds",
			iconSrc: "img/modules/gpr.png",
			label: "Mine Palanning and Design System",
			size: "tile-double",
			color: "bg-color-darken",
			appUrl: "mpds.php",
			// cssSrc: ["tiles/flickr/flickr.css"],
			// scriptSrc: ["tiles/flickr/flickr.js?v=1"],
			// criptSrc: ["tiles/flickr/flickr_interesting.js"],
			// cssSrc: ["tiles/flickr/flickr_interesting.css"],
			// initFunc: "gms_load"
		};
	},
	
	edhes: function (uniqueId) {
		return {
			uniqueId: uniqueId,
			name: "edhes",
			iconSrc: "img/modules/gpr.png",
			label: "Exploratory Data Handling and Estimation System",
			size: "tile-double",
			color: "bg-color-darken",
			appUrl: "edhes.php",
			// cssSrc: ["tiles/flickr/flickr.css"],
			// scriptSrc: ["tiles/flickr/flickr.js?v=1"],
			// criptSrc: ["tiles/flickr/flickr_interesting.js"],
			// cssSrc: ["tiles/flickr/flickr_interesting.css"],
			// initFunc: "gms_load"
		};
	},
	
	ss: function (uniqueId) {
		return {
			uniqueId: uniqueId,
			name: "ss",
			iconSrc: "img/modules/gpr.png",
			label: "System Settings",
			size: "tile-double",
			color: "bg-color-darken",
			appUrl: "Tiles/Flickr/App/FlickrApp.html",
			// cssSrc: ["tiles/flickr/flickr.css"],
			// scriptSrc: ["tiles/flickr/flickr.js?v=1"],
			// criptSrc: ["tiles/flickr/flickr_interesting.js"],
			// cssSrc: ["tiles/flickr/flickr_interesting.css"],
			// initFunc: "gms_load"
		};
	}
        
};