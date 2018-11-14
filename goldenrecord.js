
    let record = document.createElement("div");
    record.className="circle";
    record.setAttribute('id', 'record');
    record.style.width="300px";
    record.style.height="300px";
    record.style.border="dashed";
    record.style.position="relative";
    record.style.marginLeft="50px";
    // record.style.border-radius="300px"
    document.body.appendChild(record);
    document.getElementById("record").style.borderRadius = "300px"; 

    let record0 = document.createElement("div");
    record0.className="circle";
    record0.setAttribute('id', 'record0');
    record0.style.width="280px";
    record0.style.height="280px";
    record0.style.left="50%"
    record0.style.top="50%"
    record0.style.margin="-142px -145px"
    record0.style.border="solid";
    record0.style.position="absolute";
    // record.style.border-radius="300px"
    
    document.getElementById("record").appendChild(record0); 
    document.getElementById("record0").style.borderRadius = "280px"; 
    
    let record1 = document.createElement("div");
    record1.className="circle";
    record1.setAttribute('id', 'record1');
    record1.style.width="60px";
    record1.style.height="60px";
    record1.style.border="solid";
    record1.style.left="50%"
    record1.style.top="50%"
    record1.style.margin="-30px -30px"
    record1.style.position="absolute";
    document.getElementById("record").appendChild(record1); 
    document.getElementById("record1").style.borderRadius = "50px"; 
    
    let record2 = document.createElement("div");
    record2.className="circle";
    record2.setAttribute('id', 'record2');
    record2.style.width="10px";
    record2.style.height="10px";
    record2.style.border="solid";
    record2.style.left="50%"
    record2.style.top="50%"
    record2.style.margin="-5px -5px"
    record2.style.position="absolute";
    
    document.getElementById("record").appendChild(record2);     
    document.getElementById("record2").style.borderRadius = "10px"; 
    
    let circle = document.createElement('style');
    circle.type = 'text/css';
    circle.innerHTML='.cssClass{border-radius:100px;color:black';

    let elView = document.createElement("div");
    elView.setAttribute('id','elView');
    elView.style.width="300px";
    elView.style.height="80px";
    elView.style.position="relative";
    elView.style.marginLeft="50px";
    document.body.appendChild(elView);
    
    // document.getElementById('record').className='circle';

    let needle = document.createElement("div");
    needle.setAttribute('id', 'needle');
    needle.style.width="10px";
    needle.style.height="20px";
    needle.style.border="solid";
    needle.style.color="black";
    needle.style.float="right";
    document.getElementById("elView").appendChild(needle);
    
    let player = document.createElement("div");
    player.setAttribute('id', 'player');
    player.style.width="300px";
    player.style.height="10px";
    player.style.color="black";
    player.style.border="solid";
    player.style.position="absolute";
    player.style.bottom="40px";
    document.getElementById("elView").appendChild(player);

    let playTime = document.createElement("div");
    playTime.style.float="right";
    playTime.style.margin="50px 0px";
    playTime.innerHTML+="| - - - - | - |  |<br\>- - - - - - - - - - |<br\>- - - - - - - - - -<br\>- - - - - - - - - -<br\>- - - -"
    document.getElementById("elView").appendChild(playTime);

    let pulsar=document.createElement("div");
    pulsar.id="pulsar";
    pulsar.innerHTML='<canvas id="cvsG" width="500" height="500" ></canvas>';
    document.body.appendChild(pulsar);
    var c=document.getElementById("cvsG");
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(250, 250);
    ctx.lineTo(500, 250);
    ctx.stroke();

    ctx.moveTo(250, 250);
    ctx.lineTo(420, 300);
    ctx.stroke();

    ctx.moveTo(250, 250);
    ctx.lineTo(300, 320);
    ctx.stroke();

    ctx.moveTo(250, 250);
    ctx.lineTo(240, 400);
    ctx.stroke();

    ctx.moveTo(250, 250);
    ctx.lineTo(200, 320);
    ctx.stroke();

    ctx.moveTo(250, 250);
    ctx.lineTo(180, 280);
    ctx.stroke();

    ctx.moveTo(250, 250);
    ctx.lineTo(100, 260);
    ctx.stroke();

    ctx.moveTo(250, 250);
    ctx.lineTo(120, 255);
    ctx.stroke();

    ctx.moveTo(250, 250);
    ctx.lineTo(180, 200);
    ctx.stroke();

    ctx.moveTo(250, 250);
    ctx.lineTo(220, 120);
    ctx.stroke();

    ctx.moveTo(250, 250);
    ctx.lineTo(270, 150);
    ctx.stroke();

    ctx.moveTo(250, 250);
    ctx.lineTo(380, 20);
    ctx.stroke();

    ctx.moveTo(250, 250);
    ctx.lineTo(290, 200);
    ctx.stroke();

    ctx.moveTo(250, 250);
    ctx.lineTo(380, 220);
    ctx.stroke()


    let vWave=document.createElement("div");
    vWave.id="vWave";
    vWave.style.position="absolute";
    vWave.style.top="100px";
    vWave.style.left="500px";
    vWave.innerHTML='<canvas id="vW" width="300" height="200" ></canvas>';
    document.body.appendChild(vWave);
    var v=document.getElementById("vW");
    var vtx = v.getContext("2d");
    vtx.beginPath();
    vtx.moveTo(0,0);
    vtx.lineTo(10,50);
    vtx.lineTo(20,0);
    vtx.lineTo(30,50);
    vtx.lineTo(40,0);
    vtx.lineTo(50,50);
    vtx.lineTo(60,0);
    vtx.lineTo(70,50);
    vtx.lineTo(80,0);
    vtx.lineTo(90,25);
    vtx.lineTo(110,25);
    vtx.lineTo(110,50);
    vtx.lineTo(120,50);
    vtx.lineTo(120,25);
    vtx.lineTo(130,0);
    vtx.lineTo(140,25)
    vtx.lineTo(150,0);
    vtx.lineTo(160,25);
    vtx.lineTo(160,50);
    vtx.lineTo(170,50);
    vtx.lineTo(180,25);
    vtx.lineTo(180,0);
    vtx.lineTo(190,25)
    vtx.lineTo(200,0);
    vtx.lineTo(210,25);
    vtx.lineTo(230,0);
    vtx.lineTo(240,25);
    vtx.lineTo(250,0);
    vtx.lineTo(260,25);
    vtx.lineTo(260,50);
    vtx.lineTo(270,25);   
    vtx.stroke();



    let scan=document.createElement("div");
    scan.id="scan";
    scan.style.position="absolute";
    scan.style.left="530px";
    scan.style.top="300px";
    scan.innerHTML='<canvas id="sW" width="500" height="200" ></canvas>';
    document.body.appendChild(scan);
    var s=document.getElementById("sW");
    var stx = s.getContext("2d");
    stx.beginPath();
    stx.moveTo(0,0);
    stx.lineTo(100,100);
    stx.lineTo(125,0);
    stx.lineTo(225,100);
    stx.lineTo(250,0);
    stx.lineTo(350,100);
    stx.lineTo(375,0);
    stx.stroke();

    let vid=document.createElement("div");
    vid.id="vid";
    vid.style.border="solid";
    vid.style.width="300px";
    vid.style.height="200px";
    vid.style.color="black"
    vid.style.position="absolute";
    vid.style.top="455px";
    vid.style.left="575px";
    
    document.body.appendChild(vid);

    let img=document.createElement("div");
    img.style.top="-300px";
    img.style.left="575px";
    img.id="img";
    img.style.border="solid";
    img.style.width="300px";
    img.style.height="200px";
    img.style.color="black"
    img.style.position="relative"
    document.body.appendChild(img);

    let imgC = document.createElement("div");
    imgC.id="imgC";
    imgC.className="circle";
    imgC.style.width="150px";
    imgC.style.height="150px";
    imgC.style.left="50%"
    imgC.style.top="50%"
    imgC.style.margin="-75px -75px"
    imgC.style.border="solid";
    imgC.style.position="absolute";
    // record.style.border-radius="300px"
    
    document.getElementById("img").appendChild(imgC); 
    document.getElementById("imgC").style.borderRadius = "150px";

  