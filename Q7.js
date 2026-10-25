class  invalidAgeError extends Error{

    constructor(message){
        super(message);
        this.name="invalidAgeError"
    }

}

function checkage(age){

    if(age<=18){

        throw new invalidAgeError("age must be 18 above")

    }

    console.log("your eligiable");
    
}

try{

    checkage(10);

}catch(error){
    console.log(error.name+" "+ error.message);
    
}