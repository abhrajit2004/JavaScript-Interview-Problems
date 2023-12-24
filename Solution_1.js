// Method 1:
function magicalSortingHat(){
    let student = [];
    let a = prompt("Enter your name: ");
    student.push(a);
    for (let index = 0; index < student.length; index++) {
        const element = student[index];
        if(element.length<6){
            console.log(element, "is assigned to Gryffindor House");
        }
        else if(element.length<8){
            console.log(element, "is assigned to Hufflepuff House");
        }
        else if(element.length<12){
            console.log(element, "is assigned to Ravenclaw House");
        }
        else{
            console.log(element, "is assigned to Slytherin House");
        }
    }
}

magicalSortingHat();

// Method 2:
let students = ["Abhrajit","Sukalyan","Shuvadipta","Ankita","Arpan","Shruti","Rupak","Ravindranathan","Abhishek"];

let houses = [];

for (const student of students) {
    if(student.length<6){
        houses.push("Gryffindor");
    }
    else if(student.length<8){
        houses.push("Hufflepuff");
    }
    else if(student.length<12){
        houses.push("Ravenclaw");
    }
    else{
        houses.push("Slytherin");
    }
}

console.log(houses);