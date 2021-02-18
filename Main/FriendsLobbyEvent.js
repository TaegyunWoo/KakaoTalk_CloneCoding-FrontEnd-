function person(n, p, s) {
    this.name = n;
    this.profile = p;
    this.stateMessage = s;

    //매개변수 = 추가할 페이지의 document객체
    this.addFriend = function(addHr) {
        
        var friendProduct = document.createElement("div");
        var nameElement = document.createElement("span");
        var profileDiv = document.createElement("div");
        var profileElement = document.createElement("img");
        var stateMessageElement = document.createElement("span");

        nameElement.innerHTML = this.name;
        profileElement.setAttribute("src", this.profile);
        stateMessageElement.innerHTML = this.stateMessage;
        profileDiv.appendChild(profileElement);
        nameElement.setAttribute("class", "name");
        
        
        friendProduct.appendChild(document.createElement("br"));
        friendProduct.appendChild(profileDiv);
        friendProduct.appendChild(nameElement);
        friendProduct.appendChild(stateMessageElement);

        //friendProduct 추가
        var friendListElement = document.getElementById("friendList");
        setStyle(friendProduct);
        friendListElement.appendChild(friendProduct);

        //매개변수 hr이 true면 수평선 추가
        if(addHr) {
            friendProduct.appendChild(document.createElement("hr"));
        }
        
    };

    //style설정
    function setStyle(friendProduct) {
        friendProduct.style.height = "50px";
        friendProduct.style.marginTop = "20px";

        var imgDiv = friendProduct.children[1];
        imgDiv.style.width = "50px";
        imgDiv.style.height = "50px";
        imgDiv.style.float = "left";
        imgDiv.style.display = "block";
        imgDiv.style.borderRadius = "30%";
        imgDiv.style.overflow = "hidden";
        imgDiv.style.marginRight = "15px";

        var img = imgDiv.children[0];
        img.style.width = "100%";
        img.style.height = "100%";
        img.style.objectFit = "cover";

        var name = friendProduct.children[2];
        name.style.fontWeight = "bold";
        name.style.fontSize = "large";
        name.appendChild(document.createElement("br"));

        var stateMessage = friendProduct.children[3];
        stateMessage.style.display = "inline-block";
        stateMessage.style.marginTop = "10px";
        stateMessage.style.color = "darkgray";


    }
}

//친구 찾기
function findFriend(name) {
    var friends = document.getElementsByClassName("name");
    var findedFriends = new Array();
    for(var i=0; i<friends.length; i++) {
        var reg = new RegExp(name);
        if( !reg.test(friends[i].innerHTML) ) {
            friends[i].style.display = "none";
        }
    }
}

window.onload = function() {
    //나 추가
    var me = new person("우태균", "../images/profile.png", "열심히 공부합시다!");
    me.addFriend(true);
    
    //친구추가 이벤트
    var addFriendElement = document.getElementsByClassName("addFriend")[0];
    console.log(addFriendElement);
    addFriendElement.addEventListener("click", addFriendEvent, false);
    function addFriendEvent(e) {
        var name = prompt("이름을 입력하세요.");
        var profileImgNum = parseInt(prompt("이미지 번호를 입력하세요. (1~5)"));
        var stateMessage = prompt("상태메시지를 입력하세요.");

        var friend = new person(name, `../images/profile${profileImgNum}.png`, stateMessage);
        friend.addFriend();
    }
    
    //친구찾기 검색바 생성
    

    //친구찾기 검색바 제거
    
};
