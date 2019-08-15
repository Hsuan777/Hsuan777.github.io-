const getRandom = (max, min) =>{
    return Math.floor(Math.random() * (max - min)) + min;
};


const gamePlay = {
    key: 'gamePlay',
    preload: function(){
        // 載入資源

        //背景
        this.load.image('bg', 'images/bg/bg.svg');
        this.load.image('btnMenu', 'images/bg/btn_back.svg');
        this.load.image('table', 'images/bg/table.svg');
        //主角
        this.load.image('ghost_left', 'images/ghost_normal_left.svg');
        // this.load.image('ghost_right', 'images/ghost_normal_right.svg');
        this.load.spritesheet('ghost_right', 'images/ghost_normal_right.svg',{frameWidth: 250, frameHeight: 220});
        //同伴
        this.load.image('ghost_hungry','images/ghost_hungry.svg');
        //掉落資源
        this.load.image('food1', 'images/obj/apple.svg');
        this.load.image('food2', 'images/obj/chicken.svg');
        this.load.image('food3', 'images/obj/rice.svg');
        this.load.image('food4', 'images/obj/orange.svg');
        
        this.load.image('errorfood1', 'images/obj/flower.svg');
        this.load.image('errorfood2', 'images/obj/fruit.svg');

        this.load.image('specialItem', 'images/obj/papermoney.svg')

        this.gameStop = false; 
        this.TimeStep = 90;//遊戲時間
        this.score=0;//分數累計
        
        


    },
    create: function(){
        // 資源載入完成，加入遊戲物件及相關設定

        //設定背景位置
        this.bg = this.add.tileSprite(640, 400, 1280, 800, 'bg');

        // 左邊遊戲計時位置
        this.table__left = this.add.sprite(50, 750, 'table');
        this.timeText = this.add.text(50, 720, `TIME: ${this.TimeStep}`, { fontSize: '28px', fill: '#FFFFFF' })
        let gametime = setInterval(()=>{
            this.TimeStep--;
            //重新設定文字
            this.timeText.setText(`TIME: ${this.TimeStep}`);
            if(this.TimeStep < 20 && this.TimeStep > 10 ){
                
            }else if(this.TimeStep < 10 && this.TimeStep > 0 ){
               
            }else if(this.TimeStep <= 0){
                //停止各種動作
                clearInterval(GeneratedFood);//時間歸零它還是會產生最後一次
                clearInterval(GeneratedErrorFood);//若使用pause()，雖然可以全部瞬間停止，但是選單不能按
                clearInterval(GeneratedspecialItem);
                clearInterval(gametime);
                this.partner.x=1500;

                //重新開始
                let btnRestart = this.add.sprite(760,500,'btnMenu');
                btnRestart.setInteractive();
                btnRestart.on('pointerdown', () => this.scene.restart());
                this.startText = this.add.text(640,460, `再拜一次!`, { fontSize: '55px', fill: '#FFFFFF' })
                //回主選單
                let btnMenu = this.add.sprite(760,700,'btnMenu');
                btnMenu.setInteractive();
                btnMenu.on('pointerdown', () => this.scene.start('gameStart'));
                this.startText = this.add.text(660,650, `主選單`, { fontSize: '65px', fill: '#FFFFFF' })

                this.player.x=450;
                this.thankyouText = this.add.text(100,300, `嗚嗚嗚嗚謝謝你讓我吃飽! 我可以安心地回去了! (嗝~)`, { fontSize: '42px', fill: 'black',})
                
            }
        }, 1000);

        //右邊分數計算位置
        this.table__right = this.add.sprite(1250, 750, 'table');
        this.scoreText = this.add.text(1080,720, "Score: 0", { fontSize: '28px', fill: '#FFFFFF' })
        // 碰撞時銷毀

        //夥伴出來搶食
        const hitDestroy = (partner, food)=>{
            //若被花碰到回到原本位置
            if (food==this.errorfood1) {
                this.partner.x=1500;
            }
            food.destroy();//destroy()碰撞直接消失

            // food.disableBody(true,true);//碰撞後只消失圖樣，區塊還在
        }
        //食物增加分數
        let hitScore = (player,food)=>{
            //碰到時分數累計
            this.score+=20;

            // 判斷有問題，時好時壞，待改善
            // switch(food){
            //     case this.food1:
            //     this.score+=10;
            //     console.log("平平安安");
                
            //         break;
            //     case this.food2:
            //     this.score+=50;
            //     console.log("吃雞囉!");

            //         break;
            //     case this.food3:
            //     this.score+=30;
            //      console.log("吃飽飽!");

            //         break;
            //     case this.food4:
            //     this.score+=10;
            //     console.log("大吉大利!");     
            //         break; 
            // };
            if (food==this.specialItem) {
                // this.errorfood1Text.destroy();
                this.player.setScale(0.7);
                this.partner.x=1500;
            }
            this.scoreText.setText("Score:"+this.score);
            food.destroy();
        }

        //食物不扣分數，但有特殊效果
        let errorScore1 =(player, food)=>{
            if (food==this.errorfood1) {
                //時好時壞
                // this.errorfood1Text = this.add.text(200,400, `驅邪避煞!`, { fontSize: '85px', fill: 'black' })
                this.player.setScale(0.2);
            }
            food.destroy();
        };
        let errorScore2 =(player, food)=>{
            if (food==this.errorfood2) {
                this.partner.x -=200;
                    if (this.partner.x==-300) {
                    this.partner.x=1500;
                };
            // food.destroy();
        };    


            //若使用switch方式，要消除文字就必須用setText，若使用if判斷，要讓文字消失得用destroy()，否則會報錯，待修正

            // switch(food){
            //     case this.errorfood1:
            //         this.errorfood1Text = this.add.text(200,400, `驅邪避煞!`, { fontSize: '85px', fill: 'black' })
            //         this.player.setScale(0.2);
            //     case this.errorfood2:
                   
            //         break;
            // };
        }

        
        //人物位置
        this.player = this.physics.add.sprite(650, 650, 'ghost_right');
        // this.player.setCollideWorldBounds(true); //角色邊界限制，不會往下掉
        
        //同伴位置
        this.partner = this.physics.add.sprite(1500, 400, 'ghost_hungry');
        // this.partner2 = this.physics.add.sprite(1280, 600, 'ghost_hungry');
        
        //人物顯示大小
        this.player.setScale(0.8);
        this.partner.setScale(0.6);
         

        // 被加入物理效果的物件是否接受效果
        const addPhysics = GameObject =>{
            this.physics.add.existing(GameObject);
            GameObject.body.immovable = true;
            GameObject.body.moves = false;
        }
        addPhysics(this.player);
        addPhysics(this.partner);

        //設定角色碰撞邊界
        // this.player.setSize(260, 226);
        
        // 掉落資源初始位置
        const foodPos = [
                    {name: 'food1', x: 0, y: -1000, },
                    {name: 'food2', x: 0, y: -1000 ,},
                    {name: 'food3', x: 0, y: -1000,},
                    {name: 'food4', x: 0, y: -1000,},
                ]
        const errorfoodPos = [
                    {name: 'errorfood1', x: 0, y: -1000, },
                    {name: 'errorfood2', x: 0, y: -1000 ,},
                ]
        const specialItemPos = [
                    {name: 'specialItem', x: 0, y: -1000, },
                    
                ]
                

        //隔秒產生食物
        let GeneratedFood = setInterval(()=>{
            // 產生3個食物 
            for (let i = 0; i < 3; i++) {
                let foodIdx = getRandom(4, 0);
                // 隨機產生掉落位置，從上方-1000開始，隨機產生x值y值
                let foodx = getRandom(1000,100);
                let foody = getRandom(700,0);
               
                this['food'+ (foodIdx+1)] = this.physics.add.sprite(foodPos[foodIdx].x+foodx, foodPos[foodIdx].y+foody, foodPos[foodIdx].name);
                this['food'+ (foodIdx+1)].setScale(0.6);
                
                this.physics.add.collider(this.player, this['food'+(foodIdx+1)], hitScore);
                this.physics.add.collider(this.partner, this['food'+(foodIdx+1)], hitDestroy);

                
            }
        },1000);

        //隔秒產生錯誤食物
        let GeneratedErrorFood = setInterval(()=>{
            
            for (let i = 0; i < 1; i++) {
                let errorfoodIdx = getRandom(2, 0);
                let errorfoodx = getRandom(1000,100);
                let errorfoody = getRandom(700,0);
               
                this['errorfood'+ (errorfoodIdx+1)] = this.physics.add.sprite(errorfoodPos[errorfoodIdx].x+errorfoodx, errorfoodPos[errorfoodIdx].y+errorfoody, errorfoodPos[errorfoodIdx].name);
                this['errorfood'+ (errorfoodIdx+1)].setScale(0.6);
                
                //取消指定作用function就會產生穿透的效果不會有任何作用，但要如何刪除?
                this.physics.add.collider(this.player, this.errorfood1, errorScore1);
                this.physics.add.collider(this.player, this.errorfood2, errorScore2);
                //錯誤食物相撞時也會消失
                this.physics.add.collider(this.partner, this['errorfood'+(errorfoodIdx+1)], hitDestroy);
                
                
            }
        },3000);

        //隔秒產生特殊食物
        let GeneratedspecialItem = setInterval(()=>{
                let specialItem__x = getRandom(1000,100);
                let specialItem__y = getRandom(700,0);
               
                this.specialItem = this.physics.add.sprite(specialItemPos[0].x+specialItem__x, specialItemPos[0].y+specialItem__y, specialItemPos[0].name);
                this.specialItem .setScale(0.6);
                
                this.physics.add.collider(this.player,this.specialItem, hitScore);
                
        },5000);

    },
   


    update: function(){
        // 遊戲狀態更新

        // 啟動鍵盤事件
        let cursors = this.input.keyboard.createCursorKeys();
        if (cursors.right.isDown) {
            // this.player.setVelocityX(200); //需要被加入物理效果，setVelocityX與物理效果連動
            this.player.x += 20;//可以增加移動速度
            this.player.flipX = false;
        } else if (cursors.left.isDown) {
            
            this.player.x += -20;
            this.player.flipX = true;
        } else {
            this.player.flipX = false;
        }
        
        //遊戲暫停 this.scene.pause();
        //重新開始 this.scene.restart();
        

       
    }
}

//參考來源
//成老師的遊戲開發超入門
//https://medium.com/@Mike_Cheng1208/phaser-js-%E7%9A%842d%E9%81%8A%E6%88%B2%E9%96%8B%E7%99%BC%E5%85%A5%E9%96%80-part-1-df1b587927ef
//網路文章



