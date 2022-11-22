let form = document.querySelector("form");
form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  let username = document.getElementById("name").value;
  let namediv = document.getElementById("namediv");

  if (username.length > 0 && !username.match("[a-zA-Z]")) {
    let errormessage = document.createElement("p");
    console.log(errormessage + "," + username + "namediv" + namediv);
    username = "";
    errormessage.innerHTML = "Username allows only alphabet";
    errormessage.style.color = "red";
    errormessage.style.fontSize = "20px";
    namediv.append(errormessage);
  }
}
