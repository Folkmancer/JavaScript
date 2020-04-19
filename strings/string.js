"use strict";

function ucFirst(str) {
    if (!str) {
        return str;
    }

    return str[0].toUpperCase() + str.slice(1);
}

function checkSpam(str) {
    let lowerStr = str.toLowerCase();

    return lowerStr.includes("viagra") || lowerStr.includes("xxx");
}

function truncate(str, maxlength) {
    return str.length > maxlength ? str.slice(0, maxlength - 1) + String.fromCodePoint(8230) : str;
}

function extractCurrencyValue(str) {
    return +str.slice(1);
}