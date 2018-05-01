function showPic(whichpic){
var source=whichpic.getAttribute("href");
var picture=document.getElementById("picture");
picture.setAttribute("src",source);
var text=whichpic.getAttribute("title");
var tupian=document.getElementById("tupian");
tupian.firstChild.nodeValue=text;

}
