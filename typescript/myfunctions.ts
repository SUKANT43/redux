function addTwo(num:number):number{
    return num+2;
}

addTwo(5);

const heros=[1,2,3];

heros.map((h):string=>{
    return "hero is"+h;
});

function fail(msg:string):never{
    throw new Error(msg);
}

export{}