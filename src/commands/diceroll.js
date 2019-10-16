module.exports = {
  name: 'wolldatshit',
  description: 'wolls dat shit',
  execute (message, args, client) {
    var die1 = Math.floor(Math.random() * 6) + 1
    var die2 = Math.floor(Math.random() * 6) + 1
    var die3 = Math.floor(Math.random() * 6) + 1
    var rolledDice = [die1, die2, die3];
    var result = rolledDice
    var reaction = null
    var total = result.reduce((a, b) => a + b, 0)
    var bind = result.join(" ")

    if (total >= 9) {
      reaction = '👍'
    } else if (total < 9) {
      reaction = '💩'
    }
    // message.channel.send("```boohhmm => " + bind + "\n" + "Total: " + total + "```").then(message => {message.react(reaction);}).catch(err => {console.log(err);});
    message.channel.send(`${message.author}` + '```' + `boohhmm => ${bind} \nTotal: ${total}` + '```').then(message => { message.react(reaction) }).catch(err => { console.log(err) });
    return result
  }
}
