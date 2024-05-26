document.addEventListener('DOMContentLoaded', () => { //for sign up

    const form = document.getElementById('userForm');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');

        const nameValue = nameInput.value;
        const emailValue = emailInput.value;



    });


    const form1 = document.getElementById('adminForm');

    form1.addEventListener('submit', function (event) {
        event.preventDefault();

        const rowInput = document.getElementById('rows');
        const columnInput = document.getElementById('columns');

        const rowValue = rowInput.value;
        const columnValue = columnInput.value;






        function putButtons(row, column) {
            var Letters = ["A", "B", "C", "D", "E", "F", "G"]

            const container = document.getElementById('button-container');
            var i = 1;

            while (column >= i) {
                var j = 0;
                var letter = Letters[j];
                var seatName = letter + i;
                createButton(seatName);


                var temp = row;
                while (temp > 1) { //for row
                    j = j + 1;
                    var letter = Letters[j];
                    var seatName = letter + i;
                    createButton(seatName);
                    temp = temp - 1;
                }

                var br = document.createElement('br');
                container.appendChild(br);

                j = 0;
                i = i + 1;
            }
        }


        putButtons(rowValue, columnValue);

    });
    let clickedButtons = [];

    function createButton(name) {

        // Get the container where the button will be added
        const container = document.getElementById('button-container');

        const button = document.createElement('button');

        button.textContent = name;

        button.id = name;
        button.className = 'btn';

        button.addEventListener('click', function () {
            if (button.style.backgroundColor == 'green') {
                button.style.backgroundColor = '#047cfc';

                for (let i = 0; i < clickedButtons.length; i++) {
                    if (clickedButtons[i] === name) {
                        clickedButtons.splice(i, 1);
                        i--; // Since we removed an element, we need to decrement i to adjust for the shifted elements
                    }
                }
            } else {
                button.style.backgroundColor = 'green';
                clickedButtons.push(name);
            }
            console.log(clickedButtons);
        });

        container.appendChild(button);

    }



    const button = document.getElementById('myButton');
    const ul = document.getElementById('listContainer');
    const p = document.getElementById('pricePart');
    var price = 0;
    button.addEventListener('click', () => {
        ul.innerHTML = ''; // Clear existing items
        p.innerHTML = 'Total Price: $';

        clickedButtons.forEach(item => {
            price = price + 25;
            const li = document.createElement('li');
            li.textContent = item;
            ul.appendChild(li);
        });
        p.append(price);
    }
    );


    const confirmButton = document.getElementById('confirmButton');
    confirmButton.addEventListener('click', () => {
      
        const resultString = clickedButtons.join('\n');


        confirm("Dear Admin Manager\n" + resultString + "\nTotal Amount is: $" + price + "\nStill do you want to accept");
    
    });


});



