let user = {name: "John", age:30};
localStorage.setItem('western-class', JSON.stringify(user));

let user2 = {name: "John ll", age:30};
localStorage.setItem('western-test', JSON.stringify(user2));

let item = JSON.parse( localStorage.getItem('western-class') );
localStorage.removeItem('western-test');

console.log(item);