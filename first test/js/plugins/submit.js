function msg(){
    var tet= document.getElementById("text");
    var name= document.getElementById("username");
    var butt= document.getElementById("btn");
    var tet_li= document.getElementById("text_li");
    var d=new Date();
    var out_d=d.toLocaleString();

    if(name.value != null && name.value != ''){
        if(tet.value != null && tet.value != ''){
            //var Li= document.createElement("li");
            var username=document.createElement('span');
            var user_date=document.createElement('span');
            var s= document.createElement('p');
            username.innerHTML= name.value;
            user_date.innerHTML= out_d;
            s.innerHTML= tet.value;
            username.setAttribute('id', 'username1');
            
            s.setAttribute('id','reply');
            tet_li.appendChild(username);
            username.appendChild(user_date);
            username.appendChild(s);
            tet.value="";
            name.value="";
        }
        else{
            window.alert("请输入回复内容！");
        }
    }
    else{
        window.alert("请输入用户名！");
    }
}

function empty(){
    var tet=document.getElementById("text");
    tet.value="";
}