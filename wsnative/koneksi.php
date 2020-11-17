<?php

// ini biasanya jadi masalah saat web service, jadi mesti di allow dulu
// kalau sudah online harus masukkan nama web kita agar hanya bisa diakses oleh web kita
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "db_react";

try 
{
	$conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
	$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} 
catch(PDOException $e) 
{
  	echo "Connection failed: " . $e->getMessage();
}

?>