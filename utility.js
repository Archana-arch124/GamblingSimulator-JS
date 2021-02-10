let stake = 100;
let totalWin = 0;
let totalLoss = 0;
const bett = 1;
const days = 20;
let stakeArr = [];

class Utility {
    gamble = () => {
        for (let day = 1; day <= days; day++) {
            let bet = Math.floor(Math.random() * 2);
            if (bet == bett) {
                stake++;
                stake = Math.floor(stake + (stake / 2));
                totalWin = totalWin + (stake / 2);
                stakeArr[day - 1] = stake;
                console.log("Player Wins" + "\tDay:" + day + "\tStake = " + stake);
            }
            else {
                stake--;
                stake = Math.floor(stake / 2);
                totalLoss = totalLoss + (stake / 2);
                stakeArr[day - 1] = stake;
                console.log("Player Loose" + "\tDay:" + day + "\tStake = " + stake);
            }
            if (stake <= 0) {
                console.log("\nOn Day" + day + " Player Resign for the day");
                break;
            }
           // stake += 100;
        }
        this.profitLoss();
    }
    profitLoss() {
        if (totalWin > totalLoss) {
            console.log("Total Amount Won By Player = " + (totalWin - totalLoss));
        }
        else {
            console.log("Total Amount Loose By Player = " + (totalLoss - totalWin));
        }
    }
    unLuckyDay() {
        let maxLoss = 0;
        let unLuckyDay = 0;
        for (let j = 0; j < stakeArr.length - 1; j++) {
            if (stakeArr[j] > stakeArr[j + 1]) {
                if ((stakeArr[j] - stakeArr[j + 1]) > maxLoss) {
                    maxLoss = Math.floor(stakeArr[j] - stakeArr[j + 1]);
                    unLuckyDay = j + 2;
                }
            }
        }
        console.log("Unluckiest Loss = " + maxLoss + "\nUnlucky Day " + unLuckyDay);
    }
    luckyDay() {
        let maxProfit = 0;
        let LuckyDay = 0;
        for (let j = 0; j < stakeArr.length - 1; j++) {
            if (stakeArr[j] < stakeArr[j + 1]) {
                if ((stakeArr[j + 1] - stakeArr[j]) > maxProfit) {
                    maxProfit = Math.floor(stakeArr[j + 1] - stakeArr[j]);
                    LuckyDay = j + 2;
                }
            }
        }
        console.log("luckiest Profit = " + maxProfit + "\nlucky Day " + LuckyDay);
    }
}

module.exports = new Utility;