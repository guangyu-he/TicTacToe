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
else
{
  echo '连接成功<br/>';
}

// 设置编码，防止中文乱码
mysqli_query($conn , "set names utf8");

$mode = $_GET['m'];
$id = $_GET['id'];
$name = $_GET['n'];
$password = $_GET['p'];
$pass_q = $_GET['pq'];
$pass_a = $_GET['pa'];
$game_times_nr = $_GET['t'];
$game_records = $_GET['r'];
$updated_date = date('Y-m-d H:i:s');

if( $mode == "records" ){
  $sql = "UPDATE users SET game_times_nr='$game_times_nr',game_records='$game_records',updated_date='$updated_date' WHERE id='$id'";
}
elseif( $mode == "user" ){
  $sql = "UPDATE users SET name='$name',password='$password',pass_q='$pass_q',pass_a='$pass_a',updated_date='$updated_date' WHERE id='$id'";
}
else{
  $sql = "UPDATE users SET name='$name',password='$password',pass_q='$pass_q',pass_a='$pass_a',game_times_nr='$game_times_nr',game_records='$game_records',updated_date='$updated_date' WHERE id='$id'";
}

 
mysqli_select_db( $conn, $dbname );
$retval = mysqli_query( $conn, $sql );
if(! $retval )
{
  die('无法插入数据: ' . mysqli_error($conn));
}
else{
  echo "数据插入成功\n";
}
mysqli_close($conn);
?>