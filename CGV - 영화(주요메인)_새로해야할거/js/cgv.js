window.onload = function(){

}

document.addEventListener('DOMContentLoaded', function(){

    /* adTop ) 닫기 버튼 위에 btn_close -> adTop끄기 */
    document.querySelector(".btn_close").onclick = function(){
        document.querySelector(".adTop").style.display = "none";
    }

    /* nav ) 마우스 오버 시 sub_menu 슬라이드 나오기 */
    var nav_menu = document.querySelector("nav .nav_menu")
    var sub_menu = document.querySelectorAll("nav .sub_menu")
    // document.querySelectorAll("nav .sub_menu")[0].style.height = 283 + "px"
    var nav_bg = document.querySelector(".nav_bg")

    nav_menu.onmouseover = function(){
        nav_bg.style.height = 283 + "px"
        // document.querySelectorAll("nav .sub_menu")[1].style.height = 283 + "px"
        // document.querySelectorAll("nav .sub_menu")[2].style.height = 283 + "px"
        // document.querySelectorAll("nav .sub_menu")[3].style.height = 283 + "px"
        // document.querySelectorAll("nav .sub_menu")[4].style.height = 283 + "px"
        // document.querySelectorAll("nav .sub_menu")[5].style.height = 283 + "px"
        // document.querySelectorAll("nav .sub_menu")[6].style.height = 283 + "px"
        
        //
        /* submenu의 length를 가져오는 코드를 추가해서 그만큼 반복하게 하기 */
        for(let i = 0; i < sub_menu.length; i++){
            sub_menu[i].style.height = 283 + "px"
        }
    }
    /* nav ) 마우스 리브 시 sub_menu 슬라이드 없어지기 */
    nav_menu.onmouseleave = function(){      
        nav_bg.style.height = 0 + "px"

        for(let i = 0; i < sub_menu.length; i++){
            sub_menu[i].style.height = 0 + "px"
        }
    }

    // ++i(처음부터 1부터 시작) / i++(0부터 초기값부터 시작)


    // document.querySelector("nav").onmouseleave = function(){
    //     document.querySelector(".sub_menu").style.display = "none";
    // }

     /* familysite ) familysite 클릭 시 -> familysite_list 나타났다 없어졌다 */
     document.querySelector(".familysite_wrap > h3").onclick = function(){
        var familysitelist = document.querySelector(".familysite_list");

        // if( familysitelist.style.display === "block"){
        //     familysitelist.style.display = "none";
        // }else{
        //     familysitelist.style.display = "block";
        // }

    document.querySelector(".familysite_wrap > h3").onclick = function(){
        familysitelist.classList.toggle("on"); /* classList = addClass */
      }
     }
})
