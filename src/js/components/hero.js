
var heroService_var_path = '../../../src/img/hero/';
var heroService_var_count = 27;
var heroService_var_currentIndex = -1;
var heroService_var_indexHistory = [];
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
    heroService_var_indexHistory = cookieService_get('heroService_var_indexHistory', ',').map(Number);
}

function heroService_main(){
    var fileExt = ['jpg'];
    var fileName = [];
    fileExt.forEach(ext => {

        while(heroService_var_currentIndex < 0){
            heroService_var_currentIndex = getRandom(heroService_var_count);
            // console.log(heroService_var_currentIndex);

            if(heroService_var_indexHistory.indexOf(heroService_var_currentIndex) != -1){
                heroService_var_currentIndex = -1;
                if(heroService_var_indexHistory.length >= heroService_var_count){
                    heroService_var_indexHistory = [];
                }
            }else{
                if(heroService_var_indexHistory.length >= heroService_var_count){
                    heroService_var_indexHistory = [];
                }
                heroService_var_indexHistory.push(heroService_var_currentIndex);
            }
        }

        fileNameBuffer = "url('" + heroService_var_path;
        fileNameBuffer += ' (' + heroService_var_currentIndex + ')' + '.' + ext;
        fileNameBuffer += "')";
        fileName.push(fileNameBuffer);
        
        heroService_var_currentIndex = -1;
        cookieService_set('heroService_var_indexHistory', heroService_var_indexHistory.toString());
        // console.log(heroService_var_indexHistory);
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
