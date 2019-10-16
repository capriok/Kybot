module.exports = {
	name: "clean",
	execute(message, args, client) {
		// if you or me or not
		switch (message.author.id) {
			case ('279479220319813632'):
			case ('389250848397721612'):
				message.delete();
				message.channel.bulkDelete(args[0]);
				break;
			default:
				message.channel.send("You aint trusted with that nigga.");
				break;
		}
	}
}