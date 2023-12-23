<?php
$servername = "";
$username = "";
$password = "";
$dbname = "";

$conn = new mysqli($servername, $username, $password, $dbname);


if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}


if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $username = $_POST['username'];
  $password = $_POST['password'];

  // SQL query to check if the user exists
  $sql = "SELECT * FROM users WHERE username='$username' AND password='$password'";
  $result = $conn->query($sql);

  if ($result->num_rows > 0) {
    // User exists and credentials are correct
    // Perform actions upon successful login, e.g., set session variables or redirect
    // For demonstration, let's redirect to a welcome page
    header("Location: welcome.php");
    exit();
  } else {
    // Invalid credentials
    echo "Invalid username or password";
  }
}

$conn->close();
?>
