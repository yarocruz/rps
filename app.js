const rps = [ 'rock', 'paper', 'scissors' ];

// the three emojis
let icons = document.querySelectorAll('.icons');
// the paragraph that will display if you won or not
let results = document.querySelector('.results');

// the empty spans
let winResults = document.querySelector('.wins');
let loseResults = document.querySelector('.losses');
let tieResults = document.querySelector('.ties');

let wins = 0;
let losses = 0;
let ties = 0;

// loop throught the three icons, which are the emojis, and for each of the items...
for (let item of icons) {
	// ...add an event listener that listens to clicks
	item.addEventListener('click', () => {
		// Grabs the data-value attributes of the .icon elements
		let userSelection = item.dataset.value;
		// generate the random selection.
		let computerGuess = rps[Math.floor(Math.random() * rps.length)];
		// winning conditions (rock beats paper, etc)
		if (
			(userSelection === 'rock' && computerGuess === 'scissors') ||
			(userSelection === 'scissors' && computerGuess === 'paper') ||
			(userSelection === 'paper' && computerGuess === 'rock')
		) {
			wins++;
			// write this to the .results paragraph if user wins
			results.textContent = `You win! You chose ${userSelection}. Computer chose ${computerGuess}`;
			winResults.textContent = `You have won ${wins} times.`;
			console.log('You chose ' + userSelection + ' Computer chose ' + computerGuess);
		} else if (userSelection === computerGuess) {
			ties++;
			// write this to the .results paragraph and span if its a tie
			results.textContent = `It's a tie. You chose ${userSelection}. Computer chose ${computerGuess}`;
			tieResults.textContent = `You have tied ${ties} times.`;
			console.log('You chose ' + userSelection + '. Computer chose ' + computerGuess);
		} else {
			losses++;
			// write this to the .results paragraph and span if user loses
			results.textContent = `You lose! You chose ${userSelection}. Computer chose ${computerGuess}`;
			loseResults.textContent = `You have lost ${losses} times.`;
			console.log('You chose ' + userSelection + '. Computer chose ' + computerGuess);
		}
		console.log(computerGuess);
		console.log(wins, losses, ties);
	});
}
