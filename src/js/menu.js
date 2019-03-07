window.onload = function() {
    
    // if($('body').width()<767){
    //     var fragment = document.createDocumentFragment();
    //     fragment.appendChild(document.getElementById('head_in'));
    //     document.getElementById('head_menu').appendChild(fragment);
    // }
    // else{
    //     var fragment = document.createDocumentFragment();
    //     fragment.appendChild(document.getElementById('head_in'));
    //     document.getElementById('cont').appendChild(fragment);
    // }
    document.querySelector('.changer').onclick = menuShow;
    document.querySelector('.closer').onclick = menuHide;
    function menuShow() {
        document.querySelector('.menu').style.left = 0;
    }

    function menuHide() {
        document.querySelector('.menu').style.left = '-250px';
    }
}

// function MoveDiv() {
//     var fragment = document.createDocumentFragment();
// 	fragment.appendChild(document.getElementById('head_in'));
// 	document.getElementById('head_menu').appendChild(fragment);
// }