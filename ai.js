function ai(id,turn){
    if(turn == 9){
        return 0;
    }
    //STUB console.log(id,turn);
    //STUB console.log(single_game_record[id]);
    //NOTE ai for o
    var single_game_cache = new Array();
    var cache_index = 0;
    //STUB console.log(online_game_record_o);
    for(var i=0; i<online_game_record_o.length; i++){
        for(var j=0; j<online_game_record_o[i].length;j++){
            if(online_game_record_o[i][j] == single_game_record[id] && id == j+1){
                single_game_cache[cache_index] = online_game_record_o[i];
                cache_index++;
            }
        }
    }
    online_game_record_o = single_game_cache;
    //STUB console.log(single_game_cache);

    try{
        var single_game_ai = new Array();
        single_game_ai = online_game_record_o[randomNum(0,online_game_record_o.length-1)];
        //STUB console.log(single_game_ai);
    
        for(var i=0;i<single_game_ai.length;i++){
            if(single_game_ai[i] == String(turn+1)+"o" ){
                return i+1;
            }
        }
    }catch(e){

        if(single_game_plate[5]==null){
            return 5;
        }

        var returning_id;
        var pos_array = [[1,2,3],[1,4,7],[1,5,9],[2,5,8],[3,5,7],[3,6,9],[4,5,6],[7,8,9]];
        //ANCHOR o advantage to check if there is any possibility to win
        for(i=0;i<pos_array.length;i++){
            returning_id = return_a_id_o(pos_array[i][0],pos_array[i][1],pos_array[i][2]);
            if(returning_id!=0){
                return returning_id;
            }
        }
        //ANCHOR if not try defense/general ai strategy 
        for(i=0;i<pos_array.length;i++){
            returning_id = return_a_id(pos_array[i][0],pos_array[i][1],pos_array[i][2]);
            if(returning_id!=0){
                return returning_id;
            }
        }

        var empty_plate = new Array();
        var empty_plate_index = 0;
        for(i=1;i<single_game_plate.length;i++){
            if(single_game_plate[i] == null){
                empty_plate[empty_plate_index] = i;
                empty_plate_index++;
            }else{};
        }

        return empty_plate[randomNum(0,empty_plate.length-1)];
        
        
        return 0;
    }
}

function return_a_id_o(id_1,id_2,id_3){
    if(single_game_plate[id_1] == single_game_plate[id_2] && single_game_plate[id_3]==null && single_game_plate[id_1] == "o")
    {
        return id_3;
    }else if(single_game_plate[id_1] == single_game_plate[id_3] && single_game_plate[id_2]==null && single_game_plate[id_1] == "o"){
        return id_2;
    }else if(single_game_plate[id_2] == single_game_plate[id_3] && single_game_plate[id_1]==null && single_game_plate[id_2] == "o"){
        return id_1;
    }else{
        return 0;
    };
}

function return_a_id(id_1,id_2,id_3){
    if(single_game_plate[id_1] == single_game_plate[id_2] && single_game_plate[id_3]==null && single_game_plate[id_1]!= null)
    {
        return id_3;
    }else if(single_game_plate[id_1] == single_game_plate[id_3] && single_game_plate[id_2]==null && single_game_plate[id_1]!= null){
        return id_2;
    }else if(single_game_plate[id_2] == single_game_plate[id_3] && single_game_plate[id_1]==null && single_game_plate[id_2]!= null){
        return id_1;
    }else{
        return 0;
    };
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