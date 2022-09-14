// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page

async function MoviesTrending() {
  try {
    let search = document.getElementById("search").value;
    let url = `https://api.themoviedb.org/3/trending/movie/week?api_key=bc1f2c93cb92e7dd449e71c2c6f1402c`;
    let res = await fetch(url);
    let data = await res.json();
    localStorage.setItem("Movies", JSON.stringify(data));
    console.log(data);
  } catch (error) {
    console.log(error, "err");
  }
}

function appendMovie() {
  let data = JSON.parse(localStorage.getItem("Movies")) || [];
  data.results.map((element) => {
    let main_div = document.createElement("div");
    let image = document.createElement("img");
    image.src = `https://image.tmdb.org/t/p/w500${element.backdrop_path}`;
    image.id = "photo";
    let title = document.createElement("h3");
    title.innerText = element.title;
    let btn = document.createElement("button");
    btn.innerText = "Add to cart";
    btn.addEventListener("click", function () {
      addtocart(index);
    });
    main_div.append(image, title, btn);
    document.getElementById("movies").append(main_div);
  });
}
appendMovie();
function addtocart(index) {}

function AddMoney() {
  let money = JSON.parse(localStorage.getItem("amount")) || [];
  let paisa = document.createElement("h1");
  paisa.innerText = money;
  document.getElementById("navbar").append(paisa);
}
AddMoney();
