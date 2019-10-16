module.exports = {
	name: 'rps',
	execute(message, userChoice) {
		const choices = ['Rock', 'Paper', 'Scissors']
		const randomNum = Math.floor(Math.random() * 3)
		const compChoice = choices[randomNum]
		switch (userChoice + compChoice) {
			case 'RockScissors':
			case 'PaperRock':
			case 'ScissorsPaper':
				message.channel.send('```'+`${message.author.username} chose ${userChoice}, Shkeeb chose ${compChoice}\nYou Win!`+'```')
				break;
			case 'RockPaper':
			case 'PaperScissors':
			case 'ScissorsRock':
				message.channel.send('```' + `${message.author.username} chose ${userChoice}, Shkeeb chose ${compChoice}\nYou Lose!` + '```')
				break;
			case 'RockRock':
			case 'PaperPaper':
			case 'ScissorsScissors':
				message.channel.send('```' + `${message.author.username} chose ${userChoice}, Shkeeb chose ${compChoice}\nIts a Draw!` + '```')
				break;
		}
	message.delete()
	}
}

