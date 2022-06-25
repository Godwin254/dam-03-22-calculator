// *** Write your code here***
(function(){
    /**Variables */
    let display = document.querySelector('.display > input');
    let btns = document.querySelectorAll(".row > input");
    //events
    window.addEventListener('DOMContentLoaded', () => {
        //debug
        console.log("Calculator loaded!");
        console.log(display);
        console.log(btns);

        //click listener to all buttons
        [...btns].forEach((btn, i) => {
            btn.addEventListener('click', () => {
                console.log("clicked");

                let val = btn.value;
                /*
                if (i === 0){
                    // -> 7
                    appendNumber(parseInt(btn.value));
                }else if(i === 1){
                    // -> 8
                    appendNumber(parseInt(btn.value));
                }else if(i === 2){
                    // -> 9
                    appendNumber(parseInt(btn.value));
                }else if(i === 3){
                    // -> +
                    appendNumber(btn.value);
                    chooseOperation(btn.value);
                }else if(i === 4){
                    // -> 4
                    appendNumber(parseInt(btn.value));
                }else if(i === 5){
                    // -> 5
                    appendNumber(parseInt(btn.value));
                }else if(i === 6){
                    // -> 6
                    appendNumber(parseInt(btn.value));
                    chooseOperation(btn.value);
                }else if (i === 7) {
                    // -> -
                    appendNumber(btn.value);
                    chooseOperation(btn.value);
                } else if (i === 8) {
                    // -> 1
                    appendNumber(parseInt(btn.value));
                } else if (i === 9) {
                    // -> 2
                    appendNumber(parseInt(btn.value));
                }else if (i === 10) {
                    // -> 3
                    appendNumber(parseInt(btn.value));
                } else if (i === 11) {
                    // -> *
                    appendNumber(btn.value);
                    chooseOperation(btn.value);
                } else if (i === 12) {
                    // -> 0
                    appendNumber(parseInt(btn.value));
                }else if (i === 13) {
                    // -> .
                    appendNumber(btn.value);
                } else if (i === 14) {
                    // -> /
                    appendNumber(btn.value);
                    chooseOperation(btn.value);
                } else{
                    // -> =
                    //appendNumber(btn.value);
                }*/
                if (val === "+" && val === "-" && val === "/" && val === "*") {
                    chooseOperation(btn.value); //
                }else if (val === "Del" && val === "CLR" ){
                    deleteContent();
                }else{
                    appendNumber(btn.value);
                }
    
            });
        });


    });


    //methods / functions
    const deleteContent = () => {
        //clears everything on displaonClick="calcNumbers(b5.value)"
        display.value = '';
    }

    const clearContent = () => {
        //clear single element from screen
    }

    const appendNumber = (number) => {
        display.value += number
    }

    const chooseOperation = (operator) => {
        //controls what happen when an operation is selected
        switch(operator){
            case "+":
                compute(operator);
                break;
            case "-":
                compute(operator);
                break;
            case "*":
                compute(operator);
                break;
            case "/":
                compute(operator);
                break;
            default:
                console.log("no such operator");
        }
    }

    const compute = (sign ) => {
        //performs arithmetic operation
        let result = 0;
        if (sign === "+"){

            result += 1
        }
        return result
    }

    const updateDisplay = () => {
        //updates result
        let show = compute();
        display.value = show;
    }
})();