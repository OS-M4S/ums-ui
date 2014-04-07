<?php require_once "template/doctype.php"; ?>
<?php require_once "includes/functions.php"; ?>
<?php
	unset($_SESSION['first_name']);
	unset($_SESSION['last_name']);
	unset($_SESSION['id']);
	session_destroy();
	header("location: index.php");
?>