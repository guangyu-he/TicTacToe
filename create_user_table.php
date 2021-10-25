<?php
$dbhost = 'localhost';  // mysql服务器主机地址
$dbuser = 'root';            // mysql用户名
$dbpass = '0';          // mysql用户名密码
$dbname = 'my_db';          // mysql用户名密码
$conn = mysqli_connect($dbhost, $dbuser, $dbpass, $dbname);
if(! $conn )
{
    die('连接失败: ' . mysqli_error($conn));
}
else
{
  echo '连接成功<br />';
}

$sql = "CREATE TABLE users( ".
        "id VARCHAR(20) NOT NULL, ".
        "name VARCHAR(20) NOT NULL, ".
        "password VARCHAR(20) NOT NULL, ".
        "pass_q VARCHAR(100) NOT NULL, ".
        "pass_a VARCHAR(100) NOT NULL, ".
        "game_times_nr INT NOT NULL".
        "game_records LONGTEXT NOT NULL".
        "submission_date DATETIME, ".
        "updated_date DATETIME, ".
        "PRIMARY KEY ( id ))ENGINE=InnoDB DEFAULT CHARSET=utf8; ";
        
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