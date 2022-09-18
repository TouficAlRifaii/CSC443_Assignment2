window.onload = () => {
  const storage = window.localStorage;
  const submitButton = document.getElementById("submit");
  const usernameField = document.getElementById("username");
  const passwordField = document.getElementById("password");
  const h3 = document.getElementById("Already");
  let flag = false;
  // let username;
  // let password;
  submitButton.addEventListener("click", () => {
    const username = usernameField.value;
    if (username == ""){
      flag = true;
    }
    const password = passwordField.value;
    if (password == ""){
      flag = true;
    }
    if (flag == false){
      if (JSON.parse(storage.getItem(username)) != null) {
        h3.innerHTML = "User Already Exist proceed to login!";
  
        
      } else {
        const user = { username: username, password: password, score: 0 };
        storage.setItem(username, JSON.stringify(user));
        location.assign("index.html");
      }
    }
    else {
      h3.innerHTML = "Both inputs are required";
    }
    
  });
};
