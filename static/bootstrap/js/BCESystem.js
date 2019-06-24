jQuery(document).ajaxSend(function(event, xhr, settings) {
                            function getCookie(name) {
                                var cookieValue = null;
                                    if (document.cookie && document.cookie != '') {
                                        var cookies = document.cookie.split(';');
                                            for (var i = 0; i < cookies.length; i++) {
                                                var cookie = jQuery.trim(cookies[i]);
                                                // Does this cookie string begin with the name we want?
                                                    if (cookie.substring(0, name.length + 1) == (name + '=')) {
                                                            cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                                                                break;
                                                    }
                                            }
                                    }
                                    return cookieValue;
                            }
                            function sameOrigin(url) {
                                // url could be relative or scheme relative or absolute
                                var host = document.location.host; // host + port
                                var protocol = document.location.protocol;
                                var sr_origin = '//' + host;
                                var origin = protocol + sr_origin;
                                // Allow absolute or scheme relative URLs to same origin
                                return (url == origin || url.slice(0, origin.length + 1) == origin + '/') ||
                                (url == sr_origin || url.slice(0, sr_origin.length + 1) == sr_origin + '/') ||
                                // or any other URL that isn't scheme relative or absolute i.e    relative.
                                !(/^(\/\/|http:|https:).*/.test(url));
                            }
                            function safeMethod(method) {
                                return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
                            }
                          
                            if (!safeMethod(settings.type) && sameOrigin(settings.url)) {
                                xhr.setRequestHeader("X-CSRFToken", getCookie('csrftoken'));
                            }
                          });
function Time(){
    var currentTime = getElementById("currentTime");
    var Year = now.getFullYear();
    var Month = now.getMonth()+1;
    var Date = now.getDate();
    var Hour = now.getHours();
    var Min = now.getMinutes();
    var Sec = now.getSeconds();
    
    currentTime = Year + "/" + Month + "/" + Date + "/" + Hour + ":" + Min + ":" + Sec;
    return currentTime;
}


function InfoInput() {
    'use strict';
    var name = document.getElementById("name");
    var output = document.getElementById("id_name");
    var ninput = name.value;
    
    var age = document.getElementById("age");
    var ageoutput = document.getElementById("id_age");
    var ainput = age.value;
    
    var sex = document.getElementById("sex");
    var sexoutput = document.getElementById("id_sex");
    var sexinput = sex.value;
    
    var status = document.getElementById("status");
    var statusoutput = document.getElementById("id_status");
    var stainput = status.value;
    
    if(name != null){
        output.value = ninput;
        ageoutput.value = ainput;
        sexoutput.value = sexinput;
        statusoutput.value = stainput;
    } else {
        alert("Fill in the blank.(Name)");
    }
}

//練習問題用判定関数．アラートあり．
function judge00() {
    'use strict';
    var media = document.getElementById("sound01");
//    var output = document.getElementById("id_track01");
    var playtime = media.currentTime;
    var ans;
    if (7.26 <= playtime && playtime <= 7.73 || 22.26 <= playtime && playtime <= 22.73){
        //ans=1;
        //output.value = ans;
        //correct++;
        alert("Correct!!");
        media.pause();
        playtime = 0;
    } else{
        //ans=0;
        //output.value = ans;
        alert("Incorrect...");
        media.pause();
        playtime = 0;
    }
    
}

function PlayTrack01(){
    'use strict';
    var play = document.getElementById("play01");
    var track = document.getElementById("sound01");
    track.play();
}

function judge02() {
    'use strict';
    var media = document.getElementById("sound02");
//    var output = document.getElementById("id_track2");
    var playtime = media.currentTime;
    var ans;
    if (23.72 <= playtime && playtime <= 24.27 || 41.18 <= playtime && playtime <= 41.72){
        
        alert("Correct!!");
        media.pause();
        playtime = 0;
    } else{
        
        alert("Incorrect...");
        media.pause();
        playtime = 0;
    }
}

function PlayTrack02(){
    'use strict';
    var play = document.getElementById("play02");
    var track = document.getElementById("sound02");
    track.play();
}

function judge03() {
    'use strict';
    var media = document.getElementById("sound03");
//    var output = document.getElementById("id_track03");
    var playtime = media.currentTime;
    var ans;
    if (11.01 <= playtime && playtime <= 11.48 || 26.01 <= playtime && playtime <= 26.48){
        alert("Correct!!");
        media.pause();
        playtime = 0;
    } else{
        alert("Incorrect...");
        media.pause();
        playtime = 0;
    }
}

