async function getData() {
  try {
    let api_key = "fc7a337a";
    let url = "http://www.omdbapi.com/?i=tt3896198&apikey=${api_key}";
    let res = await fetch(url);
    let data = await res.json;
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}
getData();
