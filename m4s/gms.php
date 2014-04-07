<?php require_once "includes/functions.php"; ?>
<?php require_once "template/doctype.php"; ?>
<html>
	<head>
		<?php require_once "template/head.php"; ?>
		<script type="text/javascript" src="tiles/gms.js?v=14"></script>
		<script type="text/javascript" src="js/dashboard.js?v=14"></script>
	</head>
	<body>
	    
	    <div id="body" class="unselectable">
	    	
	    	<div id="content" style="visibility: hidden">
	            <div id="start">GeoData Management System</div>
	            <?php require_once "template/login.php"; ?>
	            
	            <div id="metro-sections-container" class="metro">
	                <div id="trash" class="trashcan" data-bind="sortable: { data: trash }">
	                    
	                </div>
	                <div class="metro-sections" data-bind="foreach: sections">
	                    
	                    <div class="metro-section" data-bind="sortable: { data: tiles }">
	                        <div data-bind="attr: { id: uniqueId, 'class': tileClasses }">
	                            <a class="metro-tile-link">                        
	                                <!-- ko if: tileImage -->
	                                <div class="tile-image">
	                                    <img data-bind="attr: { src: tileImage }" src="img/Internet%20Explorer.png" />
	                                </div>
	                                <!-- /ko -->
	                                <!-- ko if: iconSrc -->
	                                <!-- ko if: slides().length == 0 -->
	                                <div data-bind="attr: { 'class': iconClasses }">
	                                    <img data-bind="attr: { src: iconSrc }" src="img/Internet%20Explorer.png" />
	                                </div>
	                                <!-- /ko -->
	                                <!-- /ko -->
	                                <div data-bind="foreach: slides">
	                                    <div class="tile-content-main">
	                                        <div data-bind="html: $data">
	                                        </div>
	                                    </div>
	                                </div>
	                                <!-- ko if: label -->
	                                <span class="tile-label" data-bind="html: label">Label</span>
	                                <!-- /ko -->
	                                <!-- ko if: counter -->
	                                <span class="tile-counter" data-bind="html: counter">10</span>
	                                <!-- /ko -->
	                                <!-- ko if: subContent -->
	                                <div data-bind="attr: { 'class': subContentClasses }, html: subContent">
	                                    subContent
	                                </div>
	                                <!-- /ko -->
	                            </a>
	                        </div>   
	                        
	                    </div>
	                </div>
	            </div>
	        </div>
			<?php require_once "template/footer.php"; ?>
	    </div>
	
	
	
	</body>
</html>