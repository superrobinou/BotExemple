import "reflect-metadata";
import {Client} from 'discordx';
import {Intents, Interaction, Message} from 'discord.js';
import { importx } from "@discordx/importer";
const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_MEMBERS,
    ],
    silent: false,
});

client.on("ready", async () => {
    console.log(">> Bot started");
    await client.guilds.fetch();
    // to create/update/delete discord application commands
    await client.initApplicationCommands();
    await client.initApplicationPermissions();
});
client.on("interactionCreate", (interaction: Interaction) => {
    client.executeInteraction(interaction);
});

client.on("messageCreate", (message: Message) => {
 client.executeCommand(message);
});
async function start(){
    await importx(`${__dirname}/commands/**.js`);
    client.login('OTcyODQ3MzgwOTcyMDY4OTA0.GN0frs.qglMttm3_j_Ei4TcOh75a-QtR89SQdCf6lwDq4');
}
start();