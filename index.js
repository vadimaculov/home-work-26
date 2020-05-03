// document.getElementById('helloText').innerHTML = "Hello, " + window.localStorage.person + "!";

// function currentName () {
//         var currentPerson = localStorage.getItem('person');
//         document.getElementById('helloText').innerHTML = "Hello, " + localStorage.getItem('person') + "!";
//     } 


function personName() {
    var person = prompt("Please enter your name", "");
    localStorage.setItem('person', person);
    document.getElementById('helloText').innerHTML = "Hello, " + localStorage.getItem('person') + "!";

}

    // person.value = localStorage.getItem('person');
    // person.oninput = () => {
    //   localStorage.setItem('person', person.value)
    // };