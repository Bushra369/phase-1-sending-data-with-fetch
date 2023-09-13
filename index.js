// Add your code here
function submitData(userName, userEmail) {
  
  const userData = {
    name: userName,
    email: userEmail,
  };

  
  const configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(userData),
  };

  return fetch("http://localhost:3000/users", configObj)
    .then((response) => response.json())
    .then((user) => {
  
      const idNum = document.createElement("p");
      idNum.innerHTML = user.id;

      document.body.appendChild(idNum);
    })
    .catch((error) => {
      const errorMessage = document.createElement("p");
      errorMessage.innerHTML = error.message;

      document.body.appendChild(errorMessage);
    });
}


