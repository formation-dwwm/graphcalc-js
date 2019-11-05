function keyDetect(evt) {
        //  0-9 and Operator
        if ((evt.code.indexOf("Numpad") > -1) && (evt.code != "NumpadEnter")) {
      
                inputKeyPressed(evt.key);
        }

        // "x"
        if (evt.code == "KeyX") {
                inputKeyPressed(evt.key);
        }

        // "," --> "."
        // if (evt.code == "NumpadDecimal") {
        //      inputKeyPressed(evt.key);
        // }

        // +- --> P
        if (evt.code == "KeyP") {
                inputKeyPressed("-");
        }


        // "(" and ")"
        if ((evt.code == "Digit5") || (evt.code == "Minus")) {
                inputKeyPressed(evt.key);
        }

        // = --> Enter
        if( (evt.code == "NumpadEnter") || (evt.code == "Enter")) {
                equalKeyPressed();
        }

        // g --> toggleMode
        if (evt.code == "KeyG") {
                toggleMode();
        }

         // Del --> backspace
         if (evt.code == "Backspace" ) {
                backKeyPressed();
        }


        // AC --> escape
        if (evt.code == "Escape") {
                clearKeyPressed();
        }

}

window.addEventListener("click"){
        
}