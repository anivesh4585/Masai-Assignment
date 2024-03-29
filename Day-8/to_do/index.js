document.querySelector("form").addEventListener("submit", myTodo);

function myTodo() {
  event.preventDefault();
  var task = document.querySelector("#task").value;
  var priority = document.querySelector("#priority").value;

  var tr = document.createElement("tr");
  var td1 = document.createElement("td");
  td1.innerText = task;

  var td2 = document.createElement("td");
  td2.innerText = priority;

  if (priority == "High") {
    td2.style.backgroundColor = "red";
  } else {
    td2.style.backgroundColor = "green";
  }

  var td3 = document.createElement("td");
  td3.innerText = "Delete";
  td3.addEventListener("click", deleteRow);
  td3.style.color = "red";
  
  tr.append(td1, td2, td3);
  document.querySelector("tbody").append(tr);
}

function deleteRow() {
  event.target.parentNode.remove();
}
