window.onload = () => {
  const usernameField = document.getElementById("username");
  const passwordField = document.getElementById("password");
  const submitButton = document.getElementById("submit");
  const storage = window.localStorage ; 
  const h3 = document.getElementById("DoesNot");
  submitButton.addEventListener("click" , ()=>{

    const username = usernameField.value;
    const password = passwordField.value;
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

  })
};
