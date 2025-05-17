// Object
const mySym = Symbol("key1")
 const JsUser = {
    name: "mehreen",
    "full name": "Mehreen Zawar",
    age: 24,
    [mySym]: "mykey1",
    address: "Chichawatni",
    email: "mehreen@gmail.com",
    isLoggedIn: false,
    lastLoginDays:["Monday", "Friday"]
}
console.log(JsUser);
// console.log(JsUser["isLoggedIn"]);
// console.log(JsUser["email"]);
// console.log(JsUser.email);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);
// console.log(typeof JsUser[mySym]);


JsUser.email = "mehr@gmail.com"
// Object.freeze(JsUser)
JsUser.email = "Mehreen123@gmail.com"
// console.log(JsUser);


JsUser.greeting = function(){
    console.log("hello Js user");    
}
JsUser.greetingtwo = function(){
    console.log(`hello Js user, ${this.name}`);    
}
console.log(JsUser.greeting());
console.log(JsUser.greetingtwo());



