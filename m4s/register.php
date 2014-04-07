<?php require_once "includes/functions.php"; ?>
<?php require_once "template/doctype.php"; ?>
<html>
	<head>
		<?php require_once "template/head.php"; ?>
	</head>
	
	<body>
		<div class="metro appnavbar">
			<ul>
				<li>
					<a class="backbutton" href="exit_app.php" data-bind="click: closeApp">
						<img src="img/back-48.png" />
					</a>
				</li>
				<li>
					<h1 class="start">Register</h1>
				</li>
			</ul>
		</div>
		
		<div class="appnavbar_space"></div>
		
		<div id="body">
			<div class="container metro">
				
				<form method="post" action="" id="LoginForm" class="metro-form">
					
					<div class="metro-form-control" style="width: 300px">
						<label>Email</label>
						<div class="metro-text-box">
							<input name="username" autofocus="" value="yourname@domain.com" type="text">
							<span class="helper"></span>
						</div>
					</div>
					
					<div class="metro-form-control" style="width: 300px">
						<label>First name</label>
						
						<div class="metro-text-box">
							<input name="firstname" value="" type="text">
							<span class="helper"></span>
						</div>
					</div>
					
					<div class="metro-form-control" style="width: 300px">
						<label>Last name</label>
						<div class="metro-text-box">
							<input name="lastname" value="" type="text">
							<span class="helper"></span>
						</div>
					</div>
					
					<div class="metro-form-control" style="width: 300px">
						<label>Password</label>
						<div class="metro-text-box">
							<input name="password" value="" type="password">
							<span class="helper"></span>
						</div>
					</div>
					
					<div class="metro-form-control" style="width: 300px">
						<label>Confirm Password</label>
						<div class="metro-text-box">
							<input name="confirm_password" value="" type="password">
							<span class="helper"></span>
						</div>
					</div>
					
					<label class="metro-check">
						<input name="remember" checked="" type="checkbox">
						<span>Remember Me</span>
					</label>
					
					<input name="ctl00$body$Signup_Button" value="Signup" id="body_Signup_Button" class="metro-button" type="submit">
            
            </form>    
        </div>
        
    </div>
	</body>

</html>