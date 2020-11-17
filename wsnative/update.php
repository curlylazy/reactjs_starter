<?php

include("koneksi.php");

try
{
	$firstname = $_POST['firstname'];
	$lastname = $_POST['lastname'];
	$username = $_POST['username'];

	$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	$sql = "UPDATE tbl_user SET
				firstname = '$firstname',
				lastname = '$lastname'
			WHERE username = '$username'
			";
	$conn->exec($sql);

	echo "berhasil";
} 
catch(PDOException $e) 
{
 	echo $sql . "<br>" . $e->getMessage();
}



?>