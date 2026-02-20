// const User={
//     name:"sukant",
//     email:"sukant@gmail.com",
//     isActive:true
// }
// function createUser({name:string,isPaid:boolean}){

// }

// createUser({name:"sukant",isPaid:false});

// function createCourse():{}{
//     return{};
// }


// type User={
//     name:string;
//     email:string;
//     isActive:boolean;
// }


// function createUser(user:User):User{
//     return {name:user.name,email:user.email,isActive:user.isActive}
// }

// createUser({name:"",email:"",isActive:true})

type User={
    readonly _id:string;
    name:string;
    email:string;
    isActive:boolean;
    creditcardDetails?:number;
}


let myUser:User={
    _id:"1234",
    name:"h",
    email:"h@h.com",
    isActive:false
}

myUser.email="h@gmail.com"

type cardNumber={
    cardnumber:string;
}

type cardDate={
    cardDate:string
}

type cardDetails=cardNumber & cardDate & {
    cvv?:string
};

let c:cardDetails={
    cardnumber:"23",
    cardDate:"23",
    cvv:"12"
}

console.log(c);

export{}