<?php require_once "includes/functions.php"; ?>
<?php
	
	if(sizeof($_POST) > 0) {
		$credentials = array (
			'username'	=>	$_POST['username'],
			'password'	=>	$_POST['password']
		);
		// view_array($credentials, 1);
		if($credentials['username'] == "admin" && $credentials['password'] == "admin") {
			// $json = json_encode($credentials);
			// 			
			// $ch = curl_init('http://192.168.1.110:8000/api/v1/user/login/?format=json');                                                                      
			// curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");
			// curl_setopt($ch, CURLOPT_POSTFIELDS, $json);
			// curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
			// curl_setopt($ch, CURLOPT_HTTPHEADER, array(
				// 'Content-Type: application/json',
				// 'Content-Length: ' . strlen($json))
			// );                                                           
			//
			// $response_json = curl_exec($ch);
			// $data = json_decode($response_json);
			// login_account($data);
			
			$_SESSION['id'] = session_id();
			$_SESSION['first_name'] = "Admin";
			$_SESSION['last_name'] = "Admin";
			header("location: dashboard.php");
		} else {
			header("location: login.php?error=Username or Password not Entered");
		}
	}
?>