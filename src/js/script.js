/*
======== IMFORMATION ========
? @author: Abhirath Agasanakoppa
? @date: 12-4-2021
? @license: MIT
? @version: 1.0.0
? @description: This is the main index page for the Kidzee Trends website.

======== Code Summary ========
* We First grab the preloader, year span, and body from the DOM.
* We then create a new date class and get the current year.
* We then temporarily hide the overflow in the body.
* We then add a event listener that fires when the page is loaded.
* in that event listener we first register a setTimeout function that will run 2s after the page is loaded.
* We then will set the year span to the current year,
* add the "hidden" class to the preloader which makes the preloader disapear,
* and make the overflow visable again. 
*/

// Grabing the Elements From the DOM
const preloader = document.querySelector(".preloader");
const yearSpan = document.querySelector(".year");
const body = document.querySelector("body");
const date = new Date();
const year = date.getFullYear();
feather.replace();

// Making sure the user doesn't scroll down
 body.style.overflow = "hidden";
// Adding a event listener that fires when the page is loaded.
 document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    // Hiding the preloader
    preloader.className += "hidden";
    // Setting the year span to the current year
    yearSpan.innerHTML = year;
    // Setting the overflow back to visable
    body.style = "overflow: visible";
  }, 2000);
});
