//------開始取牌---------//

//取13個數字隨機排列不重複
var num13_A = [];
var num13_B = [];
var num13_C = [];
var num13_D = [];

//不會有0
function random(x){
	return Math.floor(Math.random()*x)+1;
}
//1~13不重複
//indexOf，若有不存在的會回傳-1 ，若他等於-1則為true，會一直重複do{}
//while(布林代數){ }，若條件為true，則重複
//do{} while{布林代數}，若條件為true，則重複do{}
function radomNumber(item){
	for (var i = 0; i < 13; i++) {
	var rdm=0;
		do{	
			var exist =false;
			rdm=random(13);
			if (item.indexOf(rdm)	!=-1) {
			exist=true;
			}
		}while(exist);
	item[i]=rdm;
	}
}
radomNumber(num13_A);
radomNumber(num13_B);
radomNumber(num13_C);
radomNumber(num13_D);

//產生正常分類的52張牌
var num52 = [
	{
		//這是範例
		// numClass:"黑桃",
		// num:8,
		// numColor:"black",
	},
];
for (var i = 0; i < 13; i++) {
	num52[i]={};
	num52[i].numClass="clover";//方塊
	num52[i].num=num13_A[i];
	num52[i].numColor="red";
	num52[i+13]={};
	num52[i+13].numClass="spades";//黑桃
	num52[i+13].num=num13_B[i];
	num52[i+13].numColor="black";
	num52[i+26]={};
	num52[i+26].numClass="heart";
	num52[i+26].num=num13_C[i];
	num52[i+26].numColor="red";
	num52[i+39]={};
	num52[i+39].numClass="diamond";//梅花
	num52[i+39].num=num13_D[i];
	num52[i+39].numColor="black";

}
console.log(num52);

//會有0
function randomZero(x){
	return Math.floor(Math.random()*x);
}
//隨機0~51不重複，作為隨機取牌
function radomNumberZero(item){
	for (var i = 0; i < 52; i++) {
	var rdm=0;
		do{	
			var exist =false;
			rdm=randomZero(52);
			if (item.indexOf(rdm)	!=-1) {
			exist=true;
			}
		}while(exist);
	item[i]=rdm;
	}
}
//從num52重新取出
var newNum52Index =[];
var newNum52 =[];
radomNumberZero(newNum52Index);
for (var i = 0; i < newNum52Index.length; i++) {
	newNum52[i]=num52[newNum52Index[i]];
}
//產生打亂的52牌
console.log(newNum52);

// dragSources[0].innerHTML=
// 	"<img src='images/新接龍_"+newNum52[0].numClass+newNum52[0].num+".svg' alt=''>";

// for (var i = 0; i < 52; i++) {
// 	dragSources[i].innerHTML=
// 	"<img draggable='false'"+"src='images/新接龍_"+newNum52[i].numClass+newNum52[i].num+".svg' alt=''>";
// }//陣列得轉字串
//img 本身可以拖曳，故設為draggable="false"

//52張牌塞進去陣列
var cardbox_1__Arr=[];
var cardbox_2__Arr=[];
var cardbox_3__Arr=[];
var cardbox_4__Arr=[];
var cardbox_5__Arr=[];
var cardbox_6__Arr=[];
var cardbox_7__Arr=[];
var cardbox_8__Arr=[];

for (var i = 0; i < 7; i++) {
	cardbox_1__Arr[i] = newNum52[i];
}
for (var i = 0; i < 7; i++) {
	cardbox_2__Arr[i] = newNum52[i+7];
}
for (var i = 0; i < 7; i++) {
	cardbox_3__Arr[i] = newNum52[i+14];
}
for (var i = 0; i < 7; i++) {
	cardbox_4__Arr[i] = newNum52[i+21];
}
for (var i = 0; i < 6; i++) {
	cardbox_5__Arr[i] = newNum52[i+28];
}
for (var i = 0; i < 6; i++) {
	cardbox_6__Arr[i] = newNum52[i+34];
}
for (var i = 0; i < 6; i++) {
	cardbox_7__Arr[i] = newNum52[i+40];
}
for (var i = 0; i < 6; i++) {
	cardbox_8__Arr[i] = newNum52[i+46];
}


var cardbox_1 =document.querySelector('#cardbox_1');
var cardbox_2 =document.querySelector('#cardbox_2');
var cardbox_3 =document.querySelector('#cardbox_3');
var cardbox_4 =document.querySelector('#cardbox_4');
var cardbox_5 =document.querySelector('#cardbox_5');
var cardbox_6 =document.querySelector('#cardbox_6');
var cardbox_7 =document.querySelector('#cardbox_7');
var cardbox_8 =document.querySelector('#cardbox_8');

