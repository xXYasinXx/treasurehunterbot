exports.run = (client, message, args) => {
    if (message.author.id !== client.config.ownerID) return;

    let member = message.mentions.users.first();
    if (!member) return message.reply('No user specified');

    const targetlevel = args.slice(1).join(' ')
    if (!targetlevel) return message.reply('No level specified')
    var parsedtargetlevel = parseInt(`${targetlevel}`)
    
    const targetkey = `${message.guild.id}-${member.id}`;

    client.data.set(targetkey, parsedtargetlevel, "level");
    return message.channel.send(`set ${member} to level ${targetlevel}`)
}