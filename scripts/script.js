setTimeout(function(){
        $(".heading").typed({
            strings: ["I like to code.", "I like to read.", "I like to create websites.", "Angels & Demons is my favorite book.", "I prefer C++ over C", "Java is my favorite language", "Computers make very fast, very accurate mistakes.", "Artificial intelligence usually beats real stupidity.", "If at first you don’t succeed; call it version 1.0.", "My software never has bugs. It just develops random features.", "Programmers are tools for converting caffeine into code."],
            typeSpeed: 50, // typing speed
            backDelay: 750, // pause before backspacing
            loop: true, // loop on or off (true or false)
            loopCount: false, // number of loops, false = infinite
            callback: function(){ } // call function after typing is done
        });
    }, 0);


