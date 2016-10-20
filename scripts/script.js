$(document).ready(function(){
        $(".heading").typed({
            strings: ["I like to code.", "I like to read.", "I like to create websites.", "I prefer C++ over C.", "Java is my favorite language.", "Computers make very fast, very accurate mistakes.", "Artificial intelligence usually beats real stupidity.", "If at first you do not succeed; call it version 1.0.", "My software never has bugs. It just develops random features.", "Programmers are tools for converting caffeine into code."],
            typeSpeed: 30, // typing speed
            backDelay: 750, // pause before backspacing
            loop: true, // loop on or off (true or false)
            loopCount: false, // number of loops, false = infinite
            shuffle: true,
            showCursor: false,
            callback: function(){ }, // call function after typing is done
            resetCallback: function() { newTyped(); }
        });
    }, 0);

