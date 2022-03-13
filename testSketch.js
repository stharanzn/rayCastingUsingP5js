
var sketch2 = function(p){
    p.setup = function(){
        p.createCanvas(400, 400);
        // p.background(100);
    }

    p.draw = function(){
        p.stroke(255);
        p.push();
        p.translate(1, 1);
        p.line(0, 0, 100, 100);
        p.pop();

        p.ellipse(100, 100, 100, 50);
    }
}

var mySketch = new p5(sketch2, "testSketch");