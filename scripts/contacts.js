let form = document.querySelector("form");
form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  let username = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let namediv = document.getElementById("namediv");
  let emaildiv = document.getElementById("emaildiv");
  const nameregex = "/[a-zA-Z]";
  const emailregex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (username.length > 0 && !username.match(nameregex)) {
    let errormessage = document.createElement("p");
    errormessage.innerHTML = "Name allows only alphabet";
    errormessage.style.color = "red";
    errormessage.style.fontSize = "20px";
    namediv.append(errormessage);
    event.preventDefault();
  }

  if (email.length > 0 && !email.match(emailregex)) {
    let errormessage = document.createElement("p");
    errormessage.innerHTML = "Please enter valid email";
    errormessage.style.color = "red";
    errormessage.style.fontSize = "20px";
    emaildiv.append(errormessage);
    event.preventDefault();
  }
}
