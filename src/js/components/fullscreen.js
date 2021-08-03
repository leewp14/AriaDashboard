
function fullScreenService(){
    fullScreenService_init();
}

function fullScreenService_init(){
    documentNode = document.getElementById('hero-parent')
    documentNode.addEventListener('dblclick', fullScreenService_main);
}

function fullScreenService_main(){
    // https://developer.mozilla.org/en-US/docs/Web/API/Fullscreen_API
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    }else{
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    }
}
