<?php
	function view_array($array, $flag = false) {
		echo "<pre>";
		print_r($array);
		echo "</pre>";
		if($flag == true) {
			die;
		}
	}
	
	function login_account($data) {
		// view_array($data, 1);
		if($data->success == true) {
			$_SESSION['id'] = session_id();
			$_SESSION['first_name'] = $data->first_name;
			$_SESSION['last_name'] = $data->last_name;
			// view_array($_SESSION, 1);
			header("location: dashboard.php");
		} else {
			header("location: login.php?error=$data->reason");
		}
	}
?>