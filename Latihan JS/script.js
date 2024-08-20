window.onload = function() {
    document.querySelector('h1').textContent = "Latihan JavaScript Selesai";
};

document.addEventListener("DOMContentLoaded", function() {
let name = "John";
const age = 30;

document.getElementById("output").innerHTML

let fruits = ["Apple", "Banana", "Mango"];
for (let i = 0; i < fruits.length; i++) {
    document.getElementById("output").innerHTML += `<p>Fruit: ${fruits[i]}</p>`;
}

let person = {firstName: "John", lastName: "Doe", age: 30};
document.getElementById("output").innerHTML += `<p>First Name: ${person.firstName}</p><p>Last Name: ${person.lastName}</p>`;
});


function cekNilai() {
   
    let nilai = parseInt(document.getElementById("userInput").value);
    
 
    if (isNaN(nilai)) {
        document.getElementById("output").innerHTML = "<p>Masukkan angka yang valid.</p>";
        return;
    }
    
   
    if (nilai > 10) {
        document.getElementById("output").innerHTML = "<p>Nilai lebih besar dari 10.</p>";
    } else if (nilai === 10) {
        document.getElementById("output").innerHTML = "<p>Nilai sama dengan 10.</p>";
    } else {
        document.getElementById("output").innerHTML = "<p>Nilai kurang dari 10.</p>";
    }
    

    document.getElementById("output").innerHTML += "<p>Angka 1 hingga " + nilai + ":</p>";
    for (let i = 1; i <= nilai; i++) {
        document.getElementById("output").innerHTML += i + " ";
    }
}

function greet(name) {
    return "Hello, " + name;
}

document.getElementById("output").innerHTML = greet("Udin") + "<br>";
document.getElementById("output").innerHTML += greet("Wawan") + "<br>";
document.getElementById("output").innerHTML += greet("Asep") + "<br>";


function calculateSquare(number) {
    return number * number;
}

document.getElementById("output").innerHTML += "Square of 2 = " + calculateSquare(2) + "<br>";
document.getElementById("output").innerHTML += "Square of 5 = " + calculateSquare(5) + "<br>";
document.getElementById("output").innerHTML += "Square of 10 = " + calculateSquare(10) + "<br>";


const addNumbers = (num1, num2) => num1 + num2;


document.getElementById("output").innerHTML += "Sum of 3 and 4 = " + addNumbers(3, 4) + "<br>";
document.getElementById("output").innerHTML += "Sum of 7 and 8 = " + addNumbers(7, 8) + "<br>";
document.getElementById("output").innerHTML += "Sum of x and y = " + addNumbers(100, 20) + "<br>";



let students = ["Alice", "Bob", "Charlie"];
students.push("David"); 


document.getElementById("output").innerHTML = "<p>Daftar Siswa:</p>";
students.forEach(function(student) {
    document.getElementById("output").innerHTML += student + "<br>";
});


let car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2020
};


document.getElementById("output").innerHTML += "<p>Detail Mobil:</p>";
for (let property in car) {
    document.getElementById("output").innerHTML += property + ": " + car[property] + "<br>";
}


let cars = [
    {brand: "Toyota", model: "Corolla", year: 2020},
    {brand: "Honda", model: "Civic", year: 2019},
    {brand: "Ford", model: "Mustang", year: 2021}
];


document.getElementById("output").innerHTML += "<p>Daftar Mobil:</p>";
cars.forEach(function(car) {
    document.getElementById("output").innerHTML += "Brand: " + car.brand + ", Model: " + car.model + ", Year: " + car.year + "<br>";
});
