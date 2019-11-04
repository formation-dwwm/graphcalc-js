function keyDetect(evt) {
        //  0-9
        if ((evt.keyCode > 47) && (evt.keyCode < 58)) {
                inputKeyPressed(evt.key);
        }

        // Opérateurs: multiply Add Minus ...
        if ((evt.keyCode == 42) || (evt.keyCode == 43) || (evt.keyCode == 45) || (evt.keyCode == 47)) {
                inputKeyPressed(evt.key);
        }

        // "x"
        if (evt.keyCode == 120) {
                inputKeyPressed(evt.key);
        }

        // "," --> "."
        if (evt.keyCode == 46) {
                inputKeyPressed(evt.key);
        }

        // +- --> ?

        // "(" and ")"
        if ((evt.keyCode == 40) || (evt.keyCode == 41)) {
                inputKeyPressed(evt.key);
        }

        // = --> Enter
        if (evt.keyCode == 13) {
                equalKeyPressed();
        }

        // g --> toggleMode
        if (evt.keyCode == 103) {
                toggleMode();
        }
}

function deleteClearDetect(evt) {
        // Del --> backspace
        if (evt.keyCode == 8) {
                backKeyPressed();
        }


        // AC --> escape
        if (evt.keyCode == 27) {
                clearKeyPressed();
        }
}