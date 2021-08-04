
function cookieService_set(name, value){
    document.cookie = name + "=" + value + '; SameSite=Lax; ';
}

function cookieService_get(name, delimiter){
    try{
        var cookies = document.cookie.split('; ');
        if(name){
            // https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie
            if(delimiter){
                try{
                    return cookies.find(row => row.startsWith(name)).split('=')[1].split(delimiter) ?? null;
                }catch{
                    // continue
                }
            }
            return cookies.find(row => row.startsWith(name)).split('=')[1] ?? null;
        }
        return cookies;
    }catch{
        return delimiter ? [] : ';'
    }
}
