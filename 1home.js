var userName = prompt ("Ваше имя?");
if (/\d/.test(userName)){
    function s(userName){
        var arr = userName.split('');
        
        for (var i=0; i < arr.length; i= i+2){
            
            arr[i]= arr[i].toUpperCase() + arr[i].slice(1);
            
        }
    return arr.join('');
    }
  alert(s(userName));
}
    /*alert (число);*/
    
else { 
    userNameRev = ""; 
    for (i=userName.length-1; i>=0; i--){
        userNameRev += userName[i]; 
    }
    alert (userNameRev);
}