function PlayTrack03(){
    'use strict';
    var play = document.getElementById("play03");
    var track = document.getElementById("sound03");
    track.play();
}
//ここまで練習用判定関数

//リリース問題用判定関数．
var correct2 = 0;

function judgeR1() {
    'use strict';
    var media = document.getElementById("soundR1");
    var output = document.getElementById("id_track01");
    var playtime = media.currentTime;
    var ans;
    if (7.26 <= playtime && playtime <= 7.73 || 22.26 <= playtime && playtime <= 22.73){
        ans=1;
        output.value = ans;
        correct2++;
        //alert("Correct!!");
        media.pause();
        playtime = 0;
    } else{
        ans=0;
        output.value = ans;
        //alert("Incorrect...");
        media.pause();
        playtime = 0;
    }
    
}

function PlayTrackR1(){
    'use strict';
    var play = document.getElementById("playR1");
    var track = document.getElementById("soundR1");
    track.play();
}

function judgeR2() {
    'use strict';
    var media = document.getElementById("soundR2");
    var output = document.getElementById("id_track2");
    var playtime = media.currentTime;
    var ans;
    if (5.39 <= playtime && playtime <= 5.86 || 20.39 <= playtime && playtime <= 20.86){
        ans=1;
        output.value = ans;
        correct2++;
        //alert("Correct!!");
        media.pause();
        playtime = 0;
    } else{
        ans=0;
        output.value = ans;
        //alert("Incorrect...");
        media.pause();
        playtime = 0;
    }
}

function PlayTrackR2(){
    'use strict';
    var play = document.getElementById("playR2");
    var track = document.getElementById("soundR2");
    track.play();
}

function judgeR3() {
    'use strict';
    var media = document.getElementById("soundR3");
    var output = document.getElementById("id_track03");
    var playtime = media.currentTime;
    var ans;
    if (8.45 <= playtime && playtime <= 9.00 || 25.90 <= playtime && playtime <= 26.45){
        ans=1;
        output.value = ans;
        correct2++;
        //alert("Correct!!");
        media.pause();
        playtime = 0;
    } else{
        ans=0;
        output.value = ans;
        //alert("Incorrect...");
        media.pause();
        playtime = 0;
    }
}

function PlayTrackR3(){
    'use strict';
    var play = document.getElementById("playR3");
    var track = document.getElementById("soundR3");
    track.play();
}

function judgeR4() {
    'use strict';
    var media = document.getElementById("soundR4");
    var output = document.getElementById("id_track4");
    var playtime = media.currentTime;
    var ans;
    if (9.26 <= playtime && playtime <= 9.86 || 28.38 <= playtime && playtime <= 28.98){
        ans=1;
        output.value = ans;
        correct2++;
        //alert("Correct!!");
        media.pause();
        playtime = 0;
    } else{
        ans=0;
        output.value = ans;
        //alert("Incorrect...");
        media.pause();
        playtime = 0;
    }
}

function PlayTrackR4(){
    'use strict';
    var play = document.getElementById("playR4");
    var track = document.getElementById("soundR4");
    track.play();
}

function judgeR5() {
    'use strict';
    var media = document.getElementById("soundR5");
    var output = document.getElementById("id_track05");
    var correctoutput = document.getElementById("id_correct");
    var playtime = media.currentTime;
    var ans;
    if (7.66 <= playtime && playtime <= 8.33 || 29.00 <= playtime && playtime <= 29.66){
        ans=1;
        output.value = ans;
        correct2++;
        //alert("Correct!!");
        media.pause();
        playtime = 0;
    } else{
        ans=0;
        output.value = ans;
        //alert("Incorrect...");
        media.pause();
        playtime = 0;
    }
    correctoutput.value = correct2;
}

function PlayTrackR5(){
    'use strict';
    var play = document.getElementById("playR5");
    var track = document.getElementById("soundR5");
    track.play();
}

//本番問題用判定関数．アラートなし．
var correct = 0;

function judge() {
    'use strict';
    var media = document.getElementById("sound1");
    var output = document.getElementById("id_track1");
    var playtime = media.currentTime;
    var ans;
    if (21.54 <= playtime && playtime <= 22.09 || 39.00 <= playtime && playtime <= 39.54){
        ans=1;
        output.value = ans;
        correct++;
        alert("Correct!!");
        media.pause();
        playtime = 0;
    } else{
        ans=0;
        output.value = ans;
        alert("Incorrect...");
        media.pause();
        playtime = 0;
    }
    
}

