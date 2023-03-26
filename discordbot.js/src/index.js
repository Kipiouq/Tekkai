require('dotenv').config();
const { Client, IntentsBitField, ActivityType, MessageManager } = require('discord.js');
const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ],
});
const input_message = "hello :3";
const convec = input_message.split(':3');

if (convec.includes(":3")) {
    console.log("what are you? a furry? x3")
}

client.on('ready', (c) => {
    console.log(`${c.user.tag} is here! :3`);

    client.user.setActivity({
        name: "you >:3",
        type: ActivityType.Watching
    })

});

client.on('messageCreate', (message) => {
    if (message.author.bot) {
        return;
    }
    
    if (message.content === 'i hate you') {
        message.reply('CRY ABOUT IT >:3')
    }

    if (message.content === ':3') {
        message.reply('what are you? a furry? x3');
    }

    if (message.content === 'hey') {
        message.reply('hiya! :3');
    }
    
    if (message.content === 'Tekkai') {
        message.reply('thats me! what do u want -w-');
    }

    if (message.content === 'gup') {
        message.reply('i love those little fuckers >:3');
    }

    if (message.content === 'kys') {
        message.reply('cap say mums');
    }

    if (message.content === 'hotwheels unleashed') {
        message.reply('W game, hotweel go BRBRRRRMMMMMM');
    }

    if (message.content === 'goodnight Tekkai') {
        message.reply('i guess im going offline now too, goodnight');
    }

    if (message.content === 'furfag') {
        message.reply('yeah its heartbreaking isnt it </3')
    }

    if (message.content === 'todd') {
        message.reply('oh my god do you mean the cool and hip todd howard/s')
    }

    if (message.content === 'commands') {
        message.reply('i have a few! i have, "hey", "kys", "hotwheels unleashed", "gup", "Tekkai", ":3" and "i hate you", more are going to be added soon! (dont be afraid to reccomend! :3 please do not use slash commands as of yet, they are bugged')
    }

});

client.on('interactionCreate', (interaction) => {
    if (!interaction.isChatInputCommand()) return;
   
    if (interaction.commandName === 'progress') {
        interaction.reply('kipiouq is currently slaving away! -3- as of now i can reply to "/" commands and some others! type "/commands" to find out -w-');
    }
    if (interaction.commandName === 'who-are-you') {
        interaction.reply('i am Tekkai! im a bot kipiouq made for fun, i will have more purpose in the future!');
    }
    
    if (interaction.commandName === 'ver') {
        interaction.reply('Tekkai is version 0.6!');
    }

    if (interaction.commandName === 'commands') {
        interaction.reply('i have a few! i have, "hey", "kys", "hotwheels unleashed", "gup", "Tekkai", ":3" and "i hate you", more are going to be added soon! (dont be afraid to reccomend! :3) ');
    }
});

client.login(process.env.TOKEN);