exports.run = (client, message, args) => {
    if (message.author.id !== client.config.ownerID) return;

    const member = message.mentions.users.first();

    const targetkey = `${message.guild.id}-${member.user.id}`;
    const targetlevel = args.slice(1).join(' ')
    var parsedtargetlevel = parseInt(`${targetlevel}`)
    
    client.data.set(targetkey, parsedtargetlevel, "level");
    return message.channel.send(`set ${member} to level ${targetlevel}`)
}