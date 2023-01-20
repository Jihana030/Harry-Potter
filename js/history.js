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
    const his_yearFlex = document.querySelector('.his_yearFlex')
    const his_upDownCnt = document.querySelector('.his_upDownCnt')
    // json 뿌리기
    loadItems().then((items)=>{
        items.forEach((ele, i) => {
            if(i%2 || i===0){
                const hisDown = document.createElement('div');
                hisDown.classList.add('his_down');
                const downDiv = document.createElement('div');
                const downImg = document.createElement('img');
                downImg.src=`${ele.image}`
                downDiv.innerHTML = `
                    <div>${ele.years}</div>
                    <div>${ele.title1}</div>
                    <div>${ele.title2}</div>
                    <div>${ele.title3}</div>
                    <div>${ele.detail1}</div>
                    <div>${ele.detail2}</div>
                    <div>${ele.detail3}</div>
                    <div>${ele.detail4}</div>
                    <div>${downImg}</div>
                `
                hisDown.append(downDiv);
                his_upDownCnt.append(hisDown);
            } else {
                const hisUp = document.createElement('div');
                hisUp.classList.add('his_up');
                const UpDiv = document.createElement('div');
                const UpImg = document.createElement('img');
                UpImg.src=`${ele.image}`
                UpDiv.innerHTML = `
                    <div>${UpImg}</div>
                    <div>${ele.title1}</div>
                    <div>${ele.title2}</div>
                    <div>${ele.title3}</div>
                    <div>${ele.detail1}</div>
                    <div>${ele.detail2}</div>
                    <div>${ele.detail3}</div>
                    <div>${ele.detail4}</div>
                    <div>${ele.years}</div>
                `
                hisUp.append(UpDiv);
                his_upDownCnt.append(hisUp);
            }
        });
    })
})()