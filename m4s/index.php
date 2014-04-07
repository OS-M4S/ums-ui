<?php require_once "template/doctype.php"; ?>
<?php require_once "includes/functions.php"; ?>
<?php
	if(isset($_SESSION) && sizeof($_SESSION) > 0) {
		header('Location: dashboard.php');
	} else {
		header('Location: login.php');
	}
?>