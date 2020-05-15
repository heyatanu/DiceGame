var s1=0;
    var s2 =0;
    var d=0;
function fun(){
    
    var pl2= Math.random();
    pl2=pl2*7;


    var pl1= Math.random();
    pl1=pl1*7;

    pl1=Math.floor(pl1);

    pl2=Math.floor(pl2);
    if(pl1===0 ){
        pl1=pl1+1;
        
    }
    else if(pl2===0){
        pl2=pl2+1;
    }


    if(pl1>pl2){
        document.getElementById('text').innerHTML="**Player-1 Win The Match";
        s1=s1+1;
    }
    else if(pl1<pl2){
        document.getElementById('text').innerHTML="Player-2 Win The Match**";
        s2=s2+1;
    }
    else{
        document.getElementById('text').innerHTML="**The Match Is Draw**";
        d++;
    }
    if (pl1===1 ){
        document.getElementById('image').src = "image/one.png";
    }
    else if (pl1===2 ){
        document.getElementById('image').src = "image/two.png";
    }
    else if (pl1===3 ){
        document.getElementById('image').src = "image/three.png";
    }
    else if (pl1===4 ){
        document.getElementById('image').src = "image/four.png";
    }
    else if (pl1===5 ){
        document.getElementById('image').src = "image/five.png";
    }
    else if (pl1===6 ){
        document.getElementById('image').src = "image/six.png";
    }

    if (pl2===1 ){
        document.getElementById('imagetwo').src = "image/one.png";
    }
    else if (pl2===2 ){
        document.getElementById('imagetwo').src = "image/two.png";
    }
    else if (pl2===3 ){
        document.getElementById('imagetwo').src = "image/three.png";
    }
    else if (pl2===4 ){
        document.getElementById('imagetwo').src = "image/four.png";
    }
    else if (pl2===5 ){
        document.getElementById('imagetwo').src = "image/five.png";
    }
    else if (pl2===6 ){
        document.getElementById('image').src = "image/six.png";
    }


    document.getElementById("p1").innerHTML=s1;
    document.getElementById("p2").innerHTML=s2;
    var k=s1+s2+d;
    document.getElementById("tg").innerHTML=k;
    document.getElementById("draw").innerHTML=d;
}


document.getElementById("btn").onclick = fun;
document.onkeypress=fun;