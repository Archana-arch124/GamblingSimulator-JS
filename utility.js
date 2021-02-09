class Utility{

    dailyStake = 100;
    everyDayBet = 1;
    Day=1;
    check_WinORLose = () => {
        return Math.floor(Math.random()* 2);
    }    

    main_Simulation = () => {
        
        while(this.Day <= 20){

            var winStake = 100;
            var lostStake = 100;

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
            let winAmount = winStake - this.dailyStake;
            let lostAmount= this.dailyStake - lostStake;
            console.log(` \n  Day: ${this.Day}, Win Amount : ${winAmount}, Lost Amount : ${lostAmount}`);  
            this.Day = this.Day+1;
}
}
}

module.exports = new Utility();
