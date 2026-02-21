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

class User{
    private _courseCount=1;
    readonly city:string="jaipur";
    constructor(
        public email:string,
        public name:string,
        city:string
    ){
        this.city=city
    }
   get getEmail():string{
        return "apple"+this.email;
    }

    get courseCount():number{
        return this._courseCount;
    }

    set courseCount(coursenumber){
        this._courseCount=coursenumber;
    }

    protected  mail():void {
        
    }

}

const sukant=new User("@","sukant","s");
console.log(sukant.name);


class SubUser extends User{
}
