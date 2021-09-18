var jsonobj;
var intenturl = window.location.href;
console.log(intenturl);
LoadFirst()
function Get(yourUrl) {
    var Httpreq = new XMLHttpRequest(); // a new request
    Httpreq.open("GET", yourUrl, false);
    Httpreq.send(null);
    console.log(Httpreq.responseText+"done")
    jsonobj = JSON.parse(Httpreq.responseText);
    document.getElementById("version").innerHTML = jsonobj[0].version
    var changelog = jsonobj[0].changelog
    changelog = changelog.substring(changelog.indexOf("*"));
    document.getElementById("changelog").innerHTML = changelog.replaceAll("\n", "<br>")
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
