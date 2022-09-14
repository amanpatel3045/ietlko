// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time
var amount = localStorage.getItem("amount") || 0;
document.getElementById("wallet").innerText = amount;

showMovie();
function showMovie() {
  var moviesDiv = document.getElementById("movie");
  var element = JSON.parse(localStorage.getItem("movie"));
  const { original_title: name, poster_path: poster } = element;
  let posterUrl = `https://image.tmdb.org/t/p/original` + poster;

  var div = document.createElement("div");
  div.className = "movie_tab";

  let img = document.createElement("img");
  img.setAttribute("src", posterUrl);
  img.setAttribute("height", "400px");
  let p = document.createElement("p");
  p.innerText = name;

  div.append(img, p);
  moviesDiv.append(div);
}

function confirmBooking() {
  var moneyReq = +document.getElementById("number_of_seats").value;
  moneyReq = moneyReq * 100;
  if (moneyReq > amount) {
    alert("Insufficient Balance!");
  } else {
    amount -= moneyReq;
    document.getElementById("wallet").innerText = amount;
    localStorage.setItem("amount", amount);
    alert("Booking successful!");
  }
}