cardList(cardbox_1__Arr,cardbox_1);
cardList(cardbox_2__Arr,cardbox_2);
cardList(cardbox_3__Arr,cardbox_3);
cardList(cardbox_4__Arr,cardbox_4);
cardList(cardbox_5__Arr,cardbox_5);
cardList(cardbox_6__Arr,cardbox_6);
cardList(cardbox_7__Arr,cardbox_7);
cardList(cardbox_8__Arr,cardbox_8);

function cardList(item,item2){
	for (var i = 0; i < item.length; i++) {
	let cardImg = document.createElement('img');
	cardImg.setAttribute('id',item[i].numClass+item[i].num);
	cardImg.setAttribute('src','images/'+item[i].numClass+item[i].num+'.svg');
	cardImg.setAttribute('alt','');
	cardImg.setAttribute('draggable','false');
	cardImg.setAttribute('class','card cardList-'+(i+1));
	item2.appendChild(cardImg);
	}
}

//判斷該陣列的最後一張可拖曳，或許可以寫一個判斷目前位置，或許可以用slice
function dragLastCard(){
	var cardboxALL = document.querySelectorAll('.cardbox');
	for (var i = 0; i < cardboxALL.length; i++) {
		cardboxALL[i].lastChild.draggable=true;
	}
}
dragLastCard();

//下方資源區
//判斷順序遞減，且只有最後一張可拖曳

//左邊暫存區
//判斷長度是否等於1，若為1則禁止drop
// if (.length){return}


//右邊完成區
//判斷花色是否相同，數字是否順序遞增 


//------觸發拖曳---------//

var sourceContainerId = "";

// 讓物件允許拖曳，draggable="true"，讓它成為函數，每次drop後刷新
function draggableTure(){
	var dragSources = document.querySelectorAll('[draggable="true"]');
	dragSources.forEach(dragSource => {
	  dragSource.addEventListener('dragstart', dragStart);
	  dragSource.addEventListener("dragend", dragEnd);
	});
}
draggableTure();


//針對"物件"
function dragStart (e) {
  console.log('觸發dragstart');
  //觸發時"加入"class
  this.classList.add('dragging');
  e.dataTransfer.setData('text/plain', e.target.id);
  sourceContainerId = this.parentElement.id;//父元素ID
}

//針對"物件"
function dragEnd(e){
	//觸發時"移除"class
	console.log('觸發dragend，滑鼠或按鍵放掉');
	this.classList.remove('dragging');
}

//*******************************************************//

// Allow multiple dropped targets
let dropTargets = document.querySelectorAll(
	'[data-role="drag-drop-container"]'
);

dropTargets.forEach(dropTarget => {
  dropTarget.addEventListener('drop', dropped);
  dropTarget.addEventListener('dragenter', cancelDefault);
  //dropTarget.addEventListener('dragover', cancelDefault)
  //改為dragOver 就無法拖曳? 在dragOver()裡面加入cancelDefault()
  dropTarget.addEventListener('dragover', dragOver);
  dropTarget.addEventListener('dragleave', dragLeave);
});

//針對"容器"
function dropped (e) {
	if (this.id !==sourceContainerId) {//若父元素ID不相等
		console.log('觸發drop，已放入目標位置');
	  cancelDefault(e);
	  let id = e.dataTransfer.getData('text/plain');
	  console.log(e.dataTransfer);
	  e.target.appendChild(document.querySelector('#' + id));
	  //可以針對目標容器，也可以讓物件暫時成為容器
	  this.classList.remove('hover');
	} 
	dragLastCard();
	draggableTure();

}

function dragOver(e){
	//為何不阻止就無法放入?
	cancelDefault(e);
	//若使用'dragenter'，則進入目標時才觸發，可以改為dragenter觸發
	//因為dragover有點頻繁
	console.log("觸發dragover，連續觸發")
	this.classList.add('hover');

}

function dragLeave(e){
	console.log("觸發dragleave，離開目標位置時")
	this.classList.remove('hover');
}

//阻止原本要觸發的事件，例如連結、button，也阻止事件冒泡
function cancelDefault (e) {
  //為什麼停止預設事件才能放入	，幾乎所有元素都禁止drop事件
  //所需要取消默認事件
  e.preventDefault();
  //阻止事件冒泡
  e.stopPropagation();
  return false;
}
