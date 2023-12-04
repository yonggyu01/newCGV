<<<<<<< HEAD
/*
오픈도어 x버튼 누르면 닫기  -> CLASS btn_close  -> adTop 이거 끄기

화면 스크롤 내렸을때  네비게이션 생성  fixedNav -> display none상태 
예매하기랑 탑으로 올라가는 버튼 생성  fixedBtn  -> opacity 0 상태 

chart
무비차트에 화살표 버튼  slide_btn_next 오른쪽 버튼   slide_btn_prev왼쪽버튼
오른쪽 눌렀을때 왼쪽버튼이 나타나고 리스트가 왼쪽방향으로 이동 slide_list 이동한다.

event
이벤트 리스트도
화살표 눌렀을때   왼쪽으로 이동  slide_btn_next    slide_btn_prev  버튼
자동으로 왼쪽 슬라이딩   event_list  슬라이딩
자동으로 슬라이딩 되는 버튼 정지버튼 있음  btn_eventControl  버튼 한개뿐임

특별관
 active 클래스가 들어가면됨
changeImg('img/special02.png')
다른방식



마우스 오버했을때  테두리 생성 active
해당 이미지 나옴


푸터 계열  바로가기  familysite_wrap>h3  눌렀을때 메뉴 
누르면 뜨는방식으로   familysite_wrap>h3 dl    = display :block;

for

*/

window.onload=function(e){


 let special =  document.querySelectorAll('.specialHall_list li')
 
    for(let x of special){
        x.onmouseenter =function(e){
               console.log(x)
        }
    }


}
=======
// 자바스크립트!!!!!!!!!
window.onload = function(){

}

//
document.addEventListener('DOMContentLoaded',function(){

    /* 1.닫기 버튼 위에 btn_close -> adTop끄기 */
    document.querySelector(".btn_close").onclick = function(){
        document.querySelector(".adTop").style.display = "none";
    }
    /* 2.스크롤 내릴 시 - 네비나오기, 예매하기랑 탑으로 올라가는 버튼
	네비 fixedNav -> display none에서 / fixedBtn 버튼 opacity : 0 -> 1에서 스르륵 나오기 */

    /* window.onscroll = function(){
        console.log(window.pageYOffset)
    }*/
     /* 위치를 감지 변수랑 = 일치 했을 때 display block + opacity 1  */
    window.onscroll = function(){
        if(window.pageYOffset >= 250){
            document.querySelector(".fixedNav").style.display = "block";
            document.querySelector(".fixedNav").style.position = "fixed";
            document.querySelector(".fixedBtn").style.opacity = 1; 
        }else{
            document.querySelector(".fixedNav").style.display = "none";
            document.querySelector(".fixedNav").style.position = "relative";
            document.querySelector(".fixedBtn").style.opacity = 0; 
        }
    }
    
})




>>>>>>> 740f998144af6a004f3ae42986dbad8da377c00a
