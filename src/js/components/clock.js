
var clockService_var_interval = 1000;
var clockService_var_clockNode = new Date();
var clockService_var_isTick = true;
var clockService_var_tickFlag = 1;
var clockService_var_tickDelay = 1;

function clockService(){
    setInterval(clockService_main, clockService_var_interval);
}

function clockService_main(){
    var clockNode = clockService_var_clockNode;

    var timeHour = padZero(clockNode.getHours()) ?? '10';
    var timeSeperator = '<span>:</span>';
    if(clockService_var_isTick){
        if(clockService_var_tickFlag >= 0 && clockService_var_tickFlag < clockService_var_tickDelay){
            timeSeperator = '<span style="visibility: hidden";>:</span>';
            clockService_var_tickFlag++;
        }else{
            clockService_var_tickFlag = 0;
        }
    }
    var timeMinute = padZero(clockNode.getMinutes()) ?? '45';
    var timeFullString = clockNode.toUTCString() ?? 'Tue, 03 Aug 2021 19:52:45 GMT';

    var time = timeHour + timeSeperator + timeMinute;
    var timeFull = timeFullString;

    clockService_inject(time, timeFull);
    clockService_var_clockNode = new Date();
}

function clockService_inject(time, timeFull){
    var injectTimeNode = document.getElementById('clock-time');
    var injectTimeFullNode = document.getElementById('clock-time-full');

    if(injectTimeNode && injectTimeFullNode){
        injectTimeNode.innerHTML = time;
        injectTimeFullNode.innerHTML = timeFull;
    }
}

function padZero(input){
    input = input.toString();
    if(parseInt(input) < 10){
        return '0' + parseInt(input);
    }
    return input;
}
