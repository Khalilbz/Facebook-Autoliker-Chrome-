function facebookfn()
{
if(x == undefined){var x = 0;}
console.log("facebook fn working ...");
    for(var i=0;i<=100;i++){
        var a = document.getElementsByClassName("UFILikeLink")[i];
        if(a != undefined){
            if ((a.parentNode.tagName.toLowerCase() == 'div') && (a.getAttribute("data-testid").indexOf("unlike") == -1) ){
                console.log(a);
                a.click();
                x += 1;
            }
        }
    }
//console.log("Total = "+x);
    if(x>0){
        var iDiv = document.createElement('div');
        iDiv.id = 'prnotifi';
        iDiv.className = 'prfixed';
        iDiv.innerHTML='<style> div.prfixed { position: fixed; top: 40px; left: 0; width: 300px; border: 3px solid #0014ad; background-color: #007ac7; color: white; font-size: 30px; text-align: center; }</style> <div class="prfixed"> <b>'+x+'</b> Liked </div>';
        document.getElementsByTagName('body')[0].appendChild(iDiv);
        setTimeout(function(){
            iDiv.remove();
        },2000);
    }
}

function mainfn()
{

    var THE_GOD = "Allah";
    //Bismi allah arra7man arra7im
    var curlink = window.location.href;

    if(
        (curlink =="https://www.facebook.com/") ||
        (curlink =="https://web.facebook.com/") ||
        (curlink.substring(0,26) =="https://www.facebook.com/?") ||
        (curlink.substring(0,26) =="https://web.facebook.com/?")

    ){facebookfn();}

}

//alert("001");

setInterval(function(){
    mainfn();
}, 1000);
