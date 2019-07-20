exports.run = (client, message, args) => {
    const key = `${message.guild.id}-${message.author.id}`;
    return message.channel.send(`You are currently on level ${client.data.get(key, "level")}!`);
}