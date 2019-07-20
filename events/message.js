module.exports = (client, message) => {
  /*
  const Enmap = require("enmap");
  client.data = new Enmap({ name: "data" });
*/
  if (message.author.bot) return;
  if (message.guild) {
    const key = `${message.guild.id}-${message.author.id}`;

    client.data.ensure(key, {
      user: message.author.id,
      guild: message.guild.id,
      level: 1,
      lastSeen: new Date()
    });
  }

  if (message.content.indexOf(client.config.prefix) !== 0) return;

  const args = message.content
    .slice(client.config.prefix.length)
    .trim()
    .split(/ +/g);
  const command = args.shift().toLowerCase();

  const cmd = client.commands.get(command);
  if (!cmd) return;
  cmd.run(client, message, args);
};
