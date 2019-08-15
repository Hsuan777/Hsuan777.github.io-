const config = {
    type: Phaser.AUTO,
    width: 1280,
    height: 800,
    parent: 'ghostapp',
    backgroundColor: '#fff',
    fontFamily: "Noto Sans TC",
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {
                y: 250
            },
            // debug: true,
        },
    },
    scene: [
    	gameStart,
        gamePlay,
        gameRule,
    ]
}
const game = new Phaser.Game(config);
