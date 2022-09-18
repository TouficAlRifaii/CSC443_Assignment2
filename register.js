window.onload = () => {
  const storage = window.localStorage;
  const submitButton = document.getElementById("submit");
  const usernameField = document.getElementById("username");
  const passwordField = document.getElementById("password");
  const h3 = document.getElementById("Already");
  // let username;
  // let password;
  submitButton.addEventListener("click", () => {
    const username = usernameField.value;
    
    const password = passwordField.value;
    
    if (JSON.parse(storage.getItem(username)) != null) {
      h3.innerHTML = "User Already Exist proceed to login!";

      
    } else {
      const user = { username: username, password: password, score: 0 };
      storage.setItem(username, JSON.stringify(user));
      location.assign("index.html");
    }
  });
};
