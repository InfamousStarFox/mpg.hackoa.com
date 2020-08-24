var cookie = {
    get: function (CookieName) {
        var cookie = document.cookie.split(";").find(function(item) {
            return item.trim().startsWith(CookieName+'=');
        });
        return cookie ? decodeURIComponent(cookie?.split('=')[1]) : '';
    },
    set: function (CookieName, CookieValue) {
        var CookieDate = new Date;
        CookieDate.setFullYear(CookieDate.getFullYear() + 10);
        document.cookie = CookieName + '=' + encodeURIComponent(CookieValue) + ';expires=' + CookieDate.toUTCString() + ';path=/;secure';
    },
    delete: function (CookieName) {
        document.cookie = CookieName + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;secure';
    },
    deleteAll: function () {
        document.cookie.split(";").forEach(function(item){
            cookie.delete(item.trim().split('=')[0]);
        });
    }
}