function PlayTrack1(){
    'use strict';
    var play = document.getElementById("play1");
    var track = document.getElementById("sound1");
    track.play();
}

function judge2() {
    'use strict';
    var media = document.getElementById("sound2");
    var output = document.getElementById("id_track2");
    var playtime = media.currentTime;
    var ans;
    if (7.66 <= playtime && playtime <= 8.33 || 29.00 <= playtime && playtime <= 29.66){
        ans=1;
        output.value = ans;
        correct++;
        alert("Correct!!");
        media.pause();
        playtime = 0;
    } else{
        ans=0;
        output.value = ans;
        alert("Incorrect...");
        media.pause();
        playtime = 0;
    }
}

function PlayTrack2(){
    'use strict';
    var play = document.getElementById("play2");
    var track = document.getElementById("sound2");
    track.play();
}

function judge3() {
    'use strict';
    var media = document.getElementById("sound3");
    var output = document.getElementById("id_track3");
    var playtime = media.currentTime;
    var ans;
    if (9.14 <= playtime && playtime <= 9.61 || 24.14 <= playtime && playtime <= 24.61){
        ans=1;
        output.value = ans;
        correct++;
        alert("Correct!!");
        media.pause();
        playtime = 0;
    } else{
        ans=0;
        output.value = ans;
        alert("Incorrect...");
        media.pause();
        playtime = 0;
    }
}

function PlayTrack3(){
    'use strict';
    var play = document.getElementById("play3");
    var track = document.getElementById("sound3");
    track.play();
}

function judge4() {
    'use strict';
    var media = document.getElementById("sound4");
    var output = document.getElementById("id_track4");
    var playtime = media.currentTime;
    var ans;
    if (12.89 <= playtime && playtime <= 13.36 || 27.89 <= playtime && playtime <= 28.36){
        ans=1;
        output.value = ans;
        correct++;
        alert("Correct!!");
        media.pause();
        playtime = 0;
    } else{
        ans=0;
        output.value = ans;
        alert("Incorrect...");
        media.pause();
        playtime = 0;
    }
}

function PlayTrack4(){
    'use strict';
    var play = document.getElementById("play4");
    var track = document.getElementById("sound4");
    track.play();
}

function judge5() {
    'use strict';
    var media = document.getElementById("sound5");
    var output = document.getElementById("id_track5");
    var playtime = media.currentTime;
    var ans;
    if (7.26 <= playtime && playtime <= 7.73 || 22.26 <= playtime && playtime <= 22.73){
        ans=1;
        output.value = ans;
        correct++;
        alert("Correct!!");
        media.pause();
        playtime = 0;
    } else{
        ans=0;
        output.value = ans;
        alert("Incorrect...");
        media.pause();
        playtime = 0;
    }
}

function PlayTrack5(){
    'use strict';
    var play = document.getElementById("play5");
    var track = document.getElementById("sound5");
    track.play();
}

function judge6() {
    'use strict';
    var media = document.getElementById("sound6");
    var output = document.getElementById("id_track6");
    var playtime = media.currentTime;
    var ans;
    if (9.58 <= playtime && playtime <= 10.41 || 36.24 <= playtime && playtime <= 37.08){
        ans=1;
        output.value = ans;
        correct++;
        alert("Correct!!");
        media.pause();
        playtime = 0;
    } else{
        ans=0;
        output.value = ans;
        alert("Incorrect...");
        media.pause();
        playtime = 0;
    }
}

function PlayTrack6(){
    'use strict';
    var play = document.getElementById("play6");
    var track = document.getElementById("sound6");
    track.play();
}

function judge7() {
    'use strict';
    var media = document.getElementById("sound7");
    var output = document.getElementById("id_track7");
    var playtime = media.currentTime;
    var ans;
    if (13.66 <= playtime && playtime <= 14.33 || 35.00 <= playtime && playtime <= 35.67){
        ans=1;
        output.value = ans;
        correct++;
        alert("Correct!!");
        media.pause();
        playtime = 0;
    } else{
        ans=0;
        output.value = ans;
        alert("Incorrect...");
        media.pause();
        playtime = 0;
    }
}

function PlayTrack7(){
    'use strict';
    var play = document.getElementById("play7");
    var track = document.getElementById("sound7");
    track.play();
}

