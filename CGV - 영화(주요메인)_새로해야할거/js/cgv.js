window.onload = function(e){

    window.onclick =function(e){
        let getID = e.target.id || e.target.classList.value
        console.log(e)
    switch (getID) {
        case  'btn_close' : 
            document.querySelector('.adTop').style.display ='none'
        break;
        case  'chart_slide_btn_prev' : 
            document.querySelector('.adTop').style.display ='none'
            document.querySelector('.slide_list').style.left = 0 + 'px'
        break;
        case  'chart_slide_btn_next' : 
            e.target.previousElementSibling.style.display = 'block'
            document.querySelector('.slide_list').style.left = -1004 + 'px'
        break;
    }
    }

// class= btn_close  클릭시   클래스 adTop  display none

// id 부여 하여 chart_slide_btn_prev chart_slide_btn_next

// event페이지도 id부여함

// event_slide_btn_next

}