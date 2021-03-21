function msg(){
    var commentTextArea = document.getElementById("text");
    var userNameTextArea = document.getElementById("username");
    var butt= document.getElementById("btn");
    var tet_li= document.getElementById("text_li");
    var d=new Date();
    var date_string=d.toLocaleString();

    if(userNameTextArea.value != null && userNameTextArea.value != ''){
        if(commentTextArea.value != null && commentTextArea.value != ''){
            //var Li= document.createElement("li");
            var commentUserName=document.createElement('span');
            var user_date = document.createElement('span');
            var s= document.createElement('p');
            commentUserName.innerHTML= userNameTextArea.value;
            user_date.innerHTML = date_string;
            s.innerHTML= commentTextArea.value;
            commentUserName.setAttribute('class', 'username1');
            
            s.setAttribute('class','reply');
            tet_li.appendChild(commentUserName);
            commentUserName.appendChild(user_date);
            commentUserName.appendChild(s);
            commentTextArea.value="";
            userNameTextArea.value="";
        }
        else{
            window.alert("请输入回复内容！");
        }
    }
    else{
        window.alert("请输入用户名！");
    }
}

function clearComment(){
    var commentTextArea=document.getElementById("text");
    commentTextArea.value="";
}