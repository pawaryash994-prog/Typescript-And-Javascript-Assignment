class invalidAmountError extends Error{

    constructor(message){
        super(message)
        this.name="InvalidAmountError";
    }

}

class inSufficientbalancError extends Error{

    constructor(message){
        super(message)
        this.name="InSufficientBalanceError";
    }

}

function withdraw(balance, amount){

    if(amount<=0){
        throw new invalidAmountError("Amount must be greater than zero.");
    }

    if(amount >= balance){
        throw new inSufficientbalancError("Insufficient balance.");
    }
     console.log("Withdrawal successful.");

     console.log("remaining balance: "+ amount-balance);
     
}

try{
    withdraw(5000 ,6000)
}catch(error){
    
    if( error instanceof invalidAmountError){
        console.log("invalid amount: "+error.message);
        
    }else if(error instanceof inSufficientbalancError){
        console.log("balance error: "+error.message);
        
    }else{
        console.log("unexpexted balance: "+error.message);
        
    }
    
}