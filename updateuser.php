<?php
$dbhost = 'localhost';  // mysql服务器主机地址
$dbuser = 'test';            // mysql用户名
$dbpass = '950611';          // mysql用户名密码
$dbname = 'my_db';          // mysql用户名密码
$conn = mysqli_connect($dbhost, $dbuser, $dbpass, $dbname);
if(! $conn )
{
  die('连接失败: ' . mysqli_error($conn));
}
//echo '连接成功<br/>';
// 设置编码，防止中文乱码
mysqli_query($conn , "set names utf8");

$name = $_GET['n'];
$records = $_GET['r'];
$time_nr = $_GET['t'];
$updated_date = date('Y-m-d H:i:s');
 
$sql = "UPDATE ttt SET records='$records',time_nr='$time_nr',updated_date='$updated_date' WHERE name='$name'";
 
mysqli_select_db( $conn, $dbname );
$retval = mysqli_query( $conn, $sql );
if(! $retval )
{
  die('无法插入数据: ' . mysqli_error($conn));
}
echo "数据插入成功\n";
mysqli_close($conn);
?>