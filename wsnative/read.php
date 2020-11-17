<?php

include("koneksi.php");

try
{
	$firstname = $_POST['firstname'];
	$lastname = $_POST['lastname'];
	$username = $_POST['username'];

	$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	$result = $conn->query('SELECT * FROM tbl_user');
  
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