const age = 24;
const isFemale = true;
const driverStatus = 'bob';
const firstName = "Joery";
const totalAmount = 10

if (age >= 18) {
    console.log("Je kunt naar binnen gaan.");
} else {
    console.log("Sorry maar je bent nog niet oud genoeg.");
}

if (isFemale) {
    console.log("Je hebt geluk het is ladiesnight.");
} else {
    console.log("Sorry maar het is vanavond ladiesnight.");
}

if (driverStatus == 'bob') {
    console.log("Je bent BOB, je mag naar huis rijden.");
} else {
    console.log("Sorry je hebt teveel gedronken om nog te mogen rijden");
}

if (age >= 18 && age <= 25) {
    console.log("Je krijgt 50% korting!");
} else {
    console.log("Geen korting voor jou.");
}

if (firstName == 'Sarah' || firstName == 'Bram') {
    console.log("Dit biertje krijg je gratis.");
} else {
    console.log("Dit biertje kost 5 euro, ik moet toch die coronschade inhalen hé.");
}

if (totalAmount >= 25 && totalAmount < 50) {
    console.log("Bij deze bestelling krijg je gratis (vega)bitterballen.");
} else if (totalAmount >= 50 && totalAmount < 100) {
    console.log("Bij deze bestelling krijg je gratis portie nachos.");
} else if (totalAmount >= 100) {
    console.log("Bij deze bestelling krijg je gratis fles champagne.");
} else {
    console.log("Bij bestellingen van 25 tot 50 euro gratis bitterballen, van 50 tot 100 euro gratis nachos en van 100 euro en meer een gratis fleschampagne.");
}