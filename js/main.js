// mian.js
//  원페이지
$(document).ready(function(){
    var myFullpage = new fullpage('#fullpage', {
        sectionsColor: ['#ece5db'],
        navigation: true,
        navigationPosition: 'left',
        navigationTooltips: ['Main','Profile', 'Web &amp; Mobile', 'Contact Me']
    });

});
// 프로그래스바
$(document).ready(function(){
    $('#demoprogressbar1').LineProgressbar({
        percentage: 90,
        fillBackgroundColor: '#ccccc',
        height: '20px',
        radius: '15px'
    });
    $('#demoprogressbar2').LineProgressbar({
        percentage: 80,
        fillBackgroundColor: '#ccccc',
        height: '20px',
        radius: '15px'
    });
    $('#demoprogressbar3').LineProgressbar({
        percentage: 70,
        fillBackgroundColor: '#ccccc',
        height: '20px',
        radius: '15px'
    });
    $('#demoprogressbar4').LineProgressbar({
        percentage: 70,
        fillBackgroundColor: '#ccccc',
        height: '20px',
        radius: '15px'
    });
    $('#demoprogressbar5').LineProgressbar({
        percentage: 40,
        fillBackgroundColor: '#ccccc',
        height: '20px',
        radius: '15px'
    });

});


$(document).ready(function(){
    //  포트폴리오 웹
     $('.cafe').click(function(){
        $('.wpf_list').removeClass('show');
        $('.wpf_list.w1').addClass('show');
        $('.sub_menu1 ul li').removeClass('show');
        $('.cafe').addClass('show');
    });
    $('.animal').click(function(){
        $('.wpf_list').removeClass('show');
        $('.wpf_list.w2').addClass('show');
        $('.sub_menu1 ul li').removeClass('show');
        $('.animal').addClass('show');
    });
    $('.tea').click(function(){
        $('.wpf_list').removeClass('show');
        $('.wpf_list.w3').addClass('show');
        $('.sub_menu1 ul li').removeClass('show');
        $('.tea').addClass('show');
    });
    $('.shop').click(function(){
        $('.wpf_list').removeClass('show');
        $('.wpf_list.w4').addClass('show');
        $('.sub_menu1 ul li').removeClass('show');
        $('.shop').addClass('show');
    });
    // 포폴 모바일
    $('.wedding1').click(function(){
        $('.mpf_list').removeClass('show');
        $('.mpf_list.m1').addClass('show');
        $('.sub_menu2 ul li').removeClass('show');
        $('.wedding1').addClass('show');
    });
    $('.wedding2').click(function(){
        $('.mpf_list').removeClass('show');
        $('.mpf_list.m2').addClass('show');
        $('.sub_menu2 ul li').removeClass('show');
        $('.wedding2').addClass('show');
    });
    $('.library').click(function(){
        $('.mpf_list').removeClass('show');
        $('.mpf_list.m3').addClass('show');
        $('.sub_menu2 ul li').removeClass('show');
        $('.library').addClass('show');
    });
    $('.parking').click(function(){
        $('.mpf_list').removeClass('show');
        $('.mpf_list.m4').addClass('show');
        $('.sub_menu2 ul li').removeClass('show');
        $('.parking').addClass('show');
    });
   });
   // venobox
   $(document).ready(function(){
    $('.venobox1').venobox({
    framewidth: '514px',        // default: ''
    frameheight: '2217px',       // default: ''
    // border: '10px',             // default: '0'
    // bgcolor: '#5dff5e',         // default: '#fff'
    titleattr: 'data-title',    // default: 'title'
    numeratio: false,            // default: false
    infinigall: false,            // default: false
    spinner: 'three-bounce'
    });
    $('.venobox2').venobox({
    framewidth: '514px',        // default: ''
    frameheight: '2715px',       // default: ''
    // border: '10px',             // default: '0'
    // bgcolor: '#5dff5e',         // default: '#fff'
    titleattr: 'data-title',    // default: 'title'
    numeratio: false,            // default: false
    infinigall: false,            // default: false
    spinner: 'three-bounce'
    });
    $('.venobox3').venobox({
    framewidth: '430px',        // default: ''
    frameheight: '2845px',       // default: ''
    // border: '10px',             // default: '0'
    // bgcolor: '#5dff5e',         // default: '#fff'
    titleattr: 'data-title',    // default: 'title'
    numeratio: false,            // default: false
    infinigall: false,            // default: false
    spinner: 'three-bounce'
    });
    $('.venobox4').venobox({
    framewidth: '860px',        // default: ''
    frameheight: '6581px',       // default: ''
    // border: '10px',             // default: '0'
    // bgcolor: '#5dff5e',         // default: '#fff'
    titleattr: 'data-title',    // default: 'title'
    numeratio: false,            // default: false
    infinigall: false,            // default: false
    spinner: 'three-bounce'
    });
});
   
        
