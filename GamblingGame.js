let readlineSync = require('readline-sync');
let game = require('./Utility');

game.gamble();
game.luckyDay();
game.unLuckyDay();

if (readlineSync.keyInYN('Do you want to play again')) {
    game.gamble();
    game.luckyDay();
    game.unLuckyDay();
} else {
    console.log('Thank you For Playing!!');
}