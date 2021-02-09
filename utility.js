class Utility{

    dailyStake = 100;
    everyDayBet = 1;
    
    check_WinORLose = () => {
        return Math.floor(Math.random()* 2);
    }    

    main_Simulation = () => {

        let Result = this.check_WinORLose();

            if(Result == 1) {
                this.dailyStake += 1;
                console.log(`\n  GAMBLER WINS `)
            }
            if(Result == 0) {
                this.dailyStake -= 1;
                console.log(`\n  GAMBLER LoOSE `)
            }
    }
}

module.exports = new Utility();
