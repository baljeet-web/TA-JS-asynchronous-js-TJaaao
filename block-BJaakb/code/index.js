function fetch(url) {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.onload = () =>
      setTimeout(() => resolve(JSON.parse(xhr.response)), 1000);
    xhr.onerror = () => reject("Something went wrong");
    xhr.send();
  });
}

let data = fetch(`https://api.github.com/users/getify`)
  .then((data) => {
    console.log(data.name);
  })
  .catch((error) => alert("Check Your Internet connection"));
