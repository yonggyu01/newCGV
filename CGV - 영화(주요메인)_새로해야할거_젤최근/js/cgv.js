window.onload = function(){

}

function changeImg(img_url){
    special_img.src= img_url;
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
    
    var spItem = document.querySelectorAll(".specialHall_item");

    // document.querySelector("nav").onmouseleave = function(){
    //     document.querySelector(".sub_menu").style.display = "none";
    // }


    /* specialHall ) 마우스 오버 시 테두리(클래스)추가, 이미지 나오기 */

    document.querySelectorAll(".specialHall_img > img")
    var spImg = document.querySelectorAll(".specialHall_img > img")
    spImg[0]

    // document.querySelectorAll(".specialHall_img > img")[0].style.display = "none";  
    // document.querySelectorAll(".specialHall_img > img")[1].style.display = "none";  
    // document.querySelectorAll(".specialHall_img > img")[2].style.display = "none";  
    // document.querySelectorAll(".specialHall_img > img")[3].style.display = "none";  

    // for(let i=0; i < spImg.length; i++){
    //     spImg[i].style.display = "none";
    // }

    var spList = document.querySelectorAll(".specialHall_list > li")

    // for(let 박스 of spList ){
    //     console.log(박스)
    // }

    /*버튼4개 active*/
    // sub_menu[0].oncli[1][2] ~ sub_menu[6] 
    
    for(let spbox of  spItem ){         
        spbox.onmouseover = function(e){
            spbox.className = "active";
            var num = e.target.dataset.id;
            changeImg(num);

    // spImg[num].style.display = "block";
            
    // switch(num){
    //     case 0:
    //         break;
    //     case 1:
    //         changeImg('img/special02.png');
    //         break;     
    //     case 2:
    //         changeImg('img/special03.png');
    //         break; 
    //     case 3:
    //         changeImg('img/special04.png');
    //         break;   
    // }        
            
    // for(let i=0; i < spImg.length; i++){
    //     spImg[i].style.display = "none";

    //         // 원하는 num값만 사진 - display block하고 나머지는 none할것이다. 
    //     if(num == i){
    //         spImg[i].style.display = "block";
    //     }else{
    //         spImg[i].style.display = "none";
    //     }
    // }

    spbox.onmouseleave= function(e){
        spbox.classList.remove("active");
    
    // 원하는 값(금방 mouseover한 index값)은 active가 남고,     
    // 나머지는 none
    //     if(num == i){
    //         spImg[i].style.display = "block";
    //     }else{
    //         spImg[i].style.display = "none";
    //     }
    }
    }}


        // spItem[0].onmouseover = function(){
        //     changeImg();
        // }
        // spItem[1].onmouseover = function(){
        //     changeImg('img/special02.png');
        // }
        // spItem[2].onmouseover = function(){
        //     changeImg('img/special03.png');
        // }
        // spItem[3].onmouseover = function(){
        //     changeImg('img/special04.png');
        // }
        // spItem[4].onmouseover = function(){
        //     changeImg();
        // }

    // 자바스크립트, 자바의  this
    // 제이쿼리 addClaa /
    // 자바 Class
    /* classList.add("클래스명") : 클래스 추가하기 */
    // for(let spbox of  spItem ){         
    //     spbox.onmouseover = function(){
    //         spbox.classList.add("active");
    //     }
    //     spbox.onmouseleave= function(){
    //         spbox.classList.remove("active");
    //     }
    // }

    /* className."클래스명" : 클래스 덮어씌우기 */
    /* i=원하는 값일때는 아닌거만*/
    
    // nav_menu.onmouseleave = function(){      
    //     nav_bg.style.height = 0 + "px"

    //     for(let i = 0; i < sub_menu.length; i++){
    //         sub_menu[i].style.height = 0 + "px"
    //     }
    // }


    // for(let i=0; i < spImg.length; i++){
    //     spImg[i].style.display = "none";
    // }


    
    // spItem[0].onmouseenter = function () {
    //     this.classList.add("active")
    // }
    // spItem[0].onmouseleave = function () {
    //     this.classList.remove("active")
    // }

    // spItem[1].onmouseenter = function () {
    //     this.classList.add("active")
    // }
    // spItem[1].onmouseleave = function () {
    //     this.classList.remove("active")
    // }

    // spItem[2].onmouseenter = function () {
    //     this.classList.add("active")
    // }
    // spItem[2].onmouseleave = function () {
    //     this.classList.remove("active")
    // }

    // spItem[3].onmouseenter = function () {
    //     this.classList.add("active")
    // }
    // spItem[3].onmouseleave = function () {
    //     this.classList.remove("active")
    // }

    // console.log(sp_item[0]);
    // console.log(sp_item[1]);
    // console.log(sp_item[2]);

    // for(i=0; i < sp_item.length ; i++){
    //     console.log(sp_item[i])
    // }

    // for (each){

    // }
    // for(let i  of sp_item){
    //     console.log(i)       
    // }
    
    // var img = document.querySelectorAll('.img') // 4장짜리 이미지 
    // sp_item.forEach(function(box, num){
    //     box.onclick = function(){
             
    //         for(i=0; i<sp_item.length; i++){
    //             if(num == i){
    //                 img[num].style.display="block"
    //             }else{

    //             }
    //     }   
    // })

    // for(let i  of sp_item){
    //     console.log(i)       
    // }
    
    // var img = document.querySelectorAll('.img') // 4장짜리 이미지 
    // sp_item.forEach(function(box, num){
    //     box.onclick = function(){
             
    //         for(i=0; i<sp_item.length; i++){
    //             if(num == i){
    //                 img[num].style.display="block"
    //             }else{

    //             }
    //     }   
    // })
 
    
    /* familysite ) familysite 클릭 시 -> familysite_list 나타났다 없어졌다 */
     document.querySelector(".familysite_wrap > h3").onclick = function(){
        var familysitelist = document.querySelector(".familysite_list");

        // if( familysitelist.style.display === "block"){
        //     familysitelist.style.display = "none";
        // }else{
        //     familysitelist.style.display = "block";
        // }
        familysitelist.classList.toggle("on"); /* classList = addClass */

     }
})