function judge8() {
    'use strict';
    var media = document.getElementById("sound8");
    var output = document.getElementById("id_track8");
    var playtime = media.currentTime;
    var ans;
    if (5.53 <= playtime && playtime <= 5.86 || 20.39 <= playtime && playtime <= 20.86){
        ans=1;
        output.value = ans;
        correct++;
        alert("Correct!!");
        media.pause();
        playtime = 0;
    } else{
        ans=0;
        output.value = ans;
        alert("Incorrect...");
        media.pause();
        playtime = 0;
    }
}

function PlayTrack8(){
    'use strict';
    var play = document.getElementById("play8");
    var track = document.getElementById("sound8");
    track.play();
}

function judge9() {
    'use strict';
    var media = document.getElementById("sound9");
    var output = document.getElementById("id_track9");
    var playtime = media.currentTime;
    var ans;
    if (7.26 <= playtime && playtime <= 7.73 || 22.26 <= playtime && playtime <= 22.73){
        ans=1;
        output.value = ans;
        correct++;
        alert("Correct!!");
        media.pause();
        playtime = 0;
    } else{
        ans=0;
        output.value = ans;
        alert("Incorrect...");
        media.pause();
        playtime = 0;
    }
}

function PlayTrack9(){
    'use strict';
    var play = document.getElementById("play9");
    var track = document.getElementById("sound9");
    track.play();
}

function judge10() {
    'use strict';
    var media = document.getElementById("sound10");
    var output = document.getElementById("id_track10");
    var playtime = media.currentTime;
    var ans;
    if (11.01 <= playtime && playtime <= 11.48 || 26.01 <= playtime && playtime <= 26.48){
        ans=1;
        output.value = ans;
        correct++;
        alert("Correct!!");
        media.pause();
        playtime = 0;
    } else{
        ans=0;
        output.value = ans;
        alert("Incorrect...");
        media.pause();
        playtime = 0;
    }
}

function PlayTrack10(){
    'use strict';
    var play = document.getElementById("play10");
    var track = document.getElementById("sound10");
    track.play();
}

function judge11() {
    'use strict';
    var media = document.getElementById("sound11");
    var output = document.getElementById("id_track11");
    var playtime = media.currentTime;
    var ans;
    if (5.00 <= playtime && playtime <= 5.66 || 26.33 <= playtime && playtime <= 27.0){
        ans=1;
        output.value = ans;
        correct++;
        alert("Correct!!");
        media.pause();
        playtime = 0;
    } else{
        ans=0;
        output.value = ans;
        alert("Incorrect...");
        media.pause();
        playtime = 0;
    }
}

function PlayTrack11(){
    'use strict';
    var play = document.getElementById("play11");
    var track = document.getElementById("sound11");
    track.play();
}

function judge12() {
    'use strict';
    var media = document.getElementById("sound12");
    var output = document.getElementById("id_track12");
    var playtime = media.currentTime;
    var ans;
    if (12.89 <= playtime && playtime <= 13.35 || 27.89 <= playtime && playtime <= 28.35){
        ans=1;
        output.value = ans;
        correct++;
        alert("Correct!!");
        media.pause();
        playtime = 0;
    } else{
        ans=0;
        output.value = ans;
        alert("Incorrect...");
        media.pause();
        playtime = 0;
    }
}

function PlayTrack12(){
    'use strict';
    var play = document.getElementById("play12");
    var track = document.getElementById("sound12");
    track.play();
}

function judge13() {
    'use strict';
    var media = document.getElementById("sound13");
    var output = document.getElementById("id_track13");
    var playtime = media.currentTime;
    var ans;
    if (10.33 <= playtime && playtime <= 11.00 || 31.66 <= playtime && playtime <= 32.33){
        ans=1;
        output.value = ans;
        correct++;
        alert("Correct!!");
        media.pause();
        playtime = 0;
    } else{
        ans=0;
        output.value = ans;
        alert("Incorrect...");
        media.pause();
        playtime = 0;
    }
}

function PlayTrack13(){
    'use strict';
    var play = document.getElementById("play13");
    var track = document.getElementById("sound13");
    track.play();
}

function judge14() {
    'use strict';
    var media = document.getElementById("sound14");
    var output = document.getElementById("id_track14");
    var playtime = media.currentTime;
    var ans;
    if (12.89 <= playtime && playtime <= 13.36 || 27.89 <= playtime && playtime <= 28.36){
        ans=1;
        output.value = ans;
        correct++;
        alert("Correct!!");
        media.pause();
        playtime = 0;
    } else{
        ans=0;
        output.value = ans;
        alert("Incorrect...");
        media.pause();
        playtime = 0;
    }
}

