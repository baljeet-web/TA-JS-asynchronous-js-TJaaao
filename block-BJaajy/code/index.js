const oneSec = setTimeout(function time() {
  console.log(`I am displayed after 1 second`);
}, 1000);
const twoSec = setTimeout(function time() {
  console.log(`I am displayed after 2 seconds`);
}, 2000);
const threeSec = setTimeout(function time() {
  console.log(`I am displayed after 3 seconds`);
}, 3000);
const fourSec = setTimeout(function time() {
  console.log(`I am displayed after 4 seconds`);
}, 4000);


const userName = ['baljeet-web', 'prank7', 'Vasant11-97', 'piranha', 'gaearon'];

const usernamePromise = Promise.all(
    userName.map((user) => {
      console.log(user);
      return fetch(`https://api.github.com/users/${user}`).then((res) =>
        res.json()
      );
    })
  ).then((user) => {
    user.forEach((elm) => console.log(elm.followers));
  });



