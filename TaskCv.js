$(document).ready(function () {
	var iptal=false;
	var kayd=false;
	var info;
	$('.main-info').on("click", ".fa-edit", function(){
		info=$(this).parents('.info');
		kayd=true;
		iptal=true;
		$(this).parents('.aa').children().children().children('.kariyer-button').css("display", "none")
		$(this).parents('.aa').children('.modul').find('input, select').eq(0).val($(this).parents('.info').find('span').eq(0).children('span').text());
		$(this).parents('.aa').children('.modul').find('input, select').eq(1).val($(this).parents('.info').find('span').eq(1).children('span').text());
		$(this).parents('.aa').children('.modul').find('input, select').eq(2).val($(this).parents('.info').find('span').eq(2).children('span').text());
		$(this).parents('.aa').children('.modul').find('input, select').eq(3).val($(this).parents('.info').find('span').eq(3).children('span').text());
		$(this).parents('.aa').children('.modul').find('input, select').eq(4).val($(this).parents('.info').find('span').eq(4).children('span').text());
		$(this).parents('.aa').children('.modul').find('input, select').eq(5).val($(this).parents('.info').find('span').eq(5).children('span').text());
		$(this).parents('.aa').children('.modul').find('input, select').eq(6).val($(this).parents('.info').find('span').eq(6).children('span').text());
		$(this).parents('.aa').children('.modul').css("display","block");
		$(this).parents('.info').css("display", "none");
		
	})
	$('.kariyer-button').click(function(){
		$(this).parents('.aa').children('input').val('')
		$(this).css("display", "none");
		$(this).parents('.aa').children(".modul").css("display","block");
		$(this).parents('.aa').children('.modul').find('input, select').val('')
	})
	
	$('.kayd-t').click(function(){
		$(this).parents('.modul').find('input[type!="checkbox"], select').css({'border-color': 'transparent'})
		var requiredInput = $(this).parents('.modul').find('input[type!="checkbox"], select').filter(function(x) {
			return this.value == ''
		});
		if ($(requiredInput).length == 0) {
			if (kayd==true) {
				$(info).remove();
				kayd=false
			}				
			$(this).parents('.aa').children().children().children('.kariyer-button').css("display", "block")
			$(this).parents('.modul').css("display", "none")
			$(this).parents('.aa').children('.main-info').append(
				'<div class="info container mb-4"><div class="row mb-2"><div class="col-md-10"><div class="row mb-2"><span>Universite: <span>'
				+$('#uni-ad').val()+'</span></span></div><div class="row mb-2"><span>Bölüm: <span>'
				+$('#uni-bolum').val()+'</span></span></div><div class="row mb-2"><span>Derece: <span>'
				+$('#uni-derece').val()+'</span></span></div><div class="row mb-2"><span>Başlama tarihi: <span>'
				+$('#uni-baslama').val()+
				'</span></span></div><div class="row mb-2"><span>Bitirme tarihi: <span>'
				+$('#uni-bitirme').val()+
				'</span></span></div></div><div class="col-md-2"><i class="fas fa-edit"></i><i class="fas fa-trash-alt"></i></div></div></div>')
			}
			$(requiredInput).css({'border-color': 'red'})
	});
	$('.kayd-d').click(function(){
		$(this).parents('.modul').find('input[type!="checkbox"], select').css({'border-color': 'transparent'})
		var requiredInput = $(this).parents('.modul').find('input[type!="checkbox"], select').filter(function(x) {
			return this.value == ''
		});
		if ($(requiredInput).length == 0) {

		if (kayd==true) {
			$(info).remove();
			kayd=false;
		}

			$(this).parents('.aa').children().children().children('.kariyer-button').css("display", "block")
			$(this).parents('.modul').css("display", "none")
			$(this).parents('.aa').children('.main-info').append('<div class="info container mb-4"><div class="row"><div class="col-md-10"><div class="row"><span>Dil: <span>'
				+$('#dil-ad').val()+'</span></span></div><div class="row"><span>Seviye: <span>'
				+$('#dil-seviye').val()+'</span></span></div></div><div style="text-align: center;" class="col-md-2"><i class="fas fa-edit"></i><i class="fas fa-trash-alt"></i></div></div></div>')
		}
		$(requiredInput).css({'border-color': 'red'})


	});
	$('.kayd-i').click(function(){
		$(this).parents('.modul').find('input[type!="checkbox"], select').css({'border-color': 'transparent'})
		var requiredInput = $(this).parents('.modul').find('input[type!="checkbox"], select').filter(function(x) {
			return this.value == ''
		});
		if ($(requiredInput).length == 0) {

			if (kayd==true) {
				$(info).remove();
				kayd=false
			}
				$(this).parents('.aa').children().children().children('.kariyer-button').css("display", "block")
				$(this).parents('.modul').css("display", "none")
				$(this).parents('.aa').children('.main-info').append('<div class="info container mb-4"><div class="row"><div class="col-md-10"><div class="row"><span>İşletmenin adı: <span>'
					+$('#isletme-ad').val()+'</span></span></div><div class="row"><span>Vazife: <span>'
					+$('#isletme-vazife').val()+'</span></span></div><div class="row"><span>Başlama tarihi: <span>'
					+$('#isletme-baslama').val()+
					'</span></span></div><div class="row"><span>Bitirme tarihi: <span>'
					+$('#isletme-bitme').val()+
					'</span></span></div></div><div style="text-align: center;" class="col-md-2"><i class="fas fa-edit"></i><i class="fas fa-trash-alt"></i></div></div></div>')
		}
		$(requiredInput).css({'border-color': 'red'})
		
	});
	$('.kayd-b').click(function(){
		$(this).parents('.modul').find('input[type!="checkbox"], select').css({'border-color': 'transparent'})
		var requiredInput = $(this).parents('.modul').find('input[type!="checkbox"], select').filter(function(x) {
			return this.value == ''
		});
		if ($(requiredInput).length == 0) {

			if (kayd==true) {
				$(info).remove();
				kayd=false;
			}
				$(this).parents('.aa').children().children().children('.kariyer-button').css("display", "block")
				$(this).parents('.modul').css("display", "none")
				$(this).parents('.aa').children('.main-info').append('<div class="info container mb-4"><div class="row"><div class="col-md-10"><div class="row"><span>Becerinin adı: <span>'
					+$('#beceri-ad').val()
					+'</span></span></div><div class="row"><span>Seviye: <span>'
					+$('#beceri-seviye').val()+
					'</span></span></div></div><div style="text-align: center;" class="col-md-2"><i class="fas fa-edit"></i><i class="fas fa-trash-alt"></i></div></div></div>')
		}
		$(requiredInput).css({'border-color': 'red'})
	});
	$('.kayd-s').click(function(){
		$(this).parents('.modul').find('input[type!="checkbox"], select').css({'border-color': 'transparent'})
		var requiredInput = $(this).parents('.modul').find('input[type!="checkbox"], select').filter(function(x) {
			return this.value == ''
		});
		if ($(requiredInput).length == 0) {

			if (kayd==true) {
				$(info).remove();
				kayd=false;
			}
				$(this).parents('.aa').children().children().children('.kariyer-button').css("display", "block")
				$(this).parents('.modul').css("display", "none")
				$(this).parents('.aa').children('.main-info').append('<div class="info container mb-4"><div class="row"><div class="col-md-10"><div class="row"><span>Sertifikanın adı: <span>'
					+$('#sertifika-ad').val()+'</span></span></div><div class="row"><span>Veren işletme: <span>'
					+$('#sertifika-isletme').val()+'</span></span></div><div class="row"><span>Numarası: <span>'
					+$('#sertifika-no').val()+'</span></span></div><div class="row"><span>Derecesi: <span>'
					+$('#sertifika-derece').val()+'</span></span></div><div class="row"><span>Alma tarihi: <span>'+$('#sertifika-alma').val()+' '
					+'</span></span></div><div class="row"><span>Son tarih: <span>'+
					$('#sertifika-bitme').val()
					+'</span></span></div></div><div style="text-align: center;" class="col-md-2"><i class="fas fa-edit"></i><i class="fas fa-trash-alt"></i></div></div></div>')
		}
		$(requiredInput).css({'border-color': 'red'})
		
	});
	$('.main-info').on('click', '.fa-trash-alt', function(){
		$(this).parents('.info').remove();
	});
	$('.main-info').on("click", ".fa-edit", function(){
		var info=$(this).parents('.info');
		iptal=true;
		$(this).parents('.aa').children().children().children('.kariyer-button').css("display", "none")
		$(this).parents('.aa').children('.modul').find('input, select').eq(0).val($(this).parents('.info').children().children().children().children('span').eq(0).children('span').text());
		$(this).parents('.aa').children('.modul').find('input, select').eq(1).val($(this).parents('.info').children().children().children().children('span').eq(1).children('span').text());
		$(this).parents('.aa').children('.modul').find('input, select').eq(2).val($(this).parents('.info').children().children().children().children('span').eq(2).children('span').text());
		$(this).parents('.aa').children('.modul').find('input, select').eq(3).val($(this).parents('.info').children().children().children().children('span').eq(3).children('span').text());
		$(this).parents('.aa').children('.modul').find('input, select').eq(4).val($(this).parents('.info').children().children().children().children('span').eq(4).children('span').text());
		$(this).parents('.aa').children('.modul').find('input, select').eq(5).val($(this).parents('.info').children().children().children().children('span').eq(5).children('span').text());
		$(this).parents('.aa').children('.modul').find('input, select').eq(6).val($(this).parents('.info').children().children().children().children('span').eq(6).children('span').text());
		$(this).parents('.aa').children('.modul').css("display","block");
		$(this).parents('.info').css("display", "none");
		
	})	
	$("input:checkbox").change(function(){
		if($(this).prop('checked')) {
			$(this).parent().parent().children('.bitme').css("display","none")
		}
		else{
			$(this).parent().parent().children('.bitme').css("display","block")
		}
	})
	$('.iptal').click(function(){
		if (iptal==true) {
			$(this).parents('.modul').css("display","none")
			$(this).parents('.aa').children().children('.info').css("display","block")
			$(this).parents('.aa').children().children().children().css("display", "block");
			iptal=false;
		}
		else{
			// $(this).parents('.aa').children().children('.info').remove();
			$(this).parents('.aa').children().children().children().css("display", "block");
			$(this).parents('.modul').css("display", "none")
		}
		
	})
})
