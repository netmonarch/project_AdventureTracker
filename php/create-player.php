<?php
include ("../php/config/config.php");
include ("../php/includes/sql-conn.php");

$u = $_GET['u'];
$p = $_GET['p'];
$e = $_GET['e'];

$query = "INSERT INTO userlist (";
$query.= "username,password,email,datejoined";
$query.= ") VALUES ('".$u."', PASSWORD('".$p."'), '".$e."', ".time().")";

if ( $sql->query($query) )
{
	print $u." has been added to the database.";
	mail($e, "You have been added.", "You've been added to our database as a player and DM.");
} else {
	print $sql->error;
}

?>