const gameRule = {
    key: 'gameRule',
    preload: function(){
        // 載入資源

        //背景
        this.load.image('bg', 'images/bg/bg.svg');
        this.load.image('table', 'images/bg/table.svg');
        this.load.image('btnStart', 'images/bg/btn_start.svg');
       
        this.load.image('ruleBg', 'images/bg/board_rule.svg');
        this.load.image('btnMenu', 'images/bg/btn_back.svg');
        


    },
    create: function(){
        // 資源載入完成，加入遊戲物件及相關設定

       
        //設定背景位置
        this.bg = this.add.tileSprite(640, 400, 1280, 800, 'bg');
        
        //規則說明
        this.ruleBg = this.add.sprite(650, 450, 'ruleBg');
        
        //回主選單
        let btnMenu = this.add.sprite(1080,700,'btnMenu');
        btnMenu.setInteractive();
        btnMenu.on('pointerdown', () => this.scene.start('gameStart'))
        this.startText = this.add.text(960,650, `主選單`, { fontSize: '70px', fill: '#FFFFFF',fontFamily: 'Noto Sans TC', })

    },
    update: function(){
        // 遊戲狀態更新

        
    }
}