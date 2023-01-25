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
    const his_upDownCnt = document.querySelector('.his_upDownCnt')
    // json 뿌리기
    loadItems().then((items)=>{
        items.forEach((ele, index) => {
            for(let i=0; i<his_yearFlex.length; i++){
                if(his_yearFlex[i].classList[0] === ele.century){
                    if(!index%2){
                        const hisDown = document.createElement('div');
                        hisDown.classList.add('his_down');
                        const downDiv = document.createElement('div');
                        const downImg = document.createElement('img');
                        const lineM = document.createElement('img');
                        lineM.src = '../image/lineM.svg'
                        downImg.src=`${ele.image}`
                        downImg.classList.add('his_yearImg');
                        downDiv.classList.add('his_downCnt');
                        downDiv.innerHTML = `
                            <div class="his_detailY">${ele.years}</div>
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
                        downDiv.insertBefore(downImg, downDiv.firstChild);
                        hisDown.append(downDiv);
                        his_upDownCnt.append(hisDown);
                    } else {
                        const hisUp = document.createElement('div');
                        hisUp.classList.add('his_up');
                        const UpDiv = document.createElement('div');
                        const UpImg = document.createElement('img');
                        UpImg.src=`${ele.image}`
                        UpImg.classList.add('his_yearImg');
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
                        `
                        UpDiv.append(UpImg);
                        hisUp.append(UpDiv);
                        his_upDownCnt.append(hisUp);
                    }
                }
            }
        });
    })
})()