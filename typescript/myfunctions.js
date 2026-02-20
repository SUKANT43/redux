"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
}
addTwo(5);
var heros = [1, 2, 3];
heros.map(function (h) {
    return "hero is" + h;
});
function fail(msg) {
    throw new Error(msg);
}
