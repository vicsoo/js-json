const user = {
    "name": "Victor",
    "lastname": "",
    "age": 34,
    "nickname": "byvicsoo",
    "hobbies": ["run","soccer","watch movies"],
    "address": {
        "street": "Montalvo 26",
        "city": "Tizayuca"
    },
    "married": true,
    getUser() {
        return "Victor Hugo";
    }
}

const friends = [
    {"name": "Armando", "nickname": "Pelon", "age": 24},
    {"name": "Daniel", "nickname": "Jicaras", "age": 34},
    {"name": "Jonh", "nickname": "Goku", "age": 43},
    {"name": "Luis", "nickname": "Negro", "age": 23}
]

user.friends = friends;

let output = ''

for (let i = 0; i < friends.length; i++) {
    output = output + `<li>${friends[i].name} - ${friends[i].nickname}</li>`;
}

document.getElementById("people").innerHTML = output;

console.log(user);
console.log(user.name);
console.log(user.getUser);
console.log(user.hobbies);
console.log(JSON.stringify(user));

let album = ''

fetch('https://jsonplaceholder.typicode.com/albums')
.then(response => {
    return response.json()
})
.then(data => {
    for (let i = 0; i < data.length; i++) {
        album += `<ol>${data[i].userId} - ${data[i].title}</ol>`;
    }
    document.getElementById("album").innerHTML = album;
})

// Objeto para manipular y para enviar datos a otra app, sistema, etc es mediante JSON
// JSON.parse => Conviertes de un objeto (string) JSON a un objeto JavaScript
// JSON.stringify() => Conviertes un objeto JavaScript a JSON