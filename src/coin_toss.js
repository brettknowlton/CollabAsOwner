//get DOM objects
const coin_buttons = document.querySelectorAll('.coin-form input');
const coin_img = document.querySelector('.coin-image')
const output_div = document.querySelector('.coin-outcomes')

let coinflip_strings = [`tails`, `heads`];
let coinflip_images = [`img/tails.jpg`, `img/heads.jpg`];
let loss_win_counts = [0, 0];


console.log(coin_buttons)

//set event listener for buttons
coin_buttons.forEach(item => {
    item.addEventListener('click', e => {
        //was this heads or tails:
        let selection_is_heads = (e.target.value == 'Heads') ? 1 : 0;


        //flip coin:
        let coinflip_is_heads = Math.floor(Math.random() * 2);

        let selection_val = coinflip_strings[selection_is_heads];
        let coinflip_val = coinflip_strings[coinflip_is_heads];

        //set coin image
        let image_src = coinflip_images[coinflip_is_heads];

        coin_img.setAttribute('src', image_src)

        let message = ``
        //update scores:
        if (selection_val == coinflip_val) {
            loss_win_counts[1] += 1;
            message = `You chose wisely!`
        } else {
            loss_win_counts[0] += 1;
            message = `Sorry, wrong choice!`
        }

        //display scoring info:

        let data = `
        <p>You chose: ${selection_val}<p>
        <p>The toss is: ${coinflip_val}<p>
        <p>${message}<p>
        <p>Wins = ${loss_win_counts[1]} &nbsp;&nbsp; Losses = ${loss_win_counts[0]}</p>
        `
        output_div.innerHTML = data;
    })
})