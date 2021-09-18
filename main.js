var jsonobj;
var intenturl = window.location.href;
var btnlink=[];
LoadFirst()
function Get(yourUrl) {
    var Httpreq = new XMLHttpRequest();
    Httpreq.open("GET", yourUrl, false);
    Httpreq.send(null);
    jsonobj = JSON.parse(Httpreq.responseText);
    document.getElementById("pgtitle0").innerHTML = jsonobj.pgtitle
    document.getElementById("pgtitle1").innerHTML = jsonobj.pgtitle
    document.getElementById("title1").innerHTML = jsonobj.title1
    document.getElementById("title2").innerHTML = jsonobj.title2
    document.getElementById("title3").innerHTML = jsonobj.title3
    document.getElementById("btn0").innerHTML = jsonobj.btn0
    document.getElementById("btn1").innerHTML = jsonobj.btn1
    document.getElementById("btn2").innerHTML = jsonobj.btn2 + document.getElementById("btn2").innerHTML
    document.getElementById("para1").innerHTML = jsonobj.para1
    document.getElementById("para2").innerHTML = jsonobj.para2
    document.getElementById("para3").innerHTML = jsonobj.para3
    document.getElementById("heading2").innerHTML = jsonobj.heading2
    document.getElementById("subtitle2").innerHTML = jsonobj.subtitle2
    document.getElementById("subtitle3").innerHTML = jsonobj.subtitle3
    document.getElementById("fb").href = jsonobj.fb
    document.getElementById("twiter").href = jsonobj.twiter
    document.getElementById("linkedin").href = jsonobj.linkedin
    document.getElementById("insta").href = jsonobj.insta
    document.getElementById("mail").innerHTML = jsonobj.mail
    document.getElementById("contactpara1").innerHTML = jsonobj.contactpara1
    document.getElementById("address").innerHTML = jsonobj.address
    document.getElementById("mailaction").action = "https://formsubmit.co/"+ jsonobj.mail
    btnlink.push(jsonobj.btn0link)
    btnlink.push(jsonobj.btn1link)
    btnlink.push(jsonobj.btn2link)
}
function LoadFirst(){

     if (intenturl.includes(".json")) {
        var intentindex = intenturl.indexOf("raw");
        intenturl ="https://" + intenturl.substring(intentindex);
        Get(intenturl)
    }
    else
    {
        Get("raw.githubusercontent.com/niranjangirhe/NGDynamicPage/master/SampleJson/sample.json")
    }
}
function link(num)
{
    if(btnlink[num]!="" && btnlink[num]!=null)
    {
        window.location.href=btnlink[num]
    }
}