function PlayTrack14(){
    'use strict';
    var play = document.getElementById("play14");
    var track = document.getElementById("sound14");
    track.play();
}

function judge15() {
    'use strict';
    var media = document.getElementById("sound15");
    var output = document.getElementById("id_track15");
    var playtime = media.currentTime;
    var ans;
    if (11.01 <= playtime && playtime <= 11.48 || 26.01 <= playtime && playtime <= 26.48){
        ans=1;
        output.value = ans;
        correct++;
        alert("Correct!!");
        media.pause();
        playtime = 0;
    } else{
        ans=0;
        output.value = ans;
        alert("Incorrect...");
        media.pause();
        playtime = 0;
    }
}

function PlayTrack15(){
    'use strict';
    var play = document.getElementById("play15");
    var track = document.getElementById("sound15");
    track.play();
}

function judge16() {
    'use strict';
    var media = document.getElementById("sound16");
    var output = document.getElementById("id_track16");
    var playtime = media.currentTime;
    var ans;
    if (10.33 <= playtime && playtime <= 11.00 || 31.66 <= playtime && playtime <= 32.33){
        ans=1;
        output.value = ans;
        correct++;
        alert("Correct!!");
        media.pause();
        playtime = 0;
    } else{
        ans=0;
        output.value = ans;
        alert("Incorrect...");
        media.pause();
        playtime = 0;
    }
}

function PlayTrack16(){
    'use strict';
    var play = document.getElementById("play16");
    var track = document.getElementById("sound16");
    track.play();
}

function judge17() {
    'use strict';
    var media = document.getElementById("sound17");
    var output = document.getElementById("id_track17");
    var playtime = media.currentTime;
    var ans;
    if (10.33 <= playtime && playtime <= 11.00 || 31.66 <= playtime && playtime <= 32.33){
        ans=1;
        output.value = ans;
        correct++;
        alert("Correct!!");
        media.pause();
        playtime = 0;
    } else{
        ans=0;
        output.value = ans;
        alert("Incorrect...");
        media.pause();
        playtime = 0;
    }
}

function PlayTrack17(){
    'use strict';
    var play = document.getElementById("play17");
    var track = document.getElementById("sound17");
    track.play();
}

function judge18() {
    'use strict';
    var media = document.getElementById("sound18");
    var output = document.getElementById("id_track18");
    var playtime = media.currentTime;
    var ans;
    if (9.49 <= playtime && playtime <= 10.10 || 29.08 <= playtime && playtime <= 29.69){
        ans=1;
        output.value = ans;
        correct++;
        alert("Correct!!");
        media.pause();
        playtime = 0;
    } else{
        ans=0;
        output.value = ans;
        alert("Incorrect...");
        media.pause();
        playtime = 0;
    }
}

function PlayTrack18(){
    'use strict';
    var play = document.getElementById("play18");
    var track = document.getElementById("sound18");
    track.play();
}

function judge19() {
    'use strict';
    var media = document.getElementById("sound19");
    var output = document.getElementById("id_track19");
    var playtime = media.currentTime;
    var ans;
    if (5.39 <= playtime && playtime <= 5.86 || 20.39 <= playtime && playtime <= 20.86){
        ans=1;
        output.value = ans;
        correct++;
        alert("Correct!!");
        media.pause();
        playtime = 0;
    } else{
        ans=0;
        output.value = ans;
        alert("Incorrect...");
        media.pause();
        playtime = 0;
    }
}

function PlayTrack19(){
    'use strict';
    var play = document.getElementById("play19");
    var track = document.getElementById("sound19");
    track.play();
}

function judge20() {
    'use strict';
    var media = document.getElementById("sound20");
    var output = document.getElementById("id_track20");
    var playtime = media.currentTime;
    var ans;
    if (18.71 <= playtime && playtime <= 19.30 || 37.72 <= playtime && playtime <= 38.31){
        ans=1;
        output.value = ans;
        correct++;
        alert("Correct!!");
        media.pause();
        playtime = 0;
    } else{
        ans=0;
        output.value = ans;
        alert("Incorrect...");
        media.pause();
        playtime = 0;
    }
}

function PlayTrack20(){
    'use strict';
    var play = document.getElementById("play20");
    var track = document.getElementById("sound20");
    track.play();
}

function judge21() {
    'use strict';
    var media = document.getElementById("sound21");
    var output = document.getElementById("id_track21");
    var playtime = media.currentTime;
    var ans;
    if (11.01 <= playtime && playtime <= 11.48 || 26.01 <= playtime && playtime <= 26.48){
        ans=1;
        output.value = ans;
        correct++;
        alert("Correct!!");
        media.pause();
        playtime = 0;
    } else{
        ans=0;
        output.value = ans;
        alert("Incorrect...");
        media.pause();
        playtime = 0;
    }
}

