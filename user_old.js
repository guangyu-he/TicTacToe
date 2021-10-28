var sql_return;

function returnuser(str){
    if(str == ""){
      document.getElementById("txtHint").innerHTML = "";
      return;
    }
    else{ 
      var xmlhttp = new XMLHttpRequest();
      xmlhttp.onload = function(){
        sql_return = this.responseText;
      };
      xmlhttp.open("GET","returnuser.php?q="+str,true);
      xmlhttp.send();
    }
    setTimeout(function(){
        return;
    },50);
}

function updateuser(name,time_nr,str){
  if(str == ""){
    document.getElementById("txtHint").innerHTML = "";
    return;
  }
  else{ 
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onload = function(){
      //sql_return = this.responseText;
    };
    xmlhttp.open("GET","updateuser.php?n="+name+"&r="+str+"&t="+time_nr,true);
    xmlhttp.send();
  }
  setTimeout(function(){
      return;
  },50);
}