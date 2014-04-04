<?php require_once "includes/functions.php"; ?>
<?php require_once "template/doctype.php"; ?>
<?php $_SESSION ?>
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
					<h1 class="start">Login</h1>
				</li>
			</ul>
		</div>
		
		<div class="appnavbar_space"></div>
		
		<div id="body">
			<div class="container metro">
				<p>Are you a new user and want to save your Dashboard?</p>
				
				<p>
					<a href="register.php" class="metro-button">Yes, Register me.</a>
				</p>
				<p>&nbsp;</p>
				<p>&nbsp;</p>
				<p>No, I am an existing user. I want to login:</p>
				
				<form method="post" action="process_login.php" id="LoginForm" class="metro-form">
					
					<div class="metro-form-control" style="width: 300px">
						<label>Username</label>
						
						<div class="metro-text-box">
							<input name="username" type="text" placeholder="Username" autofocus />
							<span class="helper"></span>
						</div>
					</div>
					
					<div class="metro-form-control" style="width: 300px">
						<label>Password</label>
						<div class="metro-text-box">
							<input name="password" type="password" placeholder="Password" />
							<span class="helper"></span>
						</div>
					</div>
					
					<label class="metro-check">
						<input type="checkbox" name="remember" checked>
						<span>Remember Me</span>
					</label>
					
					<?php if(isset($_GET['error']) && $_GET['error'] != "") { ?>
						<div class="error">
							<span class="label label-important">Error</span>
							<span id="body_Message"><?php echo $_GET['error'] ?></span>
						</div>
					<?php } ?>
					
					<input type="submit" value="Login" id="body_LoginButton" class="metro-button" />
				
				</form>
			</div>
		</div>
	</body>

</html>