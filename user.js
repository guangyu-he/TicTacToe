//TODO add jquary package in index html

//ANCHOR user related functions

//REVIEW user json
var user = {
  uid: null,
  name: null,
  pass: null,
  pass_q: null,
  pass_a: null,
  updated_date: null
}; 

//SECTION update user data in sql
function update_user(){
    var url_upload = "update_user.php?id="+user.uid+"&n="+user.name+"&p="+user.pass+"&pq="+user.pass_q+"&pa="+user.pass_a;
    $.ajax({
      url: url_upload,
      success: function (data) {
        //STUB console.log(data);
      },
      error: function (err) {
        console.log(err);
      }     
    });
}
//!SECTION

//SECTION return user data from sql
function return_user(){
    var data_from_php = $.ajax(
      {
        url: 'return_user.php?id='+user.uid,
        success: function (data) {},
        dataType: "text",
        async: false,
        error: function (err) {
            console.log(err);
        }
      }
    ).responseText;
    if( data_from_php == null || data_from_php == "" ){
      return false;
    }else{
      var data_in_array =  data_from_php.split(',');
      user.uid = data_in_array[0];
      user.name = data_in_array[1];
      user.pass = data_in_array[2];
      user.pass_q = data_in_array[3];
      user.pass_a = data_in_array[4];
      user.updated_date = data_in_array[5];
      return false;
    }
}
//!SECTION

