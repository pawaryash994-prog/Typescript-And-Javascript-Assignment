function checknumber(num){

    return new Promise((resolve,reject)=>{
        setTimeout(()=>{

            if(num >0){
                resolve("postive no")
            }else{
                reject("negative no")
            }
        }, 1000)
    })
}

checknumber(10)

    .then(message =>{
        console.log(message);
        
    })
    .catch(error =>{
        console.log(error);
        
    })