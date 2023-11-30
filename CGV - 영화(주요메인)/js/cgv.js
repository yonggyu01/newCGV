/* fixedBtn 스크롤 내릴 시 나타나기*/
$(document).ready(function () {
    $(window).scroll(function() {
        // 현재 스크롤 위치를 가져옵니다.
        var scrollPosition = $(this).scrollTop();

        // 스크롤 위치가 특정 값(예: 60px)을 넘어가면 요소를 서서히 나타나게 합니다.
        if (scrollPosition > 60) {
            $(".btn_ticket, .btn_gotoTop").css({"opacity": 1, "transition": "opacity 0.8s"}); 

        } else {
            // 스크롤 위치가 특정 값 미만이면 요소를 서서히 숨깁니다.
            $(".btn_ticket, .btn_gotoTop").css({"opacity": 0, "transition": "opacity 0.8s"});

        }       
    });
});


/* fixedNav 스크롤 내릴 시 나타나고 올리면 사라지기 */
$(document).ready(function(){
    var navHeight = $(".fixedNav").height(); 
    //navHeight 의 높이를 구하기

    $(window).scroll(function(){ 
        var rollIt = $(this).scrollTop() >= navHeight; 
    // 스크롤의 정도가 navHeight 의 값을 넘었을 때 == 윈도우 스크롤의 값이 navHeight 의 높이와 같거나 크다

    /*
    scrollTop 은 윈도우에서 스크롤의 위치가 가장 상위에 있다는 의미로 해석
    스크롤의 위치가 화면 아래일수록 == scrollTop 의 값이 커짐
    */

    if(rollIt){ 
		//윈도우 스크롤 기능의 값이 navHeight 의 높이와 같거나 크면
            $(".fixedNav").show().css({"position":"fixed"});
        }
        else{
            $(".fixedNav").hide();
        }
    });
});

/* fixedNav 마우스 오버 시 하위메뉴 슬라이드 */


/* 비디오 */ 



/* 무비차트 */
/* 오른쪽 버튼 클릭시 왼쪽 버튼이 나타나고 
   슬라이드 ul 왼쪽으로 얼만큼 이동
*/
$(document).ready(function () { 
    $(".slide_btn_next").click(function() {
        $(".slide_btn_prev").css({"display": "block"});
        });
    });


// 화살표 각각 방향마다 변수로 지정하고
// slidebox의 li가 10개가 존재하며 우측 화살표를 누르면 
// slidebox에 li가 왼쪽 방향으로  position이 이동 약 1040px정도?
// 다시 왼쪽 화살표를 누르면 원래위치로 position이 오도록 해야함

var chart1Left = document.querySelector('.slide_btn_prev')
var chart1Right = document.querySelector('.slide_btn_next')
var slidebox1 = document.querySelector('.slide_list')
var styleposition = 0;

chart1Right.addEventListener('click',function(){
    styleposition = styleposition -1004

    if(styleposition <= -3004){
        chart1Right.style.visibility = 'hidden' 
    }else{
        chart1Right.style.visibility = 'visible' 
    }
    slidebox1.style.transition = 'left 0.5s ease'; 
    slidebox1.style.left = styleposition + 'px';
    chart1Left.style.visibility = 'visible';
    console.log(styleposition)
})

chart1Left.addEventListener('click',function(){
    styleposition = styleposition + 1004
    slidebox1.style.left = styleposition + 'px'

    if(styleposition == 0){
        chart1Left.style.visibility = 'hidden' 
        chart1Right.style.visibility = 'visible'
    }else{chart1Left.style.visibility = 'visible' 
        chart1Right.style.visibility = 'visible'
    }

    slidebox1.style.transition = 'left 0.5s ease'; 
    console.log(styleposition)
})

/* 이벤트 */

// 화살표 각각 방향마다 변수로 지정하고
// slidebox의 li가 10개가 존재하며 우측 화살표를 누르면 
// slidebox에 li가 왼쪽 방향으로  position이 이동 약 1040px정도?
// 다시 왼쪽 화살표를 누르면 원래위치로 position이 오도록 해야함

var chart2Left = document.querySelector('.slide_btn_prev')
var chart2Right = document.querySelector('.slide_btn_next')
var slidebox2 = document.querySelector('.event_list')
var styleposition1 = 0;

chart2Right.addEventListener('click',function(){
    styleposition1 = styleposition1 -1004

    if(styleposition1 <= -3004){
        chart2Right.style.visibility = 'hidden' 
    }else{
        chart2Right.style.visibility = 'visible' 
    }
    slidebox2.style.transition = 'left 0.5s ease'; 
    slidebox2.style.left = styleposition1 + 'px';
    chart2Left.style.visibility = 'visible';
    console.log(styleposition1)
})

chart2Left.addEventListener('click',function(){
    styleposition1 = styleposition1 + 1004
    slidebox2.style.left = styleposition1 + 'px'

    if(styleposition1 == 0){
        chart2Left.style.visibility = 'hidden' 
        chart2Right.style.visibility = 'visible'
    }else{chart2Left.style.visibility = 'visible' 
        chart2Right.style.visibility = 'visible'
    }

    slidebox2.style.transition = 'left 0.5s ease'; 
    console.log(styleposition1)
})

/* 메인메뉴 오버시 하위메뉴 보이기 */
$(document).ready(function(){
    $(".nav_menu li, .nav_bg").hover(function(){
        $(".sub_menu, .nav_bg").stop().slideDown("fast");
    }, function(){
        $(".sub_menu, .nav_bg").stop().slideUp("fast");
    });
});

/* 특별관 */
$(document).ready(function () {
    // 마우스 오버 시 active 클래스 추가
    $(".specialHall_list > li").mouseover(function () {
        $(this).addClass("active");
    });
    // 마우스 리브 시 active 클래스 삭제
    $(".specialHall_list > li").mouseleave(function () {
        $(this).removeClass("active");
    });
});

function changeImg(img_url){
    specialHall_img.src = img_url;
}

/* footer */
$(document).ready(function () { //HTML 문서가 완전히 로드된 후에 함수 내의 코드를 실행
    // 마우스 클릭 시 계열사 메뉴 보이기
    $(".familysite").click(function() {
        $(".familysite_wrap dl").toggle();
        });
 });
