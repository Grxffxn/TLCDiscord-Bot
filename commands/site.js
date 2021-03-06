const Discord = require('discord.js');
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
	name: 'site',
	description: 'TLC Homepage',
	aliases: ['website', 'url'],
	execute(message, args) {
    const embed = new MessageEmbed().setTitle('The Legend Continues | Site')
      .setColor(0x000080)
      .setDescription('Visit our website [here](https://www.thelegendcontinues.org/).\nView stats, forums, voting links & more!')
      .setURL('https://thelegendcontinues.org/')
      .setThumbnail('https://i.ibb.co/s5dY0bj/tlclogo.png');
    message.channel.send(embed);
  }
};
