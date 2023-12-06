function imgchange(url){
   document.querySelector('#special_img').src = url 
}
window.onload =function(){
    let chartnum=0;
    window.onclick = function(e){
       
        
        let idchecker = e.target.id || e.target.classList.value;
        console.log(idchecker)
        console.log(chartnum)
        switch (idchecker){
            case 'btn_close' :
                document.querySelector('.adTop').style.display = 'none'
                break;
            case 'btn_play' :
                document.querySelector('.video1').play();
                break;
            case 'btn_Stop' :
                document.querySelector('.video1').pause();
                break;
            case 'btn_soundOn' :
                document.querySelector('.video1').muted = 0;
                break;
            case 'btn_soundOff' :
                document.querySelector('.video1').muted = 1;
                break;
            case 'chartpreb' :
                if(chartnum==0){ e.target.style.display = 'none'}
                ++chartnum 
                document.querySelector('.slide_list').style.left =(chartnum*1005)+'px';
                break;
            case 'chartnextb' :
                if(chartnum==-2){ e.target.style.display = 'none'}
                    --chartnum 
                    e.target.previousElementSibling.style.display ='block'
                    document.querySelector('.slide_list').style.left = (chartnum*1005)+'px';
              
                break;


        }
    }


    let windowYscroll=''
    window.onscroll = function(){
        windowYscroll=window.pageYOffset;
    }

}