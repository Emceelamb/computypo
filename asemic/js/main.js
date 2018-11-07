let fft, amplitude;

function preload(){
    soundFormats('m4a')
    bucky = loadSound('data/bucky.m4a')
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    bucky.setVolume(0.5);
    bucky.play();

    fft = new p5.FFT(0.9,256);

    amplitude = new p5.Amplitude();
        
}

let xPos=0;
let levelArray=[];
let wordArray = [];
let currentWord = [];
let hh = 0;
function draw() {
    // background(30);
    // console.log(waveform)
    noFill();
    stroke(30);
    strokeWeight(1);   
    
    // get word start
    // get amplitude
    let level = amplitude.getLevel();
    let waveform = fft.waveform();
    if(level>0.01){
        currentWord.push(waveform);
    } 
    // get word end
    // push word to array

    if(currentWord.length>0&&level>0.03){
        wordArray.push(currentWord[currentWord.length-1]);
        // console.log('word added', level);
        currentWord = [];
    }

    // draw word from array
    push();
    translate(width/2-350,100);
    if(wordArray.length > 1){
        for(let i = 0; i < wordArray.length; i++){
            
            push();
            
            let ww = i*80
            if(ww>i%5){
                ww=i%6*80; 
            }
            translate(ww,i*3)

            stroke(0,15,85);
            strokeWeight(1);   
            beginShape();
            for(let j = 0;j<wordArray[i].length;j++){
                var x = map(j,0,wordArray[i].length,0,80);
                var y = map(wordArray[i][j],-0.2,0.2,0,30);
                
                curveVertex(x,y);
                
            }
            endShape();
            pop();
            
        }
    }
    pop();
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function togglePlay() {
    if (bucky.isPlaying()) {
        bucky.pause();
    } else {
        bucky.loop();
    }
}

function mouseClicked(){
    togglePlay();
}

function drawFFT(cword_){
    let cword = cword_;
    beginShape();
    strokeWeight(1);
    for(var i =0; i<cword.length; i++){
        var x = map(i,0,cword.length, 0,width);
        var y = map(cword[i],-1,1,0,height);
        vertex(x,y);
    }        
    endShape();    
}


function drawAmp(){
    let level = amplitude.getLevel();
    let mappedLevel = map(level, 0,0.5,0,100);
    levelArray.push(mappedLevel);
    translate(0,height/2);
    beginShape();
    for(let i = 0; i<levelArray.length; i++){
        curveVertex(i, levelArray[i]);
    }
    endShape();
}