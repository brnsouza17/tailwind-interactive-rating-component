"use strict";

const r1 = document.querySelector("#r1");
const r2 = document.querySelector("#r2");
const r3 = document.querySelector("#r3");
const r4 = document.querySelector("#r4");
const r5 = document.querySelector("#r5");
const submit = document.querySelector("button");
const rating = document.querySelectorAll(".rating");
const selectedMessage = document.querySelector("#selected-message");
const cardRating = document.querySelector("#card-rating");
const cardThanks = document.querySelector("#card-thanks");

let n = 0;

r1.addEventListener("click", () => {
    n = 1;
    rating.forEach((rating) => {
        rating.classList.remove("selected");
    });
    r1.classList.add("selected");
});

r2.addEventListener("click", () => {
    n = 2;
    rating.forEach((rating) => {
        rating.classList.remove("selected");
    });
    r2.classList.add("selected");
});

r3.addEventListener("click", () => {
    n = 3;
    rating.forEach((rating) => {
        rating.classList.remove("selected");
    });
    r3.classList.add("selected");
});

r4.addEventListener("click", () => {
    n = 4;
    rating.forEach((rating) => {
        rating.classList.remove("selected");
    });
    r4.classList.add("selected");
});

r5.addEventListener("click", () => {
    n = 5;
    rating.forEach((rating) => {
        rating.classList.remove("selected");
    });
    r5.classList.add("selected");
});

submit.addEventListener("click", () => {
    selectedMessage.textContent = `You selected ${n} out 5`;
    cardRating.classList.add("hidden");
    cardThanks.classList.remove("hidden");
    cardThanks.classList.add("flex");
});
