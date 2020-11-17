<?php

include("koneksi.php");

try
{
	$firstname = $_POST['firstname'];
	$lastname = $_POST['lastname'];
	$username = $_POST['username'];

	$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	$sql = "INSERT INTO tbl_user (firstname, lastname, username)
			VALUES ('$firstname', '$lastname', '$username')";
	$conn->exec($sql);

	echo "berhasil";
} 
catch(PDOException $e) 
{
 	echo $sql . "<br>" . $e->getMessage();
}



?>