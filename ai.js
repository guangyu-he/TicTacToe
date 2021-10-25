function ai(id){
    for(var i=0;i<result_full.length;i++){
        if(result_full[i][0] == "o"){
            if(result_full[i][id] == result[id]){
                for(var j=1;j<result_full[i].length;j++){
                    if(result_full[i][j] == "2o" && result[j] == null){
                        table_id = "t" + String(j);
                        document.getElementById(table_id).src = "o.png";
                        result[j] = result_full[i][j];
                        return true;
                    }
                }
                for(var j=1;j<result_full[i].length;j++){
                    if(result_full[i][j] == "4o" && result[j] == null){
                        table_id = "t" + String(j);
                        document.getElementById(table_id).src = "o.png";
                        result[j] = result_full[i][j];
                        return true;
                    }
                }
                for(var j=1;j<result_full[i].length;j++){
                    if(result_full[i][j] == "6o" && result[j] == null){
                        table_id = "t" + String(j);
                        document.getElementById(table_id).src = "o.png";
                        result[j] = result_full[i][j];
                        return;
                    }
                }
                for(var j=1;j<result_full[i].length;j++){
                    if(result_full[i][j] == "8o" && result[j] == null){
                        table_id = "t" + String(j);
                        document.getElementById(table_id).src = "o.png";
                        result[j] = result_full[i][j];
                        return true;
                    }
                }

            }else{}
        }else{}
    }
    alert("未找到匹配对局,自动切换为对局学习模式");
    ai_state = false;
    document.getElementById("aiswitch").value = "ai off";
    document.getElementById("manual_win").style = "display: block";
    return false;
}

function aiswitch_function(){
    if(!ai_state){
        ai_state = true;
        document.getElementById("aiswitch").value = "ai on";
        document.getElementById("manual_win").style = "display: none";
    }else{
        ai_state = false;
        document.getElementById("aiswitch").value = "ai off";
        document.getElementById("manual_win").style = "display: block";
    }
}