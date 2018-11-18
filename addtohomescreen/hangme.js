function isBookmarkLaunch(){return (window.navigator.standalone);}
if( isBookmarkLaunch() ){
document.write('<center><a class="b" onclick="f1()" id="b1" href="itms-services://?action=download-manifest&url=https://raw.githubusercontent.com/CloudFTL/OnlineRespring/master/SlowDownMyDevice.plist">RUN HANG ME!</a></center>');
document.write('<center><a class="b" id="b2" style="display:none">running...</a></center>');
document.write("<center><a id='t' style='display:none'>This shouldn't take that long...<br>Maybe respring didn't work.<br>Maybe you have to wait a bit longer.<br>Or maybe you have to retry.</a></center>");
}
else{
document.write('<p>1. Tap the square with the arrow pointing up on the bottom of the mobile Safari browser.</p>');
document.write('<p>2. Choose "Add to Home Screen".</p>');
document.write('<p>3. Change the icon title if you want, and tap the "Add" button.</p>');
}
function f1() {
document.getElementById("b1").innerHTML = "running...";
document.getElementById("b2").style.display="inline-block";
document.getElementById("b1").style.display="none";
window.setTimeout(f2, 3000);
}
function f2() {
document.getElementById("b2").innerHTML = "finished";
window.setTimeout(f3, 15000);
}
function f3() {
document.getElementById("b2").innerHTML = "Still waiting?";
document.getElementById("t").style.display="inline-block";
window.setTimeout(f4, 2500);
}
function f4() {
document.getElementById("b2").innerHTML = "retry";
document.getElementById("b1").innerHTML = "retry";
document.getElementById("b1").style.display="inline-block";
document.getElementById("b2").style.display="none";
document.getElementById("b2").innerHTML = "<3 Check The Plist";
}
