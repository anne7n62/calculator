"use strict";

let readnumber1 = null;
let readnumber2 = null;
let result = null;

document.addEventListener("DOMContentLoaded", start);

function start() {
    console.log ("start");
    document.querySelector("#calculate").addEventListener ("click", readNumbers);
    document.querySelector("#clear").addEventListener("click", clearNumbers);
}

function readNumbers() {
console.log ("reading numbers");
let firstnumber = document.querySelector("#firstnumber").value;
let secondnumber = document.querySelector("#secondnumber").value;
readnumber1 = Number(firstnumber);
readnumber2 = Number(secondnumber);

calculateNumbers();
}

function calculateNumbers() {
    console.log ("Calculating all numbers");
    let operator = document.querySelector("#operator").value;

    if (operator === "add") {
        result = readnumber1 + readnumber2;
      } else if (operator === "sub") {
        result = readnumber1 - readnumber2;
      } else if (operator === "mul") {
        result = readnumber1 * readnumber2;
      } else {
        result = readnumber1 / readnumber2;
      }

    roundUp();
}

function roundUp() {
    const doRound = document.querySelector("#doround").checked;
    const decimals = document.querySelector("#decimals").value;
  
    if (doRound === true) {
      //https://www.w3schools.com/jsref/jsref_tofixed.asp
      result = result.toFixed(decimals);
    }
    showResult();
  }

function showResult() {
    document.querySelector("#firstnumber").value = null;
    document.querySelector("#secondnumber").value = null;
  
    const container = document.querySelector("#results");
    const makeList = document.createElement("li");
    makeList.innerHTML = result;
    container.appendChild(makeList);
    container.scrollTo(1, 1000000000);
  }


function clearNumbers() {
    document.querySelector("#results").innerHTML =
      "<li>0</li><li>0</li><li>0</li><li>0</li>";
  }



