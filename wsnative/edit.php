<?php

include("koneksi.php");

try
{
	$username = $_POST['username'];

	$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	$result = $conn->query("SELECT * FROM tbl_user WHERE username = '$username'");
  
	// tampilkan data
	$arrdata = array();
	while($row = $result->fetch()){
		$arrdata[] = $row;
	}

	echo json_encode($arrdata);

} 
catch(PDOException $e) 
{
 	echo $sql . "<br>" . $e->getMessage();
}



?>