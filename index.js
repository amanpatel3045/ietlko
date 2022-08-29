

//.then and .catch ki help se data ko fetch krna




fetch("https://reqres.in/api/users?page=2")
  .then(function (res) {
    return res.json();
  })
  .then(function (res2) {
    console.log(res2.data);
    var content = document.getElementById("content");
    res2.data.forEach(function (element) {
        console.log(element.avatar,'aman');
      content.innerHTML += `
 
      <div style = "margin:5%">
      
      <img src=${element.avatar} alt="preview" >
  
      <div id="fullName">${element.first_name} ${element.last_name}</div>
      <div id="email">${element.email}</div>
      </div>
      `
    })
  })
  .catch(function (err) {
    console.log(err);
  });
