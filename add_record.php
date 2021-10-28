<?php
$dbhost = 'localhost';  // mysql服务器主机地址
$dbuser = 'root';            // mysql用户名
$dbpass = '0';          // mysql用户名密码
$dbname = 'my_db';          // mysql用户名密码
$conn = mysqli_connect($dbhost, $dbuser, $dbpass, $dbname);

// 设置编码，防止中文乱码
mysqli_query($conn , "set names utf8");

$id = uniqid();
$win = $_GET['w'];
$first = $_GET['first'];
$second = $_GET['second'];
$third = $_GET['third'];
$forth = $_GET['forth'];
$fifth = $_GET['fifth'];
$sixth = $_GET['sixth'];
$seventh = $_GET['seventh'];
$eighth = $_GET['eighth'];
$ninth = $_GET['ninth'];
$updated_date = date('Y-m-d H:i:s');
 
$sql = "INSERT INTO records ".
        "(id, win, first, second, third, forth, fifth, sixth, seventh, eighth, ninth, updated_date) ".
        "VALUES ".
        "('$id','$win','$first','$second','$third','$forth','$fifth','$sixth','$seventh',''$eighth,'$ninth','$updated_date')";

mysqli_select_db( $conn, $dbname );
$retval = mysqli_query( $conn, $sql );
if(! $retval )
{
  die('无法插入数据: ' . mysqli_error($conn));
}else{
    echo "数据插入成功\n";
}
mysqli_close($conn);
?>