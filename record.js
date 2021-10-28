//ANCHOR record related functions

//REVIEW global variables: all positions records
var records = return_records();

//SECTION return records from sql
function return_records(){
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
        var data_in_list =  data_from_php.split('<br>');
        var data_in_array = [];
        for(var i=0; i<data_in_list.length; i++){
            data_in_array[i] = data_in_list[i].split(',');
        }
        return data_in_array;
    }
}
//!SECTION