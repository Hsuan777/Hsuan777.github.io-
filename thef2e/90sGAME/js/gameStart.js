const gameStart = {
    key: 'gameStart',
    preload: function(){
        // 載入資源

        //背景
        this.load.image('bg', 'images/bg/bg.svg');
        this.load.image('table', 'images/bg/table.svg');
        this.load.image('btnStart', 'images/bg/btn_start.svg');
       
        //主角
        this.load.image('ghost_left', 'images/ghost_normal_left.svg');
        this.load.spritesheet('ghost_right', 'images/ghost_normal_right.svg',{frameWidth: 250, frameHeight: 220});
        
        //同伴
        this.load.image('ghost_hungry','images/ghost_hungry.svg');
        //掉落資源
        this.load.image('apple', 'images/obj/apple.svg');
        this.load.image('chicken', 'images/obj/chicken.svg');
        this.load.image('rice', 'images/obj/rice.svg');
        this.load.image('orange', 'images/obj/orange.svg');
        
        this.load.image('errorfood1', 'images/obj/flower.svg');
        this.load.image('errorfood2', 'images/obj/fruit.svg');

        this.load.image('specialItem', 'images/obj/papermoney.svg');
        this.load.image('flag', 'images/bg/flag.svg')
        var graphics;


    },
    create: function(){
        // 資源載入完成，加入遊戲物件及相關設定
        
        

        //CSS可以寫在這裡
        var titleStyle = {
            fontFamily: 'Noto Sans TC',
            fontSize: '70px',
            fill: '#FFFFFF',
        };

        //設定背景位置
        this.bg = this.add.tileSprite(640, 400, 1280, 800, 'bg');

        this.table__left = this.add.sprite(50, 750, 'table');
        this.food4 = this.add.sprite(200, 680, 'apple');
        this.food5 = this.add.sprite(100, 680, 'chicken');
        this.food6 = this.add.sprite(30, 750, 'orange');


        this.table__right = this.add.sprite(1250, 750, 'table');
        this.food2 = this.add.sprite(1150, 650, 'rice');
        this.food1 = this.add.sprite(1100, 670, 'rice');
        this.food3 = this.add.sprite(1200, 720, 'apple');

        let role = this.add.sprite(450, 350, 'specialItem');
        role.setInteractive();
        role.on('pointerdown', () => this.scene.start('gameRule'))

        this.scoreRank = this.add.sprite(750, 350, 'flag');

        let btnStart = this.add.sprite(640,650,'btnStart');
        btnStart.setInteractive();
        btnStart.on('pointerdown', () => this.scene.start('gamePlay'))
        
        //設定文字
        
        graphics = this.add.graphics();
        graphics.fillStyle(0xD13834, 1);
        //  32px radius on the corners 實際XY，圖形長寬，圓角px
        graphics.fillRoundedRect(370, 90, 530, 100, 32);
        this.titleText = this.add.text(370,80, `好兄弟美食大賽`, titleStyle).setPadding(20);

        this.startText = this.add.text(450,590, `大拜拜開始!`, { fontSize: '70px', fill: '#FFFFFF',fontFamily: 'Noto Sans TC', });

        this.ruleText = this.add.text(380,420, `規則說明`, { fontSize: '35px', fill: 'black',fontFamily: 'Noto Sans TC', })
        this.scoreRankText = this.add.text(690,420, `排行榜`, { fontSize: '35px', fill: 'black',fontFamily: 'Noto Sans TC', })

        //人物位置
        this.player = this.add.sprite(950, 480, 'ghost_left');
        this.partner =  this.add.sprite(1050, 280, 'ghost_hungry');
        // this.player.setCollideWorldBounds(true); //角色邊界限制，不會往下掉
    
        //人物顯示大小
        // this.player.setScale(0.6);
         
       
        

        
        
        

    }, 
    createText: function() {
        this.titleText.padding.set(50);
    },
    

    update: function(){
        // 遊戲狀態更新

        
    }
}

//參考資源
//圓角
// https://labs.phaser.io/edit.html?src=src\game objects \ graphics \ fill rounded rectangle.js
// https://labs.phaser.io/edit.html?src=src\game objects \ graphics \ stroke圓角矩形.js

//padding
// https://phaser.io/examples/v3/view/game-objects/text/static/text-padding