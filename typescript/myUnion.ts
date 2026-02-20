let score:number | string|boolean=33;

score=44;
score="55";
score=true;


type User={
    name:string;
    id:number
}

type Admin={
    userName:string;
    id:number
}

let sukant:User | Admin={
    name:"sukant",
    id:23
}

sukant={userName:"qwe",id:12};


function getDbId(id:number|string){
    if(typeof id=="string"){
    console.log(id.toLowerCase());
    }
    if(typeof id=="number"){
        console.log(id+=2);
    }


}
const d1:number[]|string[]=[];

const d2:(number|string)[]=[];

let seatAllotment:"asile"|"middle"|"last"