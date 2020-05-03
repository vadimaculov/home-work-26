// document.getElementById('helloText').innerHTML = "Hello, " + window.localStorage.person + "!";

// function currentPerson() {
//     if (localStorage.getItem ('person')) {
//         var currentPerson = localStorage.getItem('person');
//         document.getElementById('helloText').innerHTML = "Hello, " + currentPerson + "!";
// }

function personName() {
    var person = prompt("Please enter your name", "");
    localStorage.setItem('person', person);
    document.getElementById('helloText').innerHTML = "Hello, " + localStorage.getItem('person') + "!";
    person.oninput = () => {
        localStorage.setItem('person', person.value)
      };
}

function reset () {
    localStorage.clear();
}
