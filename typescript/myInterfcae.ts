interface User{
    readonly dbId:number,
    email:string,
    userId:number,
    googleId?:string,
    startTrail():string|number
    //startTrail:()=>string

}

const sukant:User={
    dbId:2,
    email:"s",
    userId:2,
    startTrail:()=>{return "4"}
};