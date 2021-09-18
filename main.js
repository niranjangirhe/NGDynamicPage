var jsonobj;
var intenturl = window.location.href;
console.log(intenturl);
var btn1="";
var btn2="";
LoadFirst()
function Get(yourUrl) {
    var Httpreq = new XMLHttpRequest(); // a new request
    Httpreq.open("GET", yourUrl, false);
    Httpreq.send(null);
    console.log(Httpreq.responseText+"done")
    jsonobj = JSON.parse(Httpreq.responseText);
    document.getElementById("title1").innerHTML = jsonobj.title1
    document.getElementById("title2").innerHTML = jsonobj.title2
    document.getElementById("title3").innerHTML = jsonobj.title3
    document.getElementById("btn1").innerHTML = jsonobj.btn1
    document.getElementById("btn2").innerHTML = jsonobj.btn2
    document.getElementById("para1").innerHTML = jsonobj.para1
    document.getElementById("para2").innerHTML = jsonobj.para2
    document.getElementById("para3").innerHTML = jsonobj.para3
    document.getElementById("heading2").innerHTML = jsonobj.heading2
    document.getElementById("subtitle2").innerHTML = jsonobj.subtitle2
    document.getElementById("subtitle3").innerHTML = jsonobj.subtitle3
    document.getElementById("img").src = jsonobj.img
    console.log("hi",jsonobj.title1,jsonobj.title2,jsonobj.title3,jsonobj.para1,jsonobj.para2,jsonobj.para3,jsonobj.heading2,jsonobj.subtitle2,jsonobj.subtitle3)
    btn1=jsonobj.btn1
    btn2=jsonobj.btn2
    btn3=jsonobj.btn3
}
function LoadFirst(){

    //document.getElementById("animeimg").srcset="https:/gogocdn.net/cover/boku-no-hero-academia-5th-season-dub.png"
    if (intenturl.includes(".json")) {
        console.log("Hi")
        var intentindex = intenturl.indexOf("raw");
        intenturl ="https://" + intenturl.substring(intentindex);
        console.log(intenturl);
        Get(intenturl)
        // var intentindex = intenturl.indexOf("/c");
        // intenturl = intenturl.substring(intentindex + 10);
        // intenturl = intenturl.replaceAll("-", " ")
        // document.getElementById("animename").innerHTML = titleCase(decodeURIComponent(intenturl));
        // document.getElementById("message").innerHTML = "To watch, please download the app<br><br>" + document.getElementById("message").innerHTML;
        //
    } else{

        // var intentindex = intenturl.indexOf("~");
        // intenturl = intenturl.substring(intentindex + 1);
        // intentindex = intenturl.indexOf("~");
        // var title = intenturl.substring(0, intentindex);
        // intenturl = intenturl.substring(intentindex + 1);
        // intentindex = intenturl.indexOf("~");
        // var subtitle = intenturl.substring(0, intentindex);
        // title = decodeURIComponent(title)
        // subtitle = decodeURIComponent(subtitle)
        // document.getElementById("animename").innerHTML = titleCase(title) + '<br>' + titleCase(subtitle);
        // document.getElementById("message").innerHTML = "To watch, please download the app<br><br>" + document.getElementById("message").innerHTML;
    }
}
async function download() {
    
}
