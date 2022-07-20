status="";
objects= [];

function preload(){
    
}
function setup(){
    canvas=createCanvas(380, 380);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(380,380);
    video.hide();
    objectDetector=ml5.objectDetector('cocossd', modelLoaded);
    console.log("detechting obj");
}

function modelLoaded(){
    console.log("COCOSSD loaded...");
    status=true;
    objectDetector.detect(video,gotResults);
}

function gotResults(error,results){
    if(error){
        console.log(error);
    }
    console.log("Objects Detected!!")
    console.log(results);
    objects= results;
}

function draw() {
    image(video, 0, 0, 380, 380);
  
        if(status != "")
        {
          for (var i = 0; i < objects.length; i++) {
            document.getElementById("status").innerHTML = "Status : Object Detected";
            document.getElementById("num_of_obj").innerHTML = "Number Of Objects Are : " + objects.length;     
            fill(255, 0, 0);
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
            noFill();
            stroke(255, 0, 0);
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
          }
        }
    
  
    }
  