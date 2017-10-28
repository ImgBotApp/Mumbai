<?php
$servername = "localhost";
$username = "root";
$password = "pass@123";
$db_name = "dbconn";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $db_name);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 
?>