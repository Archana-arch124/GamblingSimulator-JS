class Utility{

    dailyStake = 100;
    everyDayBet = 1;
    
    check_WinORLose = () => {
        return Math.floor(Math.random()* 2);
    }    

    main_Simulation = () => {
        while(this.dailyStake != 150 && this.dailyStake != 50) {

        let Result = this.check_WinORLose();

            if(Result == 1) {
                this.dailyStake += 1;
                console.log(`\n  GAMBLER WINS `)
            }
            if(Result == 0) {
                this.dailyStake -= 1;
                console.log(`\n  GAMBLER LOOSE `)
            }
    }
    if(this.dailyStake == 150)
    console.log(`\n  Gambler Win 50% Of Stake!!`);
else   
    console.log(`\n  Gambler Loose 50% Of Stake!!`);
}
}

module.exports = new Utility();
