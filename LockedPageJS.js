window.onload = function() {
   //확인 버튼 (로그인) 이벤트
   var confirmBtn = document.getElementById("confirm");
   confirmBtn.addEventListener("click", LoginEvent);
   function LoginEvent(e) {
        var pw = document.getElementById("pwField").value;
        if(pw == "1533dlek") {
            open("ChatRoomsLobby.html");
        }
   }
    

};