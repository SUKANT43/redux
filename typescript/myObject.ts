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


type User={
    name:string;
    email:string;
    isActive:boolean;
}


function createUser(user:User):User{
    return {name:user.name,email:user.email,isActive:user.isActive}
}

createUser({name:"",email:"",isActive:true})

export{}