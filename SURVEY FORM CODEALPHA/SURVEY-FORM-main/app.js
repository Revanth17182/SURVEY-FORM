function next1Click(e) {
  document.getElementById("survey1").style.display = "none";
  document.getElementById("survey2").style.display = "block";
  event.preventDefault();
}

function prev1Click(e) {
  document.getElementById("survey1").style.display = "block";
  document.getElementById("survey2").style.display = "none";
  event.preventDefault();
}

function next2Click(e) {
  document.getElementById("survey2").style.display = "none";
  document.getElementById("survey3").style.display = "block";
  event.preventDefault();
}

function prev2Click(e) {
  document.getElementById("survey2").style.display = "block";
  document.getElementById("survey3").style.display = "none";
  event.preventDefault();
}

function sendEmail() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let age = document.getElementById("age").value;
  let role = document.getElementById("role").value;
  let first_optn = document.querySelector("input[name = firs]:checked").value;
  let second_optn = document.querySelector("input[name = first]:checked").value;
  let third_optn = document.querySelector("input[name = fir]:checked").value;
  let rating1 = document.querySelector("input[name = rating1]:checked").value;
  let rating2 = document.querySelector("input[name = rating2]:checked").value;
  let rating3 = document.querySelector("input[name = rating3]:checked").value;

  console.log(
    name,
    email,
    age,
    role,
    first_optn,
    second_optn,
    third_optn,
    rating1,
    rating2,
    rating3
  );
  event.preventDefault;
}
