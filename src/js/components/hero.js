
var heroService_var_path = '../../../src/img/hero/';
var heroService_var_count = 54;
var heroService_var_interval = 900000;
var heroService_var_documentNode = document.documentElement;
var heroService_var_styleVar = '--hero-background-image';

function heroService(){
    heroService_init();
    heroService_main();
    setInterval(heroService_main, heroService_var_interval);
}

function heroService_init(){
    heroService_var_documentNode.style.setProperty(heroService_var_styleVar, '#');
}

function heroService_main(){
    var fileExt = ['jpg'];
    var fileName = [];
    fileExt.forEach(ext => {
        fileNameBuffer = "url('" + heroService_var_path;
        fileNameBuffer += ' (' + getRandom(heroService_var_count).toString() + ')' + '.' + ext;
        fileNameBuffer += "')";
        fileName.push(fileNameBuffer);
    });
    // console.log(fileName);
    heroService_inject(fileName.join(','));
}

function heroService_inject(src){
    heroService_var_documentNode.style.setProperty(heroService_var_styleVar, src);
}

function getRandom(limit){
    return Math.floor(Math.random() * limit) + 1;
}
