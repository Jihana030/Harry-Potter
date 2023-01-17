(function(){
    'use strict';
    
    const pro_img_cnt = document.querySelector('.pro_cnt');
    
    function loadItems(){
        return fetch("./professor.json")
            .then((response)=>response.json())
            .then((json)=>json.items);
    }
    loadItems().then((items)=>{
        items.forEach((ele, i) => {
            const imgDiv = document.createElement('div');
            const image = document.createElement('img')
            pro_img_cnt.appendChild(imgDiv);
            imgDiv.classList.add('proImage', `imgNum${i}`);
            image.src=`${ele.image}`;
            imgDiv.append(image);
        });
    })




})()