const Discord = require("discord.js");
const client = new Discord.Client();

const config = require("./config.json");

const Enmap = require("enmap");
client.data = new Enmap({ name: "data" });

const fs = require("fs");
const SQLite = require("better-sqlite3");

client.config = config;

fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));
  });
});

client.commands = new Enmap();

fs.readdir("./commands/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/${file}`);
    let commandName = file.split(".")[0];
    console.log(`Attempting to load command ${commandName}`);
    client.commands.set(commandName, props);
  });
});

const activities_list = [
  "with yo mama", 
  "with the developers console",
  "with some code", 
  "with JavaScript"
  ]; 

client.on("ready", () => {
  console.log(`Ready!`);
  //start of activity cycle
    setInterval(() => {
        const index = Math.floor(Math.random() * (activities_list.length - 1) + 1);
        client.user.setActivity(activities_list[index]);
    }, 20000); 
    //end of activity cycle

});

client.login(config.token);
