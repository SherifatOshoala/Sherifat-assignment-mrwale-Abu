let no1 = Math.sign(-100);

if (no1 === 1) {
  console.log("Positive");
} else if (no1 === 0) {
  console.log("Zero");
} else {
  console.log("Negative");
}

// OR string the number

let no1a = "100";
if (no1a.startsWith("-") === true) {
  console.log("Negative");
} else if (no1 === 0) {
  console.log("Zero");
} else {
  console.log("Positive");
}

let no2 = 22;
if (no2 % 2 === 0) {
  console.log("Even");
} else {
  console.log("odd");
}

let age = 23;
if (age % 5 === 0) {
  console.log("Multiple of 5");
} else if (age % 3 === 0) {
  console.log("Multiple of 3");
} else {
  console.log("Neither");
}

let year = 2999;

if (year >= 1901 && year <= 2000) {
  console.log("20th Century");
} else if (year >= 2001 && year <= 2100) {
  console.log("21st Century");
} else if (year >= 2101 && year <= 2200) {
  console.log("22nd Century");
} else {
  console.log("none");
}

let a = 11;

if (a < 10) {
  console.log(0);
} else if (a >= 10 && a <= 50) {
  console.log(1);
} else if (a >= 51 && a <= 100) {
  console.log(2);
} else {
  console.log(3);
}