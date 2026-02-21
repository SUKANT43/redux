"use strict";
// class User{
//     email:string;
//     name:string;
//    private readonly city?:string;
//     constructor(email:string,name:string,city:string){
//         this.email=email;
//         this.name=name;
//         this.city=city;
//     }
// }
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    email;
    name;
    _courseCount = 1;
    city = "jaipur";
    constructor(email, name, city) {
        this.email = email;
        this.name = name;
        this.city = city;
    }
    get getEmail() {
        return "apple" + this.email;
    }
    get courseCount() {
        return this._courseCount;
    }
    set courseCount(coursenumber) {
        this._courseCount = coursenumber;
    }
    mail() {
    }
}
const sukant = new User("@", "sukant", "s");
console.log(sukant.name);
class SubUser extends User {
}
//# sourceMappingURL=index.js.map