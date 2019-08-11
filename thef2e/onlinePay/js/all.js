$(document).ready(function(){
	//如果不取消，會造成提交時也一併送出
	function cancelRequired(){
		$('.payForm .payField__shop__Inf').find('input').prop({
			required: false,
			disabled: true,
		});
		$('.payForm .payField__ATM__Inf').find('input').prop({
			required: false,
			disabled: true,
		});
	}
	cancelRequired();

	$('.payField__card').click(function() {
		$(this).addClass('active');
		$('.payField__card .field--insideBorder').removeClass('invisible');

		$('.payField__shop').removeClass('active');
		$('.payField__shop .field--insideBorder').addClass('invisible');
		$('.payField__ATM').removeClass('active');
		$('.payField__ATM  .field--insideBorder').addClass('invisible');

		$('.payForm .payField__card__Inf').removeClass('hidden');
		$('.payForm .payField__shop__Inf').addClass('hidden');
		$('.payForm .payField__ATM__Inf').addClass('hidden');

		//點擊時才更改頁面，避免直接右鍵開啟
		//未來要更改成純button點擊時才更改連結
		$('form').attr('action','card_sucess.html');

		$('.payForm .payField__card__Inf').find('input').prop({
			required: true,
			disabled: false,
		})
		
		$('.payForm .payField__shop__Inf').find('input').prop({
			required: false,
			disabled: true,
		});
		$('.payForm .payField__ATM__Inf').find('input').prop({
			required: false,
			disabled: true,
		});



	});
	$('.payField__shop').click(function() {
		$(this).addClass('active');
		$('.payField__shop .field--insideBorder').removeClass('invisible');

		$('.payField__card').removeClass('active');
		$('.payField__card .field--insideBorder').addClass('invisible');
		$('.payField__ATM').removeClass('active');
		$('.payField__ATM  .field--insideBorder').addClass('invisible');

		$('.payForm .payField__shop__Inf').removeClass('hidden');
		$('.payForm .payField__card__Inf').addClass('hidden');
		$('.payForm .payField__ATM__Inf').addClass('hidden');

		$('form').attr('action','shop_sucess.html');

		$('.payForm .payField__shop__Inf').find('input').prop({
			required: true,
			disabled: false,
		});

		$('.payForm .payField__card__Inf').find('input').prop({
			required: false,
			disabled: true,
		});
		$('.payForm .payField__ATM__Inf').find('input').prop({
			required: false,
			disabled: true,
		});
	});
	$('.payField__ATM').click(function() {
		$(this).addClass('active');
		$('.payField__ATM .field--insideBorder').removeClass('invisible');

		$('.payField__card').removeClass('active');
		$('.payField__card .field--insideBorder').addClass('invisible');
		$('.payField__shop').removeClass('active');
		$('.payField__shop .field--insideBorder').addClass('invisible');

		$('.payForm .payField__ATM__Inf').removeClass('hidden');
		$('.payForm .payField__shop__Inf').addClass('hidden');
		$('.payForm .payField__card__Inf').addClass('hidden');

		$('form').attr('action','ATM_sucess.html');

		$('.payForm .payField__ATM__Inf').find('input').prop({
			required: true,
			disabled: false,
		});

		$('.payForm .payField__card__Inf').find('input').prop({
			required: false,
			disabled: true,
		});
		$('.payForm .payField__shop__Inf').find('input').prop({
			required: false,
			disabled: true,
		});
	});

	$('.sucess').delay(1500).fadeOut();

	$('.InputCardNumber__one').keyup(function(e){   
    	if($(this).val().length==$(this).attr('maxlength')){
    		$(this).next(':input').focus(); 
    	}   
    	  
	});  

	$('.listField__Mobile .toggleShow').click(function(event) {
		$('.listField__Mobile .details').stop().slideToggle(1000);
	});

	$('.listField__Mobile .toggleShow').click(function(event) {
		$('.toggleShow .toggleShow1').toggle();
		$('.toggleShow .toggleShow2').toggle();
	});

	$('.CVV__icon').click(function(event) {
		alert('卡片背面右側三碼');
	});

	//jQuery似乎會有版本衝突問題
	// $(function () {
	//   $('[data-toggle="popover"]').popover();
	// });

	 // $('.btn-danger').popover({
	 //    container: 'body',
	 //  })


});

var input = document.querySelectorAll('input');
for (var i = 0; i < input.length; i++) {
	input[i].setAttribute('required',true);
}

// work
//  document.getElementById('print').onclick = function(){
// 	window.print();
// }

// work
// document.querySelector("#print").addEventListener("click", function() {
// 	window.print();
// });

// not work
// var print = document.querySelector('#print');
// print.addEventListener('click',function(){
// 		window.print();
// })
//命令button as a function()，不是觸發window.print();這個行為，它會找不到

//work
function printpage(){
	var print = document.querySelector('#print');
	print.addEventListener('click',function(){
		window.print();

	})
}
printpage();
