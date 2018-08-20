<?php #db-checks.php

header("Content-Type: text/html; charset=utf-8");

include ("../php/config/config.php");
include ("../php/includes/sql-conn.php");

	$u = $sql->real_escape_string($_GET['u']);
	
	$p = $sql->real_escape_string($_GET['p']);
	
	$e = $sql->real_escape_string($_GET['e']);
	
	$check1 = "SELECT userid FROM userlist WHERE username='".$u."'";
	$result = $sql->query($check1);
	if ($result->num_rows == 1 )
	{
		print $u." is taken.\r\n";
	} else {
		print $u." is not taken.\r\n";
	}
	
	$check2 = "SELECT userid FROM userlist WHERE email='".$e."'";
	$result2 = $sql->query($check2);
	if ($result2->num_rows == 1 )
	{
		print $e." is in use.\r\n";
	} else {
		print $e." is not in use.\r\n";
	}

?>