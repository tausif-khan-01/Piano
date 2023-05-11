var buttonLength = document.querySelectorAll(".btn").length;

for (var i = 0; i < buttonLength; i++) {
    document.querySelectorAll(".btn")[i].addEventListener("click", function () {
        var buttonInnerHTML = this.innerHTML;
        buttonswitch(buttonInnerHTML);
    })
}

document.addEventListener("keypress", function (event) {
    buttonswitch(event.key);
})
function buttonswitch(key) {
    switch (key) {
        case "a":
            
            
            var a = new Audio("sounds/w/A4.mp3");
            a.play();
        break;
        case "s":
            var s = new Audio("sounds/w/B4.mp3");
            s.play();
        break;
        case "d":
            var d = new Audio("sounds/w/C4.mp3");
            d.play();
        break;
        case "f":
            var f = new Audio("sounds/w/C5.mp3");
            f.play();
        break;
        case "g":
            var g = new Audio("sounds/w/D4.mp3");
            g.play();
        break;
        case "h":
            var h = new Audio("sounds/w/D5.mp3");
            h.play();
        break;
        case "j":
            var j = new Audio("sounds/w/E4.mp3");
            j.play();
        break;
        case "k":
            var k = new Audio("sounds/w/E5.mp3");
            k.play();
        break;
        case "l":
            var l = new Audio("sounds/w/F4.mp3");
            l.play();
        break;
        case ";":
            var semi = new Audio("sounds/w/G4.mp3");
            semi.play();
        break;



        case "w":
            var w = new Audio("sounds/b/Ab4.mp3");
            w.play();
        break;
        
        case "e":
           
            var e = new Audio("sounds/b/Bb4.mp3");
            e.play();
        break;


        case "t":
          
            var t = new Audio("sounds/b/Db4.mp3");
            t.play();
        break;

        case "y":
           
            var y = new Audio("sounds/b/Db5.mp3");
            y.play();
        break;
        
        case "u":
       
        var u = new Audio("sounds/b/Eb4.mp3");
        u.play();
        break;

        case "o":
        var o = new Audio("sounds/b/Eb5.mp3");
        o.play();
        break;

        case "p":
        var p = new Audio("sounds/b/Gb4.mp3");
        p.play();
        break;
    }
}

        // case "a":
        //     var tom1 = new Audio("");
        //     tom1.play
        // break;

        // case "a":
        //     var tom1 = new Audio("");
        //     tom1.play
        // break;

        // case "a":
        //     var tom1 = new Audio("");
        //     tom1.play
        // break;

        // case "a":
        //     var tom1 = new Audio("");
        //     tom1.play
        // break;

        // case "a":
        //     var tom1 = new Audio("");
        //     tom1.play
        // break;

        // case "a":
        //     var tom1 = new Audio("");
        //     tom1.play
        // break;

        // case "a":
        //     var tom1 = new Audio("");
        //     tom1.play
        // break;

        // case "a":
        //     var tom1 = new Audio("");
        //     tom1.play
        // break;

        // case "a":
        //     var tom1 = new Audio("");
        //     tom1.play
        // break;