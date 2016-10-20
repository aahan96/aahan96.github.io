setTimeout(function(){
        $(".heading").typed({
            strings: ["I like to code", "I like to read", "I like to program websites"],
            typeSpeed: 50, // typing speed
            backDelay: 750, // pause before backspacing
            loop: true, // loop on or off (true or false)
            loopCount: false, // number of loops, false = infinite
            callback: function(){ } // call function after typing is done
        });
    }, 0);


