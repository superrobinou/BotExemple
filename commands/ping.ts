import { CacheType, CommandInteraction } from "discord.js";
import { Discord, Slash } from "discordx";
import "reflect-metadata";

@Discord()
export class PingCommand{
    @Slash('ping')
    async ping(pingCommand:CommandInteraction<CacheType>){
        pingCommand.reply({content:'pong!'});
    }

}