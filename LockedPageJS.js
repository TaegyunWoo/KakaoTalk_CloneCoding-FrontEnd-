window.onload = function() {
   //확인 버튼 (로그인) 이벤트
   var confirmBtn = document.getElementById("confirm");
   confirmBtn.addEventListener("click", btnLoginEvent);
   function btnLoginEvent(e) {
        var pw = document.getElementById("pwField").value;
        if(pw == "1533dlek") {
            open("ChatRoomsLobby.html");
        }
   }

//    //PWField에서 enter 입력시
//    var pwField = document.getElementById("pwField");
//    pwField.addEventListener("keydown", keyLoginEvent);
//    function keyLoginEvent(e) {
//         if(e.key == "enter") {
//             btnLoginEvent();
//         }
//    }
    

};