// let x = 20;
// let y = x;
// console.log(x, y);
// x = 30;
// console.log(x, y);


// let a = { value: 50 }
// let b = a;

// console.log(a, b)
// a.value = 60;
// console.log(a, b)

let user = { name: "tharindu" }
function message(user) {
    user.name = "kavishna"
    console.log('my user is: ', user.name);
}
message(user)
console.log(user.name)