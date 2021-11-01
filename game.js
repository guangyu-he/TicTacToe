//ANCHOR game related functions

function press(id){ //SECTION events after press the box
    if(single_game_plate[id] != null || endstate){
        return false;
    }else{};

    table_id = "t" + String(id);
    single_game_record[id] = turn + player_turn;
    if(player_turn == "x"){
        document.getElementById(table_id).src = "x.png";
        single_game_plate[id] = "x";
        if(winloss() != null){
            endgame();
            return false;
        }
        var ai_id = ai(id,turn);
        //STUB console.log(ai_id);
        if(ai_id != 0){
            table_id = "t" + String(ai_id);
            document.getElementById(table_id).src = "o.png";
            single_game_plate[ai_id] = "o";
            turn++;
            single_game_record[ai_id] = turn + "o";
            if(winloss() != null){
                endgame();
                return false;
            }
        }
        else{
            player_turn = "o";
        }
    }
    else if(player_turn == "o"){
        document.getElementById(table_id).src = "o.png";
        single_game_plate[id] = "o";
        if(winloss() != null){
            endgame();
            return false;
        }
        player_turn = "x";
    }else{};

    turn++;

} //!SECTION

function winloss(){ //SECTION check if gameover
    if(single_game_plate[1] == single_game_plate[2] && single_game_plate[2] == single_game_plate[3]){
        return single_game_plate[1];
    }else if(single_game_plate[1] == single_game_plate[4] && single_game_plate[4] == single_game_plate[7]){
        return single_game_plate[1];
    }else if(single_game_plate[1] == single_game_plate[5] && single_game_plate[5] == single_game_plate[9]){
        return single_game_plate[1];
    }
    else if(single_game_plate[2] == single_game_plate[5] && single_game_plate[5] == single_game_plate[8]){
        return single_game_plate[2];
    }
    else if(single_game_plate[3] == single_game_plate[5] && single_game_plate[5] == single_game_plate[7]){
        return single_game_plate[3];
    }else if(single_game_plate[3] == single_game_plate[6] && single_game_plate[6] == single_game_plate[9]){
        return single_game_plate[3];
    }
    else if(single_game_plate[4] == single_game_plate[5] && single_game_plate[5] == single_game_plate[6]){
        return single_game_plate[4];
    }
    else if(single_game_plate[7] == single_game_plate[8] && single_game_plate[8] == single_game_plate[9]){
        return single_game_plate[7];
    }
    else{
        for(var i=1; i<single_game_plate.length; i++) {
            if(single_game_plate[i] == null){
                return null;
            }else{};
        }
        return "d";
    };
}// !SECTION

function endgame(){
    single_game_record[0] = winloss();
    if(single_game_record[0] != null){
        endstate = true;
        alert(single_game_record[0]+" win!");
        for(var i=0; i<single_game_record.length; i++){
            if(single_game_record[i] == null){
                single_game_record[i] = 0;
            }else{};
        };
        //STUB console.log(single_game_record);
        add_record(single_game_record);
        location.reload();
    }else{};
}