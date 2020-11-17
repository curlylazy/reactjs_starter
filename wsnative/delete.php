<?php

include("koneksi.php");

try
{
	$username = $_POST['username'];

	$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	$sql = "DELETE FROM tbl_user
			WHERE username = '$username'";
	$conn->exec($sql);

	echo "berhasil";
} 
catch(PDOException $e) 
{
 	echo $sql . "<br>" . $e->getMessage();
}



?>