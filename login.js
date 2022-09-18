if (localStorage.getItem("currentUser")== "null") {
  window.onload = () => {
    const usernameField = document.getElementById("username");
    const passwordField = document.getElementById("password");
    const submitButton = document.getElementById("submit");
    const storage = window.localStorage ; 
    const h3 = document.getElementById("DoesNot");
    let flag = false;
    submitButton.addEventListener("click" , ()=>{
  
      const username = usernameField.value;
      if (username == ""){
        flag = true;
      }
      const password = passwordField.value;
      if (password == ""){
        flag = true;
      }
      if (flag == false){
      const user = JSON.parse(storage.getItem(username))
      if( user == null){
          h3.innerHTML = "User does not exist";
  
      }
      else{
          if(user["password"] == password){
              storage.setItem("currentUser" , username);
              location.assign("game.html");
          }
          else{
              h3.innerHTML = "Wrong Password";
          }
  
      }
    }
    else {
      h3.innerHTML = "Both inputs are required";
    }
  
    })
  };
} else
{
  location.assign("gamee.html");

}


