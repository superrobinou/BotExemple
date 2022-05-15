import { CacheType, CommandInteraction, GuildMember,Permissions, User } from "discord.js";
import { Discord, Slash, SlashOption } from "discordx";

@Discord()
export class BanCommand {
    @Slash('ban')
    async ban(@SlashOption("user", { description: "utilisateur",type:"USER" })
    user: GuildMember,banCommand: CommandInteraction<CacheType>) {
        if(user.bannable){

            if (banCommand.memberPermissions?.has( Permissions.FLAGS.BAN_MEMBERS,true)){
                var dm=await user.createDM();
                dm.send(user.displayName+", vous a étés banni");
                user.ban();
                banCommand.reply('utilisateur <@'+user.id+'>');
            }
            else{
                banCommand.reply({content:"vous n'avez pas les permissions de bannir cet utilisateur"});
            }
        }
        else{
            banCommand.reply({ content: "je ne peux pas bannir cet utilisateur!" });
        }

    }

}