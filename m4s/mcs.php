<?php require_once "includes/functions.php"; ?>
<?php require_once "template/doctype.php"; ?>
<html>
	<head>
		<?php require_once "template/head.php"; ?>
		<script type="text/javascript" src="tiles/mcs.js?v=14"></script>
		<script type="text/javascript" src="js/dashboard.js?v=14"></script>
	</head>
	<body>
	    
		<div id="body" class="unselectable">
	    	
			<div id="content" style="visibility: hidden">
				<div id="start">Mineral Cadastre System</div>
				<?php require_once "template/login.php"; ?>
				
				<div class="apps row-fluid">
					
					<div class="row-fluid">
						<a href="#" class="btn-app bg-color-blue">
							<img src="img/modules/mcs.png" /><br />
							<span>Client Management</span>
						</a>
						
						<a href="#" class="btn-app bg-color-green">
							<img src="img/modules/mcs.png" /><br />
							<span>Application Management</span>
						</a>
						
						<a href="#" class="btn-app bg-color-yellow">
							<img src="img/modules/mcs.png" /><br />
							<span>Expiry and Renewal</span>
						</a>
						
						<a href="#" class="btn-app bg-color-blueDark">
							<img src="img/modules/mcs.png" /><br />
							<span>License and Inquiry</span>
						</a>
						
						<a href="#" class="btn-app bg-color-greenDark">
							<img src="img/modules/mcs.png" /><br />
							<span>Fee Management</span>
						</a>
						
						<a href="#" class="btn-app bg-color-red">
							<img src="img/modules/mcs.png" /><br />
							<span>Refine Search</span>
						</a>
						
						<a href="#" class="btn-app bg-color-purple">
							<img src="img/modules/mcs.png" /><br />
							<span>Survey Management</span>
						</a>
						
						<a href="#" class="btn-app bg-color-pink">
							<img src="img/modules/mcs.png" /><br />
							<span>Mines Committee</span>
						</a>
						
						<a href="#" class="btn-app bg-color-orange">
							<img src="img/modules/mcs.png" /><br />
							<span>Cadastral Maps Management</span>
						</a>
						
						<a href="#" class="btn-app bg-color-grey">
							<img src="img/modules/mcs.png" /><br />
							<span>Reportts</span>
						</a>
						
						<a href="#" class="btn-app bg-color-darken">
							<img src="img/modules/mcs.png" /><br />
							<span>Data Access</span>
						</a>
						
						<a href="#" class="btn-app bg-color-blue">
							<img src="img/modules/mcs.png" /><br />
							<span>document Archive</span>
						</a>
					</div>
					
					<div class="app-content row-fluid">
						<div class="sidepan span3 bg-color-white pull-left">
							<h3>Controls</h3>
							<ul>
								<li>
									<label class="checkbox" for="location1">
										<input type="checkbox" id="location1" />Data Frame
									</label>
									
									<ul>
										<li>
											<label class="checkbox" for="location2">
												<input type="checkbox" id="location2" />Projection
											</label>
										</li>
									</ul>
								</li>
								
								<li>
									<label class="checkbox" for="location4">
										<input type="checkbox" id="location4" />Layers
									</label>
									
									<ul>
										<li>
											<label class="checkbox" for="location3">
												<input type="checkbox" id="location3" />Point Data
											</label>
										</li>
										
										<li>
											<label class="checkbox" for="location5">
												<input type="checkbox" id="location5" />Surface
											</label>
										</li>
										
										<li>
											<label class="checkbox" for="location6">
												<input type="checkbox" id="location6" />Cross Section
											</label>
										</li>
									</ul>
									
								</li>
								
								<li>
									<label class="checkbox" for="location7">
										<input type="checkbox" id="location7" />View Legends									
									<ul>
										<li>
											<label class="checkbox" for="location8">
												<input type="checkbox" id="location8" />Red
											</label>
										</li>
										
										<li>
											<label class="checkbox" for="location9">
												<input type="checkbox" id="location9" />Green
											</label>
										</li>
										
										<li>
											<label class="checkbox" for="location10">
												<input type="checkbox" id="location10" />Blue
											</label>
										</li>
									</ul>
									
								</li>
							</ul>
							
							<h3>Layers</h3>
							
							<ul>
								<li>
									<label class="checkbox" for="layer1">
										<input type="checkbox" id="layer1" />Layer 1
									</label>
									
									<ul>
										<li>
											<label class="checkbox" for="layer2">
												<input type="checkbox" id="layer2" />Road
											</label>
										</li>
										
										<li>
											<label class="checkbox" for="layer3">
												<input type="checkbox" id="layer3" />Street
											</label>
										</li>
										
										<li>
											<label class="checkbox" for="layer4">
												<input type="checkbox" id="layer4" />Mine
											</label>
										</li>
									</ul>
								</li>
								
								<li>
									<label class="checkbox" for="location5">
										<input type="checkbox" id="location5" />New Layer
									</label>
								</li>
							</ul>
						</div>
						
						<div class="span9 pull-right">
							<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d67350.20412901662!2d71.57979370831869!3d34.0070337383824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38d917b90f0e79cf%3A0xa816b2637558a412!2sPeshawar!5e1!3m2!1sen!2s!4v1396500576563" width="100%" height="660" frameborder="0" style="border:0"></iframe>
						</div>
					</div>
					
					<div class="clearfix"></div>
				</div>
				
			</div>
			<?php require_once "template/footer.php"; ?>
		</div>
	
	
	
	</body>
</html>