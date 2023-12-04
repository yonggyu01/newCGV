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




