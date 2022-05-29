var mEvent="empty";
var lastposition_x, lastposition_y;

canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");

color="black";
widthofline=1;

canvas.addEventListener("mousedown", my_mdown);
function my_mdown(e){

    mEvent="mousedown";
}

canvas.addEventListener("mousemove", my_mm);
function my_mm(e){

    cpx= e.clientX - canvas.offsetLeft;
    cpy= e.clientY - canvas.offsetTop;

    if (mEvent == "mousedown"){
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=widthofline;

    console.log("last position of x and y coordinates=");
    console.log("x="+ lastposition_x + "y=" + lastposition_y);
    ctx.moveTo(lastposition_x, lastposition_y);

    console.log("current position of x and y coordinates=");
    console.log("x="+ cpx + "y=" + cpy);
    ctx.lineTo(cpx, cpy);
    ctx.stroke();

    }

    lastposition_x=cpx;
    lastposition_y=cpy;

}



canvas.addEventListener("mouseUp", my_mup);

function my_mup(e){

    mEvent="mouseUp";
}



canvas.addEventListener("mouseleave", my_ml);

function my_ml(e){

    mEvent="mouseleave";
}