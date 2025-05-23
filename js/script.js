// For the HTML & CSS skill (very fluent - 90%)
let htmlCssProgress = document.querySelector(".html-progress");
let htmlCssValue = 0;
let htmlCssEndValue = 90;
let htmlCssSpeed = 50;

// For the Flutter skill (very fluent - 90%)
let flutterProgress = document.querySelector(".flutter-progress");
let flutterValue = 0;
let flutterEndValue = 90;
let flutterSpeed = 50;

// For the Bootstrap skill (intermediate - 70%)
let bootstrapProgress = document.querySelector(".bootstrap-progress");
let bootstrapValue = 0;
let bootstrapEndValue = 70;
let bootstrapSpeed = 50;

// For the JavaScript skill (intermediate - 65%)
let javascriptProgress = document.querySelector(".javascript-progress");
let javascriptValue = 0;
let javascriptEndValue = 65;
let javascriptSpeed = 50;

// For the Java skill (intermediate - 60%)
let javaProgress = document.querySelector(".java-progress");
let javaValue = 0;
let javaEndValue = 60;
let javaSpeed = 50;

// Progress animation for HTML & CSS
let htmlCssProgressAnimation = setInterval(() => {
  htmlCssValue++;
  htmlCssProgress.textContent = `${htmlCssValue}%`;
  if (htmlCssValue == htmlCssEndValue) {
    clearInterval(htmlCssProgressAnimation);
  }
}, htmlCssSpeed);

// Progress animation for Flutter
let flutterProgressAnimation = setInterval(() => {
  flutterValue++;
  flutterProgress.textContent = `${flutterValue}%`;
  if (flutterValue == flutterEndValue) {
    clearInterval(flutterProgressAnimation);
  }
}, flutterSpeed);

// Progress animation for Bootstrap
let bootstrapProgressAnimation = setInterval(() => {
  bootstrapValue++;
  bootstrapProgress.textContent = `${bootstrapValue}%`;
  if (bootstrapValue == bootstrapEndValue) {
    clearInterval(bootstrapProgressAnimation);
  }
}, bootstrapSpeed);

// Progress animation for JavaScript
let javascriptProgressAnimation = setInterval(() => {
  javascriptValue++;
  javascriptProgress.textContent = `${javascriptValue}%`;
  if (javascriptValue == javascriptEndValue) {
    clearInterval(javascriptProgressAnimation);
  }
}, javascriptSpeed);

// Progress animation for Java
let javaProgressAnimation = setInterval(() => {
  javaValue++;
  javaProgress.textContent = `${javaValue}%`;
  if (javaValue == javaEndValue) {
    clearInterval(javaProgressAnimation);
  }
}, javaSpeed);

// Update the circular progress animation
let htmlCssCircularProgress = document.querySelector(".html-css");
let flutterCircularProgress = document.querySelector(".flutter");
let bootstrapCircularProgress = document.querySelector(".bootstrap");
let javascriptCircularProgress = document.querySelector(".javascript");
let javaCircularProgress = document.querySelector(".java");

// HTML & CSS progress animation
let htmlCssProgressStartValue = 0;
let htmlCssProgressEndValue = 90;
let htmlCssProgressSpeed = 50;

let htmlCssProgress2 = setInterval(() => {
  htmlCssProgressStartValue++;
  htmlCssCircularProgress.style.background = `conic-gradient(#fca61f ${htmlCssProgressStartValue * 3.6}deg, #ededed 0deg)`;
  if (htmlCssProgressStartValue == htmlCssProgressEndValue) {
    clearInterval(htmlCssProgress2);
  }
}, htmlCssProgressSpeed);

// Flutter progress animation
let flutterProgressStartValue = 0;
let flutterProgressEndValue = 90;
let flutterProgressSpeed = 50;

let flutterProgress2 = setInterval(() => {
  flutterProgressStartValue++;
  flutterCircularProgress.style.background = `conic-gradient(#20c997 ${flutterProgressStartValue * 3.6}deg, #ededed 0deg)`;
  if (flutterProgressStartValue == flutterProgressEndValue) {
    clearInterval(flutterProgress2);
  }
}, flutterProgressSpeed);

// Bootstrap progress animation
let bootstrapProgressStartValue = 0;
let bootstrapProgressEndValue = 70;
let bootstrapProgressSpeed = 50;

let bootstrapProgress2 = setInterval(() => {
  bootstrapProgressStartValue++;
  bootstrapCircularProgress.style.background = `conic-gradient(#ff6464 ${bootstrapProgressStartValue * 3.6}deg, #ededed 0deg)`;
  if (bootstrapProgressStartValue == bootstrapProgressEndValue) {
    clearInterval(bootstrapProgress2);
  }
}, bootstrapProgressSpeed);

// JavaScript progress animation
let javascriptProgressStartValue = 0;
let javascriptProgressEndValue = 65;
let javascriptProgressSpeed = 50;

let javascriptProgress2 = setInterval(() => {
  javascriptProgressStartValue++;
  javascriptCircularProgress.style.background = `conic-gradient(#6f34fe ${javascriptProgressStartValue * 3.6}deg, #ededed 0deg)`;
  if (javascriptProgressStartValue == javascriptProgressEndValue) {
    clearInterval(javascriptProgress2);
  }
}, javascriptProgressSpeed);

// Java progress animation
let javaProgressStartValue = 0;
let javaProgressEndValue = 60;
let javaProgressSpeed = 50;

let javaProgress2 = setInterval(() => {
  javaProgressStartValue++;
  javaCircularProgress.style.background = `conic-gradient(#3f396d ${javaProgressStartValue * 3.6}deg, #ededed 0deg)`;
  if (javaProgressStartValue == javaProgressEndValue) {
    clearInterval(javaProgress2);
  }
}, javaProgressSpeed);

// Smooth scroll functionality for 'Hire Me' button
document.querySelector('.h-btn').addEventListener('click', function(e) {
  e.preventDefault();
  document.querySelector('#contact').scrollIntoView({
    behavior: 'smooth'
  });
});