$(document).ready(function(){    

    //팝업 공통 닫기

    $('.pop .close_btn').click(function(){

        $('.pop').removeClass('on');

    });

    $('.pop .black_bg').click(function(){

        $('.pop').removeClass('on');

    });

    $('.pop .pbtn').click(function(){

        $('.pop').removeClass('on');

    });



    $('.pop .pbtns.btn2').click(function(){

        $('.pop').removeClass('on');

    });





    //컨텐츠 < 윈도우일때 푸터 바닥에 고정

    var winH = $(window).innerHeight();

    var docH = $('body').innerHeight();

    if(winH > docH) {

        $('.pc_footer').addClass('fixed');

    }else{

        $('.pc_footer').removeClass('fixed');

    }





    //비밀번호 보임,숨김

    $('.eye_btn').each(function(data,index){

        $('.eye_btn').data("willShow", true);

    });

    $('.eye_btn').click(function(){

        if($(this).data("willShow")){

            $(this).data("willShow", false);

            $(this).children('img').removeClass('on');

            $(this).children('.hide').addClass('on');

            $(this).prev('input').attr('type','text');

        }else{

            $(this).data("willShow", true);

            $(this).children('img').removeClass('on');

            $(this).children('.show').addClass('on');

            $(this).prev('input').attr('type','password');

        }

    });





    //로고 누르면 메인페이지로

    $('.pc_header .logo').click(function(){

        location.href='index.html';

    });





    //로고 누르면 로그인페이지로(로그인/찾기/회원가입일때)

    $('h1 .logo').click(function(){

        location.href='login.html';

    });



    //로그인 유형 선택

    // $('#login .type').click(function(){

    //     $('#login .type').removeClass('on');

    //     $(this).addClass('on');



    //     $('#login .tab').removeClass('on');

    //     $('#login .tab').eq($(this).index()).addClass('on');

    // });



    //아이디/비밀번호 찾기

    $('#find .go_find').click(function(){

        $('.tab').removeClass('on');

        $('.tab2').addClass('on');

    });

    $('#find .go_login').click(function(){

        location.href='login.html'

    });



    

    $('.head_con .head2').click(function(){

        var this_url = window.location.href;



        if(this_url == 'http://lawpaper.webadsky.net/org/index.html' || this_url == 'http://lawpaper.webadsky.net/org/index.html#'){



            var menu2_top = $('#main .doc_wrap').offset().top - 100;



            $('html, body').animate({scrollTop: menu2_top}, 500);

            return false;

        }else{

            location.href='index.html';

        }

    });



    $('.pagination .p_num').click(function(){

        $('.pagination .p_num').removeClass('on');

        $(this).addClass('on');

    });



    //마이페이지 > 모바일될때 햄버거

    var left = $('.my_left .white_bg').innerWidth();

    $('.my_left .white_bg').css({'left': - left + 'px'});



    $('.m_ham').click(function(){

        $('.my_left').addClass('on');

        $('.my_left .white_bg').stop().animate({'left': '0px'}, 300);

    });

    $('.my_left .black_bg').click(function(){

        $('.my_left').removeClass('on');

        $('.my_left .white_bg').css({'left': - left + 'px'});

    });

    $('.my_left .close_btn').click(function(){

        $('.my_left').removeClass('on');

        $('.my_left .white_bg').css({'left': - left + 'px'});

    });



    $('.alarm').click(function(){

        location.href='alarm.html';

    })



    $('.go_chat').click(function(){

        var winW = $(window).innerWidth();

    

        if (winW > 960) {

            location.href='chat.html';

        }else{

            location.href='chat_mob_list.html';

        }



        return false;

    });







    //로그아웃

    $('.logout_btn').click(function(){

        $('.pop2').addClass('on');

        $('.pop2 .p_h2').text('로그아웃');

        $('.pop2 .text').text('로그아웃 하시겠습니까?');

    });

    $('.pop2 .btn1').click(function(){

        if($('.pop2 .p_h2').text() == "로그아웃"){

            location.href='index.html';

        }

    });



    $('.out_btn').click(function(){

        $('.pop2').addClass('on');

        $('.pop2 .p_h2').text('회원 탈퇴');

        $('.pop2 .text').text('로페이퍼 회원을 탈퇴하시겠습니까?');

    });

    $('.pop2 .btn1').click(function(){

        if($('.pop2 .p_h2').text() == "회원 탈퇴"){

            location.href='index.html';

        }

    });





    $('.header .hd_l').click(function(){ //로그인

        $('.logpop').addClass('on');

    });



    $('.header .hd_j').click(function(){ //회원가입

        $('.joinpop').addClass('on');

    });





    $('.header .h_right').click(function(){

        $('.ul_close').addClass('on');



        if($(this).hasClass('go_myp_user')){

            $('.m_my_ul.user').addClass('on');



        }else if($(this).hasClass('go_myp_law')){

            // $('.m_my_ul.law').addClass('on');

            location.href='myp_law.html';

        }

    });



    $('.ul_close').click(function(){

        $('.m_my_ul').removeClass('on');

    });



});