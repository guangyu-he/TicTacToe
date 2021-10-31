function ai(){
    var selected_game_record = new Array();
    var j=0;
    for(var i=0;i<online_game_record.length;i++) {
        if(online_game_record[i][1] == "o"){
            selected_game_record[j] = online_game_record[i][0].split("-");
            j++;
        };
    }
    console.log(selected_game_record);
}