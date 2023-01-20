(function(){
    'use strict'

    const his_cnt = document.querySelector('.his_cnt')
    window.addEventListener('wheel', (e) => {
        his_cnt.scrollLeft += e.deltaY;
    });
})()