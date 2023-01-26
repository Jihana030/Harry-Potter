(function(){
    'use strict'
    // 마우스 휠 가로스크롤
    const his_cnt = document.querySelector('.his_cnt')
    window.addEventListener('wheel', (e) => {
        his_cnt.scrollLeft += e.deltaY;
    });

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
                        lineM.classList.add('his_lineM');
                        // 에피소드별 이미지
                        downImg.src=`${ele.image}`
                        downImg.classList.add('his_yearImg', 'his_downImg');
                        
                        downDiv.innerHTML = `
                            <div class="his_detailY">${ele.years}</div>
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
                        lineM.classList.add('his_lineM');
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
                            <div class="his_detailY">${ele.years}</div>
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


})()