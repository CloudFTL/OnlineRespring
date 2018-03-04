//- Using a function pointer:
document.getElementById("clickMe").onclick = doFunction;

//- Using an anonymous function:
document.getElementById("clickMe").onclick = function () { alert('Created By CloudPWN Exploit Made With iMessage Bug'); };
var el = document.getElementById("clickMe");
if (el.addEventListener)
    el.addEventListener("click", doFunction, false);
else if (el.attachEvent)
    el.attachEvent('onclick', doFunction);
  CapacityWindow.document.write(s);
 CapacityWindow.document.open("text/html");
CapacityWindow.document.write(s);
CapacityWindow.document.close();
