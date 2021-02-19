window.onload = function() {
    //친구로비 이동 이벤트
    var userElement = document.getElementsByClassName("menu user")[0];
    userElement.addEventListener("click", moveChatLobbyEvent, false);
    function moveChatLobbyEvent(e) {
        location.replace("../FriendsLobby/FriendsLobby.html");
    }

    //설정창 이동 이벤트
    var settingElement = document.getElementsByClassName("menu dots")[0];
    settingElement.addEventListener("click", moveSettingEvent, false);
    function moveSettingEvent(e) {
        location.replace("../Setting/Setting.html");
    }

    addChatBoxWithCY();
}

function addChatBoxWithCY() {
    var name = "나채영";
    var profile = "../images/heart.png";
    var content = "태균아 좀있다가 보자!! 사랑행♥";
    
    //요소 생성
    var chatBox = document.createElement("div");
    var chatProfile = document.createElement("img");
    var chatProfileDiv = document.createElement("div");
    var chatName = document.createElement("p");
    var chatContent = document.createElement("p");
    var chatTime = document.createElement("p");

    //요소 설정
    chatProfile.setAttribute("src", profile);
    chatName.innerHTML = name;
    chatContent.innerHTML = content;
    chatTime.innerHTML = "오후 6:22";

    //요소 결합
    chatProfileDiv.appendChild(chatProfile);
    chatBox.appendChild(chatProfileDiv);
    chatBox.appendChild(chatName);
    chatBox.appendChild(chatTime);
    chatBox.appendChild(chatContent);

    //요소 스타일 적용
    setChatBoxStyle(chatBox);
    var profileDiv = chatBox.children[0];
    var name = chatBox.children[1];
    var time = chatBox.children[2];
    var content = chatBox.children[3];

    chatBox.style.height = "80px";


    profileDiv.style.width = "50px";
    profileDiv.style.height = "50px";
    profileDiv.style.float = "left";
    profileDiv.style.display = "block";
    profileDiv.style.borderRadius = "30%";
    profileDiv.style.overflow = "hidden";
    profileDiv.style.marginRight = "20px";
    
    profileDiv.children[0].style.width = "100%";
    profileDiv.children[0].style.height = "100%";
    profileDiv.children[0].style.objectFit = "cover";

    name.style.display = "inline-block";
    name.style.float = "left";
    name.style.fontWeight = "bold";
    name.style.fontSize = "large";
    name.style.margin = "0";
    name.style.marginBottom = "5px";
    
    time.style.display = "inline-block";
    time.style.float = "right";
    time.style.color = "gray";
    time.style.fontSize = "smaller";
    time.style.margin = "0";
    time.style.marginTop = "5px";
    
    content.style.display = "inline";
    content.style.color = "darkgray";
    content.style.float = "left";
    content.style.marginTop = "0";
    
    


    
    //채팅박스 추가
    var chatListElement = document.getElementById("chatList")
    chatListElement.append(chatBox); 
}

function setChatBoxStyle(chatBox) {

}