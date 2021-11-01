function ai(id,turn){
    console.log(id,turn);
    console.log(single_game_record[id]);
    //NOTE ai for o
    var single_game_cache = new Array();
    var cache_index = 0;
    console.log(online_game_record_o);
    for(var i=0; i<online_game_record_o.length; i++){
        for(var j=0; j<online_game_record_o[i].length;j++){
            if(online_game_record_o[i][j] == single_game_record[id] && id == j+1){
                single_game_cache[cache_index] = online_game_record_o[i];
                cache_index++;
            }
        }
    }
    online_game_record_o = single_game_cache;
    console.log(single_game_cache);

    try{
        var single_game_ai = new Array();
        single_game_ai = online_game_record_o[randomNum(0,online_game_record_o.length-1)];
        console.log(single_game_ai);
    
        for(var i=0;i<single_game_ai.length;i++){
            if(single_game_ai[i] == String(turn+1)+"o" ){
                return i+1;
            }
        }
    }catch(e){
        return 0;
    }
    


}

function randomNum(minNum, maxNum) {
    switch (arguments.length) {
        case 1:
            return parseInt(Math.random() * minNum + 1, 10);
            break;
        case 2:
            return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
            break;
        default:
            return 0;
            break;
    }
}