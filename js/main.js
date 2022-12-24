
//  var c;
//     for (let x=10; x<400; x+=10) {
//         for(let y=10; y<400; y+=20) {
//             c = Shape.Circle(x,y,5);
//             c.fillColor = 'green';
//         }
//     }


$(document).ready (function() {
    'use strict';
    paper.install(window);
    paper.setup(document.getElementById('mainCanvas'));
    var tool = new Tool ();
    var c = Shape.Circle (200, 200, 150);
    c.fillColor = 'green';
    var text = new PointText (200, 200); 
    text.justification = 'center'; 
    text.fillColor = 'black'
    text.fontSize = 30;
    text.content = 'Салам Алейкум';

 tool.onMouseDown = function(event) {
    var c = Shape.Circle(event.point, 5);
    c.fillColor = 'white';
 };
    paper.view.draw();
});







