(function(){
    'use strict'
    const his_cnt = document.querySelector('.his_cnt')
    //미디어쿼리
    let windowWidth = window.matchMedia('screen and (max-width: 850px)');
    // 마우스 휠 가로스크롤 850보다 클 때만.
    if(!(windowWidth.matches)){
        window.addEventListener('wheel', (e) => {
            his_cnt.scrollLeft += e.deltaY;
        });
    } else {
        window.addEventListener('wheel', (e) => {
            his_cnt.scrollTop += e.deltaY;
        });

    }

    // json 가져오기
    function loadItems(){
        return fetch("./history.json")
        .then((response)=>response.json())
        .then((json)=>json.items);
    }
    const his_yearCnt = document.querySelector('.his_yearCnt');
    const his_yearFlex = document.querySelectorAll('.his_yearFlex')
    
    // json 뿌리기
    loadItems().then((items)=>{
        items.forEach((ele, index) => {
            for(let i=0; i<his_yearFlex.length; i++){
                if(his_yearFlex[i].classList[0] === ele.century){
                    if(!(index%2)){
                        const hisDown = document.createElement('div');
                        hisDown.classList.add('his_down');
                        // 내용을 담을 부모, 이미지
                        const downDiv = document.createElement('div');
                        downDiv.classList.add('his_downCnt');
                        const downImg = document.createElement('img');
                        // 사이 가름선
                        const lineM = document.createElement('img');
                        lineM.src = './image/LineM.svg'
                        lineM.classList.add('his_lineM', 'his_lineMdown');
                        // 에피소드별 이미지
                        downImg.src=`${ele.image}`
                        downImg.classList.add('his_yearImg', 'his_downImg');
                        
                        downDiv.innerHTML = `
                            <div class="his_detailY">
                                ${ele.years}
                                <img src='./image/paper.jpg' class="his_border"></img>
                            </div>
                            <div class="his_lineLong"></div>
                            <div class="his_detailTcnt">
                                <div class="his_detailT">${ele.title1}</div>
                                <div class="his_detailT">${ele.title2}</div>
                                <div class="his_detailT">${ele.title3}</div>
                            </div>
                            <div class="his_detailDcnt">
                                <div class="his_detailD">${ele.detail1}</div>
                                <div class="his_detailD">${ele.detail2}</div>
                                <div class="his_detailD">${ele.detail3}</div>
                                <div class="his_detailD">${ele.detail4}</div>
                            </div>
                        `
                        downDiv.insertBefore(downImg, downDiv.firstChild);//이미지 배치
                        //이음선 위치
                        var lineCh = downDiv.firstChild.nextSibling;
                        lineCh.after(lineM);
                        hisDown.append(downDiv);
                        his_yearFlex[i].append(hisDown);
                    } else {
                        const his_upDownCnt = document.createElement('div')
                        his_upDownCnt.classList.add('his_upDownCnt');
                        const hisUp = document.createElement('div');
                        hisUp.classList.add('his_up');
                        const UpDiv = document.createElement('div');
                        const lineM = document.createElement('img');
                        lineM.src = './image/LineM.svg'
                        lineM.classList.add('his_lineM', 'his_lineMup');
                        const UpImg = document.createElement('img');
                        UpImg.src=`${ele.image}`
                        UpImg.classList.add('his_yearImg', 'his_upImg');
                        UpDiv.classList.add('his_upCnt');
                        UpDiv.innerHTML = `
                            <div class="his_detailTcnt">
                                <div class="his_detailT">${ele.title1}</div>
                                <div class="his_detailT">${ele.title2}</div>
                                <div class="his_detailT">${ele.title3}</div>
                            </div>
                            <div class="his_detailDcnt">
                                <div class="his_detailD">${ele.detail1}</div>
                                <div class="his_detailD">${ele.detail2}</div>
                                <div class="his_detailD">${ele.detail3}</div>
                                <div class="his_detailD">${ele.detail4}</div>
                            </div>
                            <div class="his_detailY">
                                <img src='./image/paper.jpg' class="his_border"></img>
                                ${ele.years}
                            </div>
                            <div class="his_lineLong"></div>
                        `
                        var lineCh = UpDiv.lastChild.previousSibling;
                        lineCh.after(lineM);//세로 선
                        UpDiv.append(UpImg);//이미지 배치
                        hisUp.append(UpDiv);
                        his_yearFlex[i].append(hisUp);
                    }
                }
            }
        });
    })

    //----원하는 시대로 이동하기----
    const his_nav = document.querySelectorAll('.his_nav')

    his_nav.forEach((ele, idx) =>{
        ele.addEventListener('click', e=>{
            const location = document.querySelector(".his_" + idx + 'nav').offsetLeft;
            his_cnt.scrollLeft = location;
        })
    })
    
    // //세로 스크롤(모바일용)
    // function goToScroll(number) {
    //     var location = document.querySelector("." + number).offsetTop;
    //     window.scrollTo({top: location, behavior: 'smooth'});
    // }

    // -----가로 스크롤 터치하기------
    let isDown = false;
    let startX;
    let scrollLeft;
  
    his_cnt.addEventListener('mousedown', e => {
      isDown = true;
      his_cnt.classList.add('active');
      startX = e.pageX - his_cnt.offsetLeft;
      scrollLeft = his_cnt.scrollLeft;
    });
  
    his_cnt.addEventListener('mouseleave', () => {
      isDown = false;
      his_cnt.classList.remove('active');
    });
  
    his_cnt.addEventListener('mouseup', () => {
      isDown = false;
      his_cnt.classList.remove('active');
    });
  
    his_cnt.addEventListener('mousemove', e => {
      if (!isDown) return; 
      e.preventDefault();
      const x = e.pageX - his_cnt.offsetLeft;
      const walk = x - startX;
      his_cnt.scrollLeft = scrollLeft - walk;
    });

    //cursor grab grabbing 
    his_cnt.addEventListener('mousedown', e=>{
        his_cnt.classList.add('his_grabbing');
    })
    his_cnt.addEventListener('mouseup', e=>{
        his_cnt.classList.remove('his_grabbing');
    })
})()