function test(evt) {
        //  0-9
        if ((evt.keyCode > 47) && (evt.keyCode < 58)) {
                inputKeyPressed(evt.key);
        }

        // Opérateurs: multiply Add Minus ...
        if ((evt.keyCode == 42) || (evt.keyCode == 43) || (evt.keyCode == 45) || (evt.keyCode == 47)) {
                inputKeyPressed(evt.key);
        }

        // "x"
        if ((evt.keyCode == 120)) {
                // code
        }

        // "(" and ")"
        if ((evt.keyCode == 40) || (evt.keyCode == 41)) {
                inputKeyPressed(evt.key);
        }

        // backspace


        // Del

        // Enter
        if ((evt.keyCode == 13)) {
                //calculate();
        }


        alert(evt.key);
}