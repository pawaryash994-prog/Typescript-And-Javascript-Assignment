class bankaccount {

    constructor(bankholder,balance){

        this.bankholder=bankholder;
        this.balance=balance;
    }

    deposit(amount){

        if(amount<=0){
            console.log("enter valid amount");
            return
        }

        this.balance +=amount;
        console.log("Deposit"+amount);
        
    }

    withdraw(amount){

        if(amount<=0){
            console.log("enter valid amount");
        }else if(amount > this.balance){
            console.log("insufficient balance");
            
        }else{
            this.balance -=amount;
            console.log("withdraw"+amount);
            
        }
    }

    checkbalance(){
        console.log("current balance"+this.balance);
    }

}

const account = new bankaccount("yash",50000);

account.checkbalance()

account.deposit(10000);
account.withdraw(5000);

account.checkbalance()