function PlayTrack21(){
    'use strict';
    var play = document.getElementById("play21");
    var track = document.getElementById("sound21");
    track.play();
}

function judge22() {
    'use strict';
    var media = document.getElementById("sound22");
    var output = document.getElementById("id_track22");
    var playtime = media.currentTime;
    var ans;
    if (9.14 <= playtime && playtime <= 9.60 || 24.14 <= playtime && playtime <= 24.60){
        ans=1;
        output.value = ans;
        correct++;
        alert("Correct!!");
        media.pause();
        playtime = 0;
    } else{
        ans=0;
        output.value = ans;
        alert("Incorrect...");
        media.pause();
        playtime = 0;
    }
}

function PlayTrack22(){
    'use strict';
    var play = document.getElementById("play22");
    var track = document.getElementById("sound22");
    track.play();
}

function judge23() {
    'use strict';
    var media = document.getElementById("sound23");
    var output = document.getElementById("id_track23");
    var playtime = media.currentTime;
    var ans;
    if (12.59 <= playtime && playtime <= 13.12 || 29.73 <= playtime && playtime <= 30.26){
        ans=1;
        output.value = ans;
        correct++;
        alert("Correct!!");
        media.pause();
        playtime = 0;
    } else{
        ans=0;
        output.value = ans;
        alert("Incorrect...");
        media.pause();
        playtime = 0;
    }
}

function PlayTrack23(){
    'use strict';
    var play = document.getElementById("play23");
    var track = document.getElementById("sound23");
    track.play();
}

function judge24() {
    'use strict';
    var media = document.getElementById("sound24");
    var output = document.getElementById("id_track24");
    var playtime = media.currentTime;
    var ans;
    if (9.14 <= playtime && playtime <= 9.60 || 24.14 <= playtime && playtime <= 24.60){
        ans=1;
        output.value = ans;
        correct++;
        alert("Correct!!");
        media.pause();
        playtime = 0;
    } else{
        ans=0;
        output.value = ans;
        alert("Incorrect...");
        media.pause();
        playtime = 0;
    }
}

function PlayTrack24(){
    'use strict';
    var play = document.getElementById("play24");
    var track = document.getElementById("sound24");
    track.play();
}

function judge25() {
    'use strict';
    var media = document.getElementById("sound25");
    var output = document.getElementById("id_track25");
    var playtime = media.currentTime;
    var ans;
    if (6.79 <= playtime && playtime <= 7.26 || 21.80 <= playtime && playtime <= 22.26){
        ans=1;
        output.value = ans;
        correct++;
        alert("Correct!!");
        media.pause();
        playtime = 0;
    } else{
        ans=0;
        output.value = ans;
        alert("Incorrect...");
        media.pause();
        playtime = 0;
    }
}

function PlayTrack25(){
    'use strict';
    var play = document.getElementById("play25");
    var track = document.getElementById("sound25");
    track.play();
}

function judge26() {
    'use strict';
    var media = document.getElementById("sound26");
    var output = document.getElementById("id_track26");
    var playtime = media.currentTime;
    var ans;
    if (7.66 <= playtime && playtime <= 8.33 || 29.00 <= playtime && playtime <= 29.66){
        ans=1;
        output.value = ans;
        correct++;
        alert("Correct!!");
        media.pause();
        playtime = 0;
    } else{
        ans=0;
        output.value = ans;
        alert("Incorrect...");
        media.pause();
        playtime = 0;
    }
}

function PlayTrack26(){
    'use strict';
    var play = document.getElementById("play26");
    var track = document.getElementById("sound26");
    track.play();
}

function judge27() {
    'use strict';
    var media = document.getElementById("sound27");
    var output = document.getElementById("id_track27");
    var playtime = media.currentTime;
    var ans;
    if (11.01 <= playtime && playtime <= 11.48 || 26.01 <= playtime && playtime <= 26.48){
        ans=1;
        output.value = ans;
        correct++;
        alert("Correct!!");
        media.pause();
        playtime = 0;
    } else{
        ans=0;
        output.value = ans;
        alert("Incorrect...");
        media.pause();
        playtime = 0;
    }
}

function PlayTrack27(){
    'use strict';
    var play = document.getElementById("play27");
    var track = document.getElementById("sound27");
    track.play();
}

