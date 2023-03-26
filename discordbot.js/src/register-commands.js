require('dotenv').config();
const { REST, Routes } = require('discord.js');

const commands = [
    {
        name: 'progress',
        description: 'tells you the progress of the bot!',

    },
    {
        name: 'who-are-you',
        description: 'i will tell you who i am!',

    },
    {
        name: 'ver',
        description: 'version',
    },
    {
        name: 'commands',
        description: 'what chat replies i can do!'
    },
];

const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);

(async () => {
    try {
        console.log('getting slash commands :3...');


        await rest.put(
            Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID),
            { body: commands }
        )
        
        console.log('slash commands are succesful! -w-');
    } catch (error) {
        console.log(`uhoh! there seems so be an issue... D:`);
    }
})();