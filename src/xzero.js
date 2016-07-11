module.exports = {
    register: register,
    status: status,
    move: move
};

var players = [];
var games=[];
var gameApi={
    player1:'Viorel',
    player2:'Andra',
    player:'Andra',
    stare:'1,1'
}
var stateOprions=['init'];//deschidere joc
setInterval(function () {
    for (var index = players.length; index--;) {
        var date = new Date();
        if (date.getTime() - players[index].date.getTime() > 5000) { // au trecut mai mult de 5 sec de la ultimul ping
            console.warn(players[index].name + ' removed from list ...');
            players.splice(players[index], 1);
        }
    }
}, 5000);

function* register() {
    var player = this.query.player;
    if (player) {
        var foundPlayer = undefined;
        players.forEach((item) => {
            if (item.name === player) foundPlayer = item;
        });
        if (foundPlayer) foundPlayer.date = new Date();
        else {
            console.info(player + ' added to list ...');
            players.push({ name: player, date: new Date() });
        }
        this.body = players;
    } else {
        this.body = [{ name: "Alege un name de jucator !", date: new Date() }];
    }
}
function* move(){
    var move={
        player1:'Viorel',
}
}

function* status() {
    //this.body = players;
    var userGames=[];
    game.forEach((game)=>{
            if((game.player1===this.query.player||game.player2==this.query.player)&&(game.player!==this.query.player))
                userGames/push(game);
    });
        this.body = {players:players,
            games:userGames
        };

    var player = this.query.player;
    players.forEach((item) => {
        if (item.name === player)
            item.date = new Date();
            //jocurile, ultimele mutari etc
    });
}

function* createNewGame(){
//adauga in lista de jocurile inca o partida
// notifica oponentul ca a re un joc in asteptrare atunci cand cere noul status
console.log('player='+this.query.playerName+'a initiat'+this.query.oponent);
games.push({ player1:query.playerName,
    player2:query.oponent,
    player:query.playerName,
    stare:'init'});
}
