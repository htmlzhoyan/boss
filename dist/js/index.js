
//  index.js
console.log($('.list_word_p span').eq(0).html())	
for(var i=0;i<$('.list_word_p span').length;i++){
	if($('.list_word_p span').eq(i).html()=='0'){
//		console.log($('.list_word_p span').eq(i).p)
		$('.list_word_p span').eq(i).parent().parent().css('color','#b49c9a')
		$('.list_word_p span').eq(i).parent().parent().on('click',function(){
			$('.luminosity_box').css('display','block');
			$('.luminosity').css('display','block');
			$('.index_lumi2>span').html('该红包已被抢完啦')
		})
		//红包按钮点击事件
		$('.index_lumi1>span').on('tap',function(){
		
			$('.luminosity_box').css('display','none');
			$('.luminosity').css('display','none');
		})
		
		$('.index_lumibtn').on('tap',function(){
			$('.luminosity_box').css('display','none');
			$('.luminosity').css('display','none');
			
		})
	}
	if($('.list_word_p span').eq(i).html()!='0'){
		$('.list_word1').eq(i).on('tap',function(){
			$('.luminosity_box').css('display','block');
			$('.luminosity').css('display','block');
			$('.index_lumi2>span').html("恭喜你已成功领取<br />"+$(this).parent().parent().find('p').html()+"<br/>提供的现金红包")
			$('.index_lumibtn').on('tap',function(){
				$('.luminosity_box').css('display','none');
				$('.luminosity').css('display','none');
				window.location='./html/company.html'
			})
		})
	}
}









// personal.js
function guess(){
 	$('.luminosity_box').css('display','block');
	$('.luminosity').css('display','block'); 
	
}
var num=3
$('.lumibtn1').on('click',function(){
	var reg=/^[1-4][0-9]$|50|^[1-9]$/;
	if(reg.test($('.lumi2 input').val())){
		console.log(reg.test($('.lumi2 input').val()))
		$('.luminosity_box').css('display','none');
		$('.luminosity').css('display','none');
		$('.luminosity>.lumi1>.lumi1_wrong').css('display','none')
	}else{
		$('.lumi2 input').val('')
		$('.luminosity>.lumi1>.lumi1_wrong').css('display','block')
		$('.lumi2>p').html(--num)
		if(num==0){
			$('.luminosity>.lumi1>.lumi1_wrong').html('对不起，机会已用完')
			$('.lumibtn1').on('click',function(){
				window.location='personal.html'
			})
		}
	}
	
}); 

//  ad.js

	var time = 5; //时间,秒
	var timelong = 0;
	setInterval(function(){
	time--		
		$('.true_button span').html(time)
	},1000)
	setTimeout(function(){	
		$('.true_button').html('确定');
		$('.true_button').css('background','#ba0018');
		$('.true_button').css('letterSpacing','10px');
		$('.true_button').on('click',function(){
			  window.location='personal.html'
		})
	
	},5000)

