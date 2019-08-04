// **初始化**
// 資料儲存 -> 陣列
// 監聽事件 -> 陣列 
// 介面輸出 <- 陣列

// **事件改變介面** 
// 事件改變陣列資料 ->刷新陣列資料 ->輸出介面

// **功能** **jplaly
// 上一首 ->觸發click事件 click,previous()
// 倒帶 -> 觸發click事件 
// Paly / Pause -> 觸發click,start()事件，click,pause()事件 ->時間開始，時間暫停
// 快進 -> 觸發click事件
// 下一首 -> 觸發click事件 click,next()
// 拖動音樂時間軸 -> 點擊? 拖曳?
// 音量控制 -> 觸發瀏覽器的PC音量
// 單曲重複播放 / 隨機播放 ->亂數選擇? / 清單重複播放
// 廣告機制 ->隨機在音樂結束切換時，顯示佔板廣告，引導訂閱


// **歌曲清單**
// 音樂來源? 本機資源? 線上資源?
// 每張專輯 [{歌曲資訊},{歌曲資訊}]
// 清單[]，1.[不同專輯[{}],不同專輯[{}],]提出 2.清單[整張專輯[],整張專輯[],]
// JSON 陣列與字串轉換


//專輯資訊
// var Album =[
// 	{
// 		name:'The Beatles',

// 	},
// 	{
// 		songName:'Hey Jude',
// 		songTime:'7:11',
// 	},
// 	{
// 		songName:'Hey Jude',
// 		songTime:'7:11',
// 	}

// ];

// //撥放清單
// var songList=[];

//***********************************************************


