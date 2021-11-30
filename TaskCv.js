$(document).ready(function () {
	$('.kariyer-button').click(function(){
		$(this).parents('.aa').children('input').val('')
		$(this).css("display", "none");
		$(this).parents('.aa').children(".modul").css("display","block");
	})
	$('.iptal').click(function(){
		$(this).parents('.aa').children().children().children().css("display", "block");
		$(this).parents('.modul').css("display", "none")
	})
	$('.kayd-t').click(function(){
		$(this).parents('.aa').children().children().children('.kariyer-button').css("display", "block")
		$(this).parents('.modul').css("display", "none")
		$(this).parents('.aa').children('.main-info').append(
			'<div class="info container mb-4"><div class="row mb-2"><div class="col-md-10"><div class="row mb-2"><span>Universite: <span>'
			+$('#uni-ad').val()+'</span></span></div><div class="row mb-2"><span>Bölüm: <span>'
			+$('#uni-bolum').val()+'</span></span></div><div class="row mb-2"><span>Derece: <span>'
			+$('#uni-derece').val()+'</span></span></div><div class="row mb-2"><span>Tarih: <span>'
			+$('#uni-baslama').val()+' '+$('#uni-bitirme').val()+
			'</span></span></div></div><div class="col-md-2"><i class="fas fa-edit"></i><i class="fas fa-trash-alt"></i></div></div></div>')
	});

	$('.kayd-d').click(function(){
		$(this).parents('.aa').children().children().children('.kariyer-button').css("display", "block")
		$(this).parents('.modul').css("display", "none")
		$(this).parents('.aa').children('.main-info').append('<div class="info container mb-4"><div class="row"><div class="col-md-10"><div class="row"><span>Dil: <span>'
			+$('#dil-ad').val()+'</span></span></div><div class="row"><span>Seviye: <span>'
			+$('#dil-seviye').val()+'</span></span></div></div><div style="text-align: center;" class="col-md-2"><i class="fas fa-edit"></i><i class="fas fa-trash-alt"></i></div></div></div>')
	});
	$('.kayd-i').click(function(){
		$(this).parents('.aa').children().children().children('.kariyer-button').css("display", "block")
		$(this).parents('.modul').css("display", "none")
		$(this).parents('.aa').children('.main-info').append('<div class="info container mb-4"><div class="row"><div class="col-md-10"><div class="row"><span>İşletmenin adı: <span>'
			+$('#isletme-ad').val()+'</span></span></div><div class="row"><span>Vazife: <span>'
			+$('#islemtme-vasife').val()+'</span></span></div><div class="row"><span>Tarih: <span>'
			+$('#isletme-baslama').val()+' '+$('#isletme-bitme')+
			'</span></span></div></div><div style="text-align: center;" class="col-md-2"><i class="fas fa-edit"></i><i class="fas fa-trash-alt"></i></div></div></div>')
	});
	$('.kayd-b').click(function(){
		$(this).parents('.aa').children().children().children('.kariyer-button').css("display", "block")
		$(this).parents('.modul').css("display", "none")
		$(this).parents('.aa').children('.main-info').append('<div class="info container mb-4"><div class="row"><div class="col-md-10"><div class="row"><span>Becerinin adı: <span>'
			+$('#beceri-ad').val()
			+'</span></span></div><div class="row"><span>Seviye: <span>'
			+$('#beceri-seviye').val()+
			'</span></span></div></div><div style="text-align: center;" class="col-md-2"><i class="fas fa-edit"></i><i class="fas fa-trash-alt"></i></div></div></div>')
	});
	$('.kayd-s').click(function(){
		$(this).parents('.aa').children().children().children('.kariyer-button').css("display", "block")
		$(this).parents('.modul').css("display", "none")
		$(this).parents('.aa').children('.main-info').append('<div class="info container mb-4"><div class="row"><div class="col-md-10"><div class="row"><span>Sertifikanın adı: <span>'
			+$('#sertifika-ad').val()+'</span></span></div><div class="row"><span>Veren işletme: <span>'
			+$('#sertifika-isletme').val()+'</span></span></div><div class="row"><span>Numarası: <span>'
			+$('#sertifika-no').val()+'</span></span></div><div class="row"><span>Derecesi: <span>'
			+$('#sertifika-derece').val()+'</span></span></div><div class="row"><span>Tarih: <span>'+$('#sertifika-alma').val()+' '
			+$('#sertifika-bitme').val()
			+'</span></span></div></div><div style="text-align: center;" class="col-md-2"><i class="fas fa-edit"></i><i class="fas fa-trash-alt"></i></div></div></div>')
	});
	$('.main-info').on('click', '.fa-trash-alt', function(){
		$(this).parents('.info').remove();
	});
	$('.main-info').on("click", ".fa-edit", function(){
		$(this).parents('.aa').children().children().children('.kariyer-button').css("display", "none")
		$(this).parents('.aa').children('.modul').children().children().children('input, select').eq(0).val($(this).parents('.info').children().children().children().children('span').eq(0).children('span').text());
		$(this).parents('.aa').children('.modul').children().children().children('input, select').eq(1).val($(this).parents('.info').children().children().children().children('span').eq(1).children('span').text());
		$(this).parents('.aa').children('.modul').children().children().children('input, select').eq(2).val($(this).parents('.info').children().children().children().children('span').eq(2).children('span').text());
		$(this).parents('.aa').children('.modul').children().children().children('input, select').eq(3).val($(this).parents('.info').children().children().children().children('span').eq(3).children('span').text());
		$(this).parents('.aa').children('.modul').children().children().children('input, select').eq(4).val($(this).parents('.info').children().children().children().children('span').eq(4).children('span').text());
		$(this).parents('.aa').children('.modul').children().children().children('input, select').eq(5).val($(this).parents('.info').children().children().children().children('span').eq(5).children('span').text());
		$(this).parents('.aa').children('.modul').children().children().children('input, select').eq(6).val($(this).parents('.info').children().children().children().children('span').eq(6).children('span').text());
		$(this).parents('.aa').children('.modul').css("display","block");
		$(this).parents('.info').remove();
	})
	$("input:checkbox").change(function(){
		if($(this).prop('checked')) {
			$(this).parent().parent().children('.bitme').css("display","none")
		}
		else{
			$(this).parent().parent().children('.bitme').css("display","block")
		}
	})
})
