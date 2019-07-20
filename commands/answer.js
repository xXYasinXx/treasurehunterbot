exports.run = (client, message, args) => {
    const key = `${message.guild.id}-${message.author.id}`;

    if (args[0] === 'test' && client.data.get(key, "level") === 1) {
        return message.channel.send(`yoit`);
    }
    else if (args[0] === 'test2' && client.data.get(key, "level") === 2) {
        return message.channel.send(`yoit2`);
    }
    else {
        return message.channel.send(`nice try kid.`)
    }
}