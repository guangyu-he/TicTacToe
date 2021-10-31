//ANCHOR record related functions

//REVIEW global variables: all positions records
var all_records = return_records();
//REVIEW global variables: single game positions
//STUB onetime_record = [win, first, second, ..., ninth];

function return_records(){ //SECTION return records from sql
    var data_from_php = $.ajax(
    {
        url: 'return_records.php',
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
        for(var i=0; i<data_in_list.length - 1; i++){
            data_in_array[i] = data_in_list[i].split(',');
        };
        return data_in_array;
    };
} //!SECTION

function add_record(onetime_record){ //SECTION add one record to sql
    var url_upload = "add_record.php?w="+onetime_record[0]+"&first="+onetime_record[1]+"&second="+onetime_record[2]+"&third="+onetime_record[3]+"&forth="+onetime_record[4]+"&fifth="+onetime_record[5]+"&sixth="+onetime_record[6]+"&seventh="+onetime_record[7]+"&eighth="+onetime_record[8]+"&ninth="+onetime_record[9];
    $.ajax({
      url: url_upload,
      success: function (data) {
        //STUB console.log(data);
      },
      error: function (err) {
        console.log(err);
      }     
    });
}//!SECTION