$(document).ready(function(){
	// $("#MPlayer").jPlayer({
	//    	ready: function () {
	// 	    $(this).jPlayer("setMedia", {
	// 	    	title: "Bubble",
	// 	    	mp3: "http://106.15.195.250:3000/musics/nonxi.mp3"
	// 	    });
	//    	},
	//    	ended: function() { // The $.jPlayer.event.ended event
	// 	    $(this).jPlayer("play"); // Repeat the media
	// 	},
	//  	cssSelectorAncestor:"#MPlayer__container", 
	//   	supplied: "m4a, oga, mp3",//支援格式
	// 	wmode: "window",//預設模式
	// 	useStateClassSkin: true,//狀態加入class，例如撥放與靜音
	// 	autoBlur: false,//自動失去焦點
	// 	smoothPlayBar: true,//平滑過渡播放條
	// 	keyEnabled: true,
	// 	remainingDuration: true,//剩餘播放時間
	// 	toggleDuration: true//允許切換剩餘播放時間 3:00 <->-3:00
	// });
	
	
	
	//預設playList
	var myPlaylist = new jPlayerPlaylist(
		{
			jPlayer: "#MPlayer",
			cssSelectorAncestor: "#MPlayer__container",
		}, 
		[
			
			{
				title:"Cro Magnon Man",
				artist:"The Stark Palace",
				mp3:"http://www.jplayer.org/audio/mp3/TSP-01-Cro_magnon_man.mp3",
				poster: "images/a3033784335_16.jpg",
				
			},
			{
				title:"Your Face",
				artist:"The Stark Palace",
				mp3:"http://www.jplayer.org/audio/mp3/TSP-05-Your_face.mp3",
				poster: "images/a3033784335_16.jpg",
			},
			{
				title:"Cyber Sonnet",
				artist:"The Stark Palace",
				mp3:"http://www.jplayer.org/audio/mp3/TSP-07-Cybersonnet.mp3",
				poster: "images/a3033784335_16.jpg"
			},
			{
				title:"Tempered Song",
				artist:"Miaow",
				mp3:"http://www.jplayer.org/audio/mp3/Miaow-01-Tempered-song.mp3",
				poster: "images/maxresdefault-1.jpg"
			},
			{
				title:"Hidden",
				artist:"Miaow",
				mp3:"http://www.jplayer.org/audio/mp3/Miaow-02-Hidden.mp3",
				poster: "images/maxresdefault-1.jpg"
			},
			{
				title:"Lentement",
				mp3:"http://www.jplayer.org/audio/mp3/Miaow-03-Lentement.mp3",
				poster: ""
			},
			{
				title:"Lismore",
				mp3:"http://www.jplayer.org/audio/mp3/Miaow-04-Lismore.mp3",
				poster: ""
			},
			{
				title:"The Separation",
				mp3:"http://www.jplayer.org/audio/mp3/Miaow-05-The-separation.mp3",
			},
			{
				title:"Beside Me",
				mp3:"http://www.jplayer.org/audio/mp3/Miaow-06-Beside-me.mp3",
				poster: ""
			},
			{
				title:"Bubble",
				artist:"Miaow",
				mp3:"http://www.jplayer.org/audio/mp3/Miaow-07-Bubble.mp3",
				poster: "images/maxresdefault-1.jpg"
			},
			{
				title:"Stirring of a Fool",
				mp3:"http://www.jplayer.org/audio/mp3/Miaow-08-Stirring-of-a-fool.mp3",
				poster: ""
			},
			{
				title:"Partir",
				mp3:"http://www.jplayer.org/audio/mp3/Miaow-09-Partir.mp3",
				poster: ""
			},
			{
				title:"Thin Ice",
				mp3:"http://www.jplayer.org/audio/mp3/Miaow-10-Thin-ice.mp3",
				poster: ""
			}
		], 
		{
			cssSelectorAncestor:"#MPlayer__container", 
		  	supplied: "m4a, oga, mp3",//支援格式
			wmode: "window",//預設模式
			useStateClassSkin: true,//狀態加入class，例如撥放與靜音
			autoBlur: false,//自動失去焦點
			smoothPlayBar: true,//平滑過渡播放條
			keyEnabled: true,
			remainingDuration: false,//剩餘播放時間
			toggleDuration: true,//允許切換剩餘播放時間 3:00 <->-3:00
			playlistOptions: {
				enableRemoveControls: false,//移除列表歌曲
				// displayTime: 'slow',
				// addTime: 'fast',
			},
			useStateClassSkin: true,

			
			play: function(e) {
				var jpAritist = e.jPlayer.status.media.artist;
				var jpPoster = e.jPlayer.status.media.poster;
			    $('.aside .albumName .jp-artist').text(jpAritist);
			    $('.albumImg img').attr('src',jpPoster);
			    $('.aside  .albumImg__main').attr('src',jpPoster);
			    
			    
			},
			loadeddata: function(e){ // calls after setting the song duration
            	var songDuration = e.jPlayer.status.duration;
            	var jpArtist = e.jPlayer.status.media.artist;
            	var jpPoster = e.jPlayer.status.media.poster;
            	$('.aside .albumName .jp-artist').text(jpArtist);
            	$('.album .jp-artist').text(jpArtist);
            	$('.albumImg img').attr('src',jpPoster);
            	$('.aside .albumImg__main').attr('src',jpPoster);
            	console.log(songDuration);
            	console.log(jpArtist);
            	console.log(e.jPlayer);
            	console.log(typeof(jPlayerPlaylist));
          		console.log(e.jPlayer.status.media.time);
        	},

			
		} 

	);
	//**其他專輯 Audio mix playlist**	
	$(".MyFavorite #playlist-setPlaylist-audio-mix .addList").click(function() {
		console.log("YA!");
		myPlaylist.setPlaylist([
			{
				title:"Cro Magnon Man",
				artist:"The Stark Palace",
				mp3:"http://www.jplayer.org/audio/mp3/TSP-01-Cro_magnon_man.mp3",
				oga:"http://www.jplayer.org/audio/ogg/TSP-01-Cro_magnon_man.ogg",
				poster: "http://www.jplayer.org/audio/poster/The_Stark_Palace_640x360.png"
			},
			{
				title:"Your Face",
				artist:"The Stark Palace",
				mp3:"http://www.jplayer.org/audio/mp3/TSP-05-Your_face.mp3",
				oga:"http://www.jplayer.org/audio/ogg/TSP-05-Your_face.ogg",
				poster: "http://www.jplayer.org/audio/poster/The_Stark_Palace_640x360.png"
			},
			{
				title:"Hidden",
				artist:"Miaow",
				
				mp3:"http://www.jplayer.org/audio/mp3/Miaow-02-Hidden.mp3",
				oga:"http://www.jplayer.org/audio/ogg/Miaow-02-Hidden.ogg",
				poster: "http://www.jplayer.org/audio/poster/Miaow_640x360.png"
			},
			{
				title:"Cyber Sonnet",
				artist:"The Stark Palace",
				mp3:"http://www.jplayer.org/audio/mp3/TSP-07-Cybersonnet.mp3",
				oga:"http://www.jplayer.org/audio/ogg/TSP-07-Cybersonnet.ogg",
				poster: "http://www.jplayer.org/audio/poster/The_Stark_Palace_640x360.png"
			},
			{
				title:"Tempered Song",
				artist:"Miaow",
				mp3:"http://www.jplayer.org/audio/mp3/Miaow-01-Tempered-song.mp3",
				oga:"http://www.jplayer.org/audio/ogg/Miaow-01-Tempered-song.ogg",
				poster: "http://www.jplayer.org/audio/poster/Miaow_640x360.png"
			},
			{
				title:"Lentement",
				artist:"Miaow",
				mp3:"http://www.jplayer.org/audio/mp3/Miaow-03-Lentement.mp3",
				oga:"http://www.jplayer.org/audio/ogg/Miaow-03-Lentement.ogg",
				poster: "http://www.jplayer.org/audio/poster/Miaow_640x360.png"
			}
		]);
	});
	
	//**其他專輯 Media mix playlist**	
	$("#playlist-setPlaylist-media-mix .addList").click(function() {
		myPlaylist.setPlaylist([
			{
				title:"Cro Magnon Man",
				artist:"The Stark Palace",
				mp3:"http://www.jplayer.org/audio/mp3/TSP-01-Cro_magnon_man.mp3",
				oga:"http://www.jplayer.org/audio/ogg/TSP-01-Cro_magnon_man.ogg",
				poster: "http://www.jplayer.org/audio/poster/The_Stark_Palace_640x360.png"
			},
			{
				title:"Your Face",
				artist:"The Stark Palace",
				mp3:"http://www.jplayer.org/audio/mp3/TSP-05-Your_face.mp3",
				oga:"http://www.jplayer.org/audio/ogg/TSP-05-Your_face.ogg",
				poster: "http://www.jplayer.org/audio/poster/The_Stark_Palace_640x360.png"
			},
			{
				title:"Hidden",
				artist:"Miaow",
				
				mp3:"http://www.jplayer.org/audio/mp3/Miaow-02-Hidden.mp3",
				oga:"http://www.jplayer.org/audio/ogg/Miaow-02-Hidden.ogg",
				poster: "http://www.jplayer.org/audio/poster/Miaow_640x360.png"
			},
			{
				title:"Big Buck Bunny Trailer",
				artist:"Blender Foundation",
				m4v:"http://www.jplayer.org/video/m4v/Big_Buck_Bunny_Trailer.m4v",
				ogv:"http://www.jplayer.org/video/ogv/Big_Buck_Bunny_Trailer.ogv",
				webmv: "http://www.jplayer.org/video/webm/Big_Buck_Bunny_Trailer.webm",
				poster:"http://www.jplayer.org/video/poster/Big_Buck_Bunny_Trailer_480x270.png"
			},
			{
				title:"Finding Nemo Teaser",
				artist:"Pixar",
				m4v: "http://www.jplayer.org/video/m4v/Finding_Nemo_Teaser.m4v",
				ogv: "http://www.jplayer.org/video/ogv/Finding_Nemo_Teaser.ogv",
				webmv: "http://www.jplayer.org/video/webm/Finding_Nemo_Teaser.webm",
				poster: "http://www.jplayer.org/video/poster/Finding_Nemo_Teaser_640x352.png"
			},
			{
				title:"Cyber Sonnet",
				artist:"The Stark Palace",
				mp3:"http://www.jplayer.org/audio/mp3/TSP-07-Cybersonnet.mp3",
				oga:"http://www.jplayer.org/audio/ogg/TSP-07-Cybersonnet.ogg",
				poster: "http://www.jplayer.org/audio/poster/The_Stark_Palace_640x360.png"
			},
			{
				title:"Incredibles Teaser",
				artist:"Pixar",
				m4v: "http://www.jplayer.org/video/m4v/Incredibles_Teaser.m4v",
				ogv: "http://www.jplayer.org/video/ogv/Incredibles_Teaser.ogv",
				webmv: "http://www.jplayer.org/video/webm/Incredibles_Teaser.webm",
				poster: "http://www.jplayer.org/video/poster/Incredibles_Teaser_640x272.png"
			},
			{
				title:"Tempered Song",
				artist:"Miaow",
				mp3:"http://www.jplayer.org/audio/mp3/Miaow-01-Tempered-song.mp3",
				oga:"http://www.jplayer.org/audio/ogg/Miaow-01-Tempered-song.ogg",
				poster: "http://www.jplayer.org/audio/poster/Miaow_640x360.png"
			},
			{
				title:"Lentement",
				artist:"Miaow",
				mp3:"http://www.jplayer.org/audio/mp3/Miaow-03-Lentement.mp3",
				oga:"http://www.jplayer.org/audio/ogg/Miaow-03-Lentement.ogg",
				poster: "http://www.jplayer.org/audio/poster/Miaow_640x360.png"
			}
		]);
	});


	
});

	$('.MPlayer__controls .play__bg').click(function() {
		$('.MPlayer__controls .play').toggleClass("pause");
		$('.aside .aside__play').toggleClass("aside__pause");

		$('.album .albumEdit').toggleClass("hidden");
		$('.albumImg').toggleClass("active");
		$('.songName').toggleClass('invisible');
		$('.album .albumImg__other').toggleClass("invisible");
	});

	$('.MPlayer__controls .jp-previous').click(function() {
		$('.MPlayer__controls .play').addClass("pause");
		$('.aside .aside__play').addClass("aside__pause");

		$('#status').text('Playing Now');
		$('.album .albumEdit').addClass("hidden");
		$('.albumImg').addClass("active");
		$('.songName').removeClass('invisible');
		$('.album .albumImg__other').addClass("invisible");
	});

	$('.MPlayer__controls .jp-next').click(function() {
		$('.MPlayer__controls .play').addClass("pause");
		$('.aside .aside__play').addClass("aside__pause");

		$('#status').text('Playing Now');
		$('.album .albumEdit').addClass("hidden");
		$('.albumImg').addClass("active");
		$('.songName').removeClass('invisible');
		$('.album .albumImg__other').addClass("invisible");
	});

	$('.jp-playlist').click(function() {
		$('.MPlayer__controls .play').addClass("pause");
		$('.aside .aside__play').addClass("aside__pause");

		$('#status').text('Playing Now');
		$('.album .albumEdit').addClass("hidden");
		$('.albumImg').addClass("active");
		$('.songName').removeClass('invisible');
		$('.album .albumImg__other').addClass("invisible");
	});
	
	$('.showmenu').click(function() {
		$('.aside').toggleClass('hidden');
		$('.aside').toggleClass('active');
		$('.album').toggleClass('invisible');
		jpPlaylistItem();
	});

	$('.aside .play__btn').click(function() {
		$('.aside .aside__play').toggleClass("aside__pause");
		$('.MPlayer__controls .play').toggleClass("pause");

		$('.album .albumEdit').toggleClass("hidden");
		$('.albumImg').toggleClass("active");
		$('.songName').toggleClass('invisible');
		$('.album .albumImg__other').toggleClass("invisible");
	});

	$('.addOtherList').click(function() {
		$('.aside .aside__play').removeClass("aside__pause");
		
	});

	// ad
	$('.back').click(function() {
		$('.subscribe').toggleClass('invisible');
		$('.subscribe').toggleClass('active');
	});
	$('.subscribe .close').click(function() {
		$('.subscribe').toggleClass('invisible');
		$('.subscribe').toggleClass('active');
	});

function statusPlayer (){
	let status=document.getElementById('status');
	if (status.textContent== "Playing Now"){
			status.textContent="Ready";
		}else{
			status.textContent="Playing Now";
		}
}
var playStatus = document.querySelector(".play__bg ");
playStatus.addEventListener('click',statusPlayer, false);

function jpPlaylistItem(){
	let jpPlaylistItem = document.querySelectorAll(".jp-playlist-item ");
	let jpPlaylistTotal= document.querySelector(".jpPlaylistTotal ");
	jpPlaylistTotal.textContent=jpPlaylistItem.length+" songs ・ 102 min";
	
	
	
}


