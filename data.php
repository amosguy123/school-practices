<?php
// run sql query
//connect to database
$host = "";
$dbname = "";
$user;
$password;
$name = $_POST['data'];
$conn = mysqli_connect($host,$dbname,$user,$password);
if(!$conn){
    echo "Error connecting!";
}
$sql = "SELECT * FROM stuedent WHERE name = {$name}";
$query = mysqli_query($conn,$sql);
while($row = mysql_fetch_assoc($query)){
echo $row['id']." ".$row['name'];

}

?>