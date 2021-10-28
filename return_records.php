<?php
$dbhost = 'localhost';  // mysql服务器主机地址
$dbuser = 'root';            // mysql用户名
$dbpass = '0';          // mysql用户名密码
$dbname = 'my_db';          // mysql用户名密码
$conn = mysqli_connect($dbhost, $dbuser, $dbpass, $dbname);

// 设置编码，防止中文乱码
mysqli_query($conn , "set names utf8");

$id = $_GET['id'];

$sql = "SELECT * FROM records";

mysqli_select_db( $conn, $dbname );
$retval = mysqli_query( $conn, $sql );

if (mysqli_num_rows($retval) > 0) {
  // 输出数据
  while($row = mysqli_fetch_assoc($retval)) {
      echo "" .$row["id"]. ",";
      echo "" .$row["win"]. ",";
      echo "" .$row["first"]. ",";
      echo "" .$row["second"]. ",";
      echo "" .$row["third"]. ",";
      echo "" .$row["forth"]. ",";
      echo "" .$row["fifth"]. ",";
      echo "" .$row["sixth"]. ",";
      echo "" .$row["seventh"]. ",";
      echo "" .$row["eighth"]. ",";
      echo "" .$row["ninth"]. "<br>";
  }
} else {
  echo "";
}

mysqli_close($conn);
?>