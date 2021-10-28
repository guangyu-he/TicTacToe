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

$sql = "CREATE TABLE records( ".
        "id VARCHAR(20) NOT NULL, ".
        "win BIT NOT NULL, ".
        "first VARCHAR(2) NOT NULL, ".
        "second VARCHAR(2) NOT NULL, ".
        "third VARCHAR(2) NOT NULL, ".
        "forth VARCHAR(2) NOT NULL, ".
        "fifth VARCHAR(2) NOT NULL, ".
        "sixth VARCHAR(2) NOT NULL, ".
        "seventh VARCHAR(2) NOT NULL, ".
        "eighth VARCHAR(2) NOT NULL, ".
        "ninth VARCHAR(2) NOT NULL, ".
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