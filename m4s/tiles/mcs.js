// Copyright 2012 Omar AL Zabir
// Part of Droptiles project.
// This file holds the definition of tiles and which tiles appear by default 
// to new visitors. 


// The default tile setup offered to new users.
window.DefaultTiles = [
	{
		name :"Main_Dashboard",
		tiles: [
			{ id: "client-management", name:"cm" },
			{ id: "application-management", name:"am" },
			{ id: "expiry-renewal", name:"er" },
			{ id: "license-inquiry", name:"li" },
			{ id: "fee-management", name:"fm" },
			{ id: "refine-search", name:"rs" },
			{ id: "survey-management", name:"sm" },
			{ id: "mines-committee", name:"mc" },
			{ id: "cadastral-maps-management", name:"cmm" },
			{ id: "reports", name:"rpts" },
			{ id: "data-access", name:"da" },
			{ id: "document-archive", name:"doc_arc" },
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
	
	cm: function (uniqueId) {
		return {
			uniqueId: uniqueId,
			name: "cm",
			iconSrc: "img/modules/gms.png",
			label: "Client Management",
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
	
	am: function (uniqueId) {
		return {
			uniqueId: uniqueId,
			name: "am",
			iconSrc: "img/modules/gpr.png",
			label: "Application Management",
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
	
	er: function (uniqueId) {
		return {
			uniqueId: uniqueId,
			name: "er",
			iconSrc: "img/modules/mcs.png",
			label: "Expiry and Renewal",
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
	
	li: function (uniqueId) {
		return {
			uniqueId: uniqueId,
			name: "li",
			iconSrc: "img/modules/gpr.png",
			label: "License Inquiry",
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
	
	fm: function (uniqueId) {
		return {
			uniqueId: uniqueId,
			name: "fm",
			iconSrc: "img/modules/gpr.png",
			label: "Fee Management",
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
	
	rs: function (uniqueId) {
		return {
			uniqueId: uniqueId,
			name: "rs",
			iconSrc: "img/modules/gpr.png",
			label: "Refine Search",
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
	
	sm: function (uniqueId) {
		return {
			uniqueId: uniqueId,
			name: "sm",
			iconSrc: "img/modules/gpr.png",
			label: "Survey Management",
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
	
	mc: function (uniqueId) {
		return {
			uniqueId: uniqueId,
			name: "mc",
			iconSrc: "img/modules/gpr.png",
			label: "Mines Committee",
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
	
	cmm: function (uniqueId) {
		return {
			uniqueId: uniqueId,
			name: "cmm",
			iconSrc: "img/modules/gpr.png",
			label: "Cadastral Maps Management",
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
	
	rpts: function (uniqueId) {
		return {
			uniqueId: uniqueId,
			name: "rpts",
			iconSrc: "img/modules/gpr.png",
			label: "Reports",
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
	
	da: function (uniqueId) {
		return {
			uniqueId: uniqueId,
			name: "da",
			iconSrc: "img/modules/gpr.png",
			label: "Data Access",
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
	
	doc_arc: function (uniqueId) {
		return {
			uniqueId: uniqueId,
			name: "doc_arc",
			iconSrc: "img/modules/gpr.png",
			label: "Document Archives",
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