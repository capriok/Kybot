// listen for messages
client.on('message', message => {
	console.log(message.content);
});