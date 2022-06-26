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
               if (i !== 15){
                   if (i === 16) {
                       //target delete button
                       //some code
                       clearContent()
                   }else{
                       if (i === 17) {
                           //clear button
                           deleteContent()
                       }else{
                           appendNumber(val);
                       }
                   }
                }else{
                    //if i === 15 (equal button)
                    compute();
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
        let vals = display.value;

        let displayArr = vals.split('');

        //remove last element in display array
        displayArr.pop();

        return display.value = displayArr.join('');
    }

    const appendNumber = (number, i) => {
       
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

    const compute = () => {
        //performs arithmetic operation
        let result = eval(display.value); //using eval function
        return display.value = result;
    }

    const updateDisplay = () => {
        //updates result
        let show = compute();
        display.value = show;

    }
})();