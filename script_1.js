var is_status = document.querySelector("h5");
var btn = document.querySelector("#btn");
var check = 0;
btn.addEventListener("click", function () {
  if (check == 0) {
    is_status.innerHTML = "Friends";
    is_status.style.color = "green";
    btn.innerHTML = "Remove Friend";
    check = 1;
  } else {
    is_status.innerHTML = "Stranger";
    is_status.style.color = "red";
    btn.innerHTML = "Add Friend";
    check = 0;
  }
});