function judge28() {
    'use strict';
    var media = document.getElementById("sound28");
    var output = document.getElementById("id_track28");
    var playtime = media.currentTime;
    var ans;
    if (15.79 <= playtime && playtime <= 16.42 || 36.00 <= playtime && playtime <= 36.63){
        ans=1;
        output.value = ans;
        correct++;
        alert("Correct!!");
        media.pause();
        playtime = 0;
    } else{
        ans=0;
        output.value = ans;
        alert("Incorrect...");
        media.pause();
        playtime = 0;
    }
}

function PlayTrack28(){
    'use strict';
    var play = document.getElementById("play28");
    var track = document.getElementById("sound28");
    track.play();
}

function judge29() {
    'use strict';
    var media = document.getElementById("sound29");
    var output = document.getElementById("id_track29");
    var playtime = media.currentTime;
    var ans;
    if (15.00 <= playtime && playtime <= 15.54 || 32.45 <= playtime && playtime <= 33.00){
        ans=1;
        output.value = ans;
        correct++;
        alert("Correct!!");
        media.pause();
        playtime = 0;
    } else{
        ans=0;
        output.value = ans;
        alert("Incorrect...");
        media.pause();
        playtime = 0;
    }
}

function PlayTrack29(){
    'use strict';
    var play = document.getElementById("play29");
    var track = document.getElementById("sound29");
    track.play();
}

function judge30() {
    'use strict';
    var media = document.getElementById("sound30");
    var output = document.getElementById("id_track30");
    var playtime = media.currentTime;
    var ans;
    if (15.66 <= playtime && playtime <= 16.33 || 37.00 <= playtime && playtime <= 37.66){
        ans=1;
        output.value = ans;
        correct++;
        alert("Correct!!");
        media.pause();
        playtime = 0;
    } else{
        ans=0;
        output.value = ans;
        alert("Incorrect...");
        media.pause();
        playtime = 0;
    }
}

function PlayTrack30(){
    'use strict';
    var play = document.getElementById("play30");
    var track = document.getElementById("sound30");
    track.play();
}

function judge31() {
    'use strict';
    var media = document.getElementById("sound31");
    var output = document.getElementById("id_track31");
    var playtime = media.currentTime;
    var ans;
    if (8.45 <= playtime && playtime <= 9.00 || 25.90 <= playtime && playtime <= 26.45){
        ans=1;
        output.value = ans;
        correct++;
        alert("Correct!!");
        media.pause();
        playtime = 0;
    } else{
        ans=0;
        output.value = ans;
        alert("Incorrect...");
        media.pause();
        playtime = 0;
    }
}

function PlayTrack31(){
    'use strict';
    var play = document.getElementById("play31");
    var track = document.getElementById("sound31");
    track.play();
}

function judge32() {
    'use strict';
    var media = document.getElementById("sound32");
    var output = document.getElementById("id_track32");
    var playtime = media.currentTime;
    var ans;
    if (17.37 <= playtime && playtime <= 18.00 || 37.58 <= playtime && playtime <= 38.21){
        ans=1;
        output.value = ans;
        correct++;
        alert("Correct!!");
        media.pause();
        playtime = 0;
    } else{
        ans=0;
        output.value = ans;
        alert("Incorrect...");
        media.pause();
        playtime = 0;
    }
}

function PlayTrack32(){
    'use strict';
    var play = document.getElementById("play32");
    var track = document.getElementById("sound32");
    track.play();
}

function judge33() {
    'use strict';
    var media = document.getElementById("sound33");
    var output = document.getElementById("id_track33");
    var playtime = media.currentTime;
    var ans;
    if (11.01 <= playtime && playtime <= 11.48 || 26.01 <= playtime && playtime <= 26.48){
        ans=1;
        output.value = ans;
        correct++;
        alert("Correct!!");
        media.pause();
        playtime = 0;
    } else{
        ans=0;
        output.value = ans;
        alert("Incorrect...");
        media.pause();
        playtime = 0;
    }
}

function PlayTrack33(){
    'use strict';
    var play = document.getElementById("play33");
    var track = document.getElementById("sound33");
    track.play();
}

function judge34() {
    'use strict';
    var media = document.getElementById("sound34");
    var output = document.getElementById("id_track34");
    var playtime = media.currentTime;
    var ans;
    if (7.26 <= playtime && playtime <= 7.73 || 22.26 <= playtime && playtime <= 22.73){
        ans=1;
        output.value = ans;
        correct++;
        alert("Correct!!");
        media.pause();
        playtime = 0;
    } else{
        ans=0;
        output.value = ans;
        alert("Incorrect...");
        media.pause();
        playtime = 0;
    }
}

