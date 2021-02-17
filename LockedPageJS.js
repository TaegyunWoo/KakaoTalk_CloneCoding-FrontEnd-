window.onload = function() {
    //json파일 가져오는 함수
    function getUserInfoJson() {
        var req = new XMLHttpRequest();
        var userInfo;

        req.onreadystatechange = function() {
            if(req.readyState == 4) {
                if(req.status == 200) {
                    userInfo = req.response;
                    console.log(`JSON: ${userInfo}`)
                    return userInfo;
                }
            }
        };
        
        req.open("GET", "userInfo.json", false);
        req.send(null);
    }

    //잠금모드 로그인 이벤트 처리 (only 비밀번호)
    var pwField = document.getElementById("pwField");
    var confirmBtn = document.getElementById("confirm");

    confirmBtn.addEventListener("click", lockedLoginEvent);
    
    //잠금모드 로그인 이벤트리스너
    function lockedLoginEvent(e) {
        var pwValue = pwField.value;
        var userInfo = getUserInfoJson();

        
    }

};