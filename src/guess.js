
let min = 1;
let max = 100;
let guess_count = 0;


let randomNumber = roll_random();

let guess_form = document.querySelector('.guess-form');
let guess_box = document.querySelector('#guess');
let prev_attempts = document.querySelector('#attempts');
let results = document.querySelector('#result span')

let body = document.querySelector('body');
let reset_button;


guess_form.addEventListener('submit', e => {
    e.preventDefault();

    let guess = Number(guess_box.value);

    guess_count += 1

    if (guess_count == 1) {
        prev_attempts.innerText = `Previous Guesses: ${guess}`;

    } else {
        prev_attempts.innerText = `${prev_attempts.innerText}, ${guess}`;

    }


    check_guess(guess)

    console.log(guess)

    guess_box.value = '';
});


function check_guess(guess) {
    //check if number is < > or =
    if (guess == randomNumber) {
        results.setAttribute('class', 'justRight')
        results.innerText = `Congratulations! You guessed the number!`

        game_over();
    }
    if (guess < randomNumber) {
        results.setAttribute('class', 'tooSmall')
        results.innerText = `Your guess is LOWER than the number.`

    }
    if (guess > randomNumber) {
        results.setAttribute('class', 'tooBig')
        results.innerText = `Your guess is HIGHER than the number.`
    }

    if (guess_count >= 10) {
        results.setAttribute('class', 'tooMany')
        results.innerText = `!!! Out of Attempts, GAME OVER !!!`

        game_over();
    }
}

function game_over() {
    //disable text box
    guess_box.disabled = 'disabled';

    reset_button = document.createElement('button');
    reset_button.value = 'Start New Game';
    reset_button.style.fontSize = 'x-large';
    reset_button.innerText = "Play New Game"
    body.append(reset_button)

    reset_button.addEventListener('click', e => {
        reset();
    });

    reset_button.focus();
}

function reset() {
    
    //remove the reset button
    reset_button.remove();

    //reset guess count
    guess_count = 0;

    //clear paragraphs
    results.removeAttribute('class');
    results.innerHTML = null;
    prev_attempts.innerText = null;

    //enable and focus text box
    guess_box.removeAttribute("disabled");
    guess_box.focus();

    //re-roll random number:
    randomNumber = roll_random();
}




function roll_random() {
    let n = Math.floor(Math.random() * 100) + 1;
    return n
}