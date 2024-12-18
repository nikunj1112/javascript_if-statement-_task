// Find the Maximum of Three Numbers

let a = 450;
let b = 620;
let c = 389;


{
    if (a < b || a < c) {
        if (b > c) {
            console.log("B is maximum")
        }
        else {
            console.log("C is maximum")
        }
    }
    else {
        console.log("A is maximum")
    }
}