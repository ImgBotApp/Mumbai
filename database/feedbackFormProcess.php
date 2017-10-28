 <?php
 	include "dbConn.php";
 	$name = $_POST["Name"];
 	$Email = $_POST["Email"];
 	$message = $_POST["message"];

 	$sql = "INSERT INTO review VALUES ('$name', '$Email', '$message')";

	if (mysqli_query($conn, $sql)) {
    	echo "Thank You for the Feedback. You should receive a reply shortly.";
	} else {
    	echo "Error: " . $sql . "<br>" . $conn->error;
	}

$conn->close();
?> 