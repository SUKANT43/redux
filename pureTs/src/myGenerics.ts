const score: Array<number>=[];

function identityOne(val: boolean | number): boolean | number{
    return val
}

function identityTwo(val: any):any{
    return val
}


function identityThree<Type>(val:Type):Type{
    return val;
}

function indentityFour<T>(va:T):T{
    return va;
}


interface Bootle{
    brand:string,
    type:number,
}



indentityFour<Bootle>({brand:"s",type:2});


function getSearchProducts<T>(products:T[],name:string):T|undefined{
    return products[3];
}


const getMoreSearchProducts=<T,>(products:T[]):T|undefined=>{
    return products[0];
}


interface Database{
    connection:string,
    userName:string,
    password:string
}

function anotherFunction<T,U extends Database>(valueOne:T,valueTwo:U):object{
    return{
        valueOne,
        valueTwo
    }
}

interface Quiz{
    name:string,
    type:string
}

interface Course{
    name:string,
    author:string,
    subject:string
}


class Sellable<T>{
    public cart:T[]=[]
    
}

function logValue(x:Date|string){
    if(x instanceof Date){//it checks it is instnce or a just a vaue

    }
    else{

    }
}

