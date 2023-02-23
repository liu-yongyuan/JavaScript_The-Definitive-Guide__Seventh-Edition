function c1(response) {
  let p4 = response.json();
  return p4;
}

function c2(profile) {
  displayUserProfile(profile);
}

let p1 = fetch("/api/user/profile");
let p2 = p1.then(c1);
let p3 = p2.then(c2);
