"use strict";
// const User={
//     name:"sukant",
//     email:"sukant@gmail.com",
//     isActive:true
// }
// function createUser({name:string,isPaid:boolean}){
Object.defineProperty(exports, "__esModule", { value: true });
function createUser(user) {
    return { name: user.name, email: user.email, isActive: user.isActive };
}
createUser({ name: "", email: "", isActive: true });