function PlayTrack34(){
    'use strict';
    var play = document.getElementById("play34");
    var track = document.getElementById("sound34");
    track.play();
}

function judge35() {
    'use strict';
    var media = document.getElementById("sound35");
    var output = document.getElementById("id_track35");
    var playtime = media.currentTime;
    var ans;
    if (5.39 <= playtime && playtime <= 5.86 || 20.39 <= playtime && playtime <= 20.86){
        ans=1;
        output.value = ans;
        correct++;
        alert("Correct!!");
        media.pause();
        playtime = 0;
    } else{
        ans=0;
        output.value = ans;
        alert("Incorrect...");
        media.pause();
        playtime = 0;
    }
}

function PlayTrack35(){
    'use strict';
    var play = document.getElementById("play35");
    var track = document.getElementById("sound35");
    track.play();
}

function judge36() {
    'use strict';
    var media = document.getElementById("sound36");
    var output = document.getElementById("id_track36");
    var playtime = media.currentTime;
    var ans;
    if (5.39 <= playtime && playtime <= 5.86 || 20.39 <= playtime && playtime <= 20.86){
        ans=1;
        output.value = ans;
        correct++;
        alert("Correct!!");
        media.pause();
        playtime = 0;
    } else{
        ans=0;
        output.value = ans;
        alert("Incorrect...");
        media.pause();
        playtime = 0;
    }
}

function PlayTrack36(){
    'use strict';
    var play = document.getElementById("play36");
    var track = document.getElementById("sound36");
    track.play();
}

function judge37() {
    'use strict';
    var media = document.getElementById("sound37");
    var output = document.getElementById("id_track37");
    var playtime = media.currentTime;
    var ans;
    if (12.59 <= playtime && playtime <= 13.12 || 29.73 <= playtime && playtime <= 30.26){
        ans=1;
        output.value = ans;
        correct++;
        alert("Correct!!");
        media.pause();
        playtime = 0;
    } else{
        ans=0;
        output.value = ans;
        alert("Incorrect...");
        media.pause();
        playtime = 0;
    }
}

function PlayTrack37(){
    'use strict';
    var play = document.getElementById("play37");
    var track = document.getElementById("sound37");
    track.play();
}

function judge38() {
    'use strict';
    var media = document.getElementById("sound38");
    var output = document.getElementById("id_track38");
    var playtime = media.currentTime;
    var ans;
    if (12.26 <= playtime && playtime <= 12.78 || 28.95 <= playtime && playtime <= 29.47){
        ans=1;
        output.value = ans;
        correct++;
        alert("Correct!!");
        media.pause();
        playtime = 0;
    } else{
        ans=0;
        output.value = ans;
        alert("Incorrect...");
        media.pause();
        playtime = 0;
    }
}

function PlayTrack38(){
    'use strict';
    var play = document.getElementById("play38");
    var track = document.getElementById("sound38");
    track.play();
}

function judge39() {
    'use strict';
    var media = document.getElementById("sound39");
    var output = document.getElementById("id_track39");
    var playtime = media.currentTime;
    var ans;
    if (7.26 <= playtime && playtime <= 7.73 || 22.26 <= playtime && playtime <= 22.73){
        ans=1;
        output.value = ans;
        correct++;
        alert("Correct!!");
        media.pause();
        playtime = 0;
    } else{
        ans=0;
        output.value = ans;
        alert("Incorrect...");
        media.pause();
        playtime = 0;
    }
}

function PlayTrack39(){
    'use strict';
    var play = document.getElementById("play39");
    var track = document.getElementById("sound39");
    track.play();
}

function judge40() {
    'use strict';
    var media = document.getElementById("sound40");
    var output = document.getElementById("id_track40");
    var playtime = media.currentTime;
    var correctoutput = document.getElementById("id_correct");
    var ans;
    if (18.33 <= playtime && playtime <= 19.00 || 39.66 <= playtime && playtime <= 40.33){
        ans=1;
        output.value = ans;
        correct++;
        alert("Correct!!");
        media.pause();
        playtime = 0;
    } else{
        ans=0;
        output.value = ans;
        alert("Incorrect...");
        media.pause();
        playtime = 0;
    }
    correctoutput.value = correct;
}

function PlayTrack40(){
    'use strict';
    var play = document.getElementById("play40");
    var track = document.getElementById("sound40");
    track.play();
}

