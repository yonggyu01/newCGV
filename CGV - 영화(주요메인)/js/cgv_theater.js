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



/* 무비차트 */
/* 오른쪽 버튼 클릭시 왼쪽 버튼이 나타나고 
   슬라이드 ul 왼쪽으로 얼만큼 이동
*/
$(document).ready(function () { 
    $(".slide_btn_next").click(function() {
        $(".slide_btn_prev").css({"display": "block"});
        });
    });


    
/* theater */

/* city */
$(document).ready(function () { 
    // 마우스 클릭 시 하위메뉴 보이기
    $(".city_tit > li").click(function() {
        $(".area").toggleClass("on");
        });
 });

 /* grade */ 
 $(document).ready(function () { 
    // 마우스 클릭 시 팝업메뉴 보이기
    $(".grade").click(function() {
        $(".grade_popup").css({"display": "block"});
     });
 });

 /* info */ 
$(document).ready(function(){
    // 마우스 클릭 시 팝업메뉴 보이기
    $(".grade").click(function(){
      $(".grade_popup").show();
    });

    $(".grade_close").click(function(){
      $(".grade_popup").hide();
    });
  });



    // 마우스 오버 시 좌석메뉴 보이기
$(document).ready(function(){
    $(".info_time > li").mouseover(function(){
      // 포지션 가져오기
      const infoTime = $(this).offset();

      // 마우스 오버 시 해당 포지션에 좌석메뉴 보이기
      $(".minimap_area").css({
        top: (infoTime.top - 176) + 'px',
        left: (infoTime.left - 24) + 'px',
        display: 'block'
      });
    });

    $(".info_time > li").mouseout(function(){
      // 마우스 아웃 시 숨기기
      $(".minimap_area").css('display', 'none');
    });
  });

/* day_list */
$(document).ready(function () { 
    // 클릭시 테두리 on
    $(".day_list").click(function() {
        $(this).toggleClass("on");
        });
 });


 
/* footer */
$(document).ready(function () { //HTML 문서가 완전히 로드된 후에 함수 내의 코드를 실행
    // 마우스 클릭 시 계열사 메뉴 보이기
    $(".familysite").click(function() {
        $(".familysite_wrap dl").toggle();
        });
 });
