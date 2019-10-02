function setup () {
    createCanvas(400, 400);
    angleMode(DEGREES)
    
}

function draw () {
    background(0);
    translate(200, 200);
    rotate(-90);
    let h = hour ();
    let m = minute ();
    let s = second ();    

    strokeWeight(8)
    stroke (255, 100, 150);
    noFill();
    let end = map (s, 0, 59, 0, 360);
    arc (0, 0, 300, 300, 0, end); 

    stroke (150, 100, 255);
    let end2 = map (m, 0, 59, 0, 360);
    arc (0, 0, 280, 280, 0, end2);

    stroke (150, 255, 100);
    let end3 = map (h % 12, 0, 11 , 0, 360);
    arc (0, 0, 260, 260, 0, end3);

    strokeWeight(4)
    push ();
    stroke (255, 100, 150);
    rotate(end);
    line(0,0,100,0)
    pop();

    push()
    stroke (150, 100, 255);
    rotate(end2)
    line(0,0,90,0)
    pop();

    push();
    stroke (150, 255, 100);
    rotate(end3)
    line(0,0,70,0)
    pop();

  
}