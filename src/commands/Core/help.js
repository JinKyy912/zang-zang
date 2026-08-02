import {
    SlashCommandBuilder,
} from "discord.js";

import { InteractionHelper } from "../../utils/interactionHelper.js";
import { createEmbed } from "../../utils/embeds.js";


export default {
    slashOnly: true,

    data: new SlashCommandBuilder()
        .setName("help")
        .setDescription("Displays music commands"),


    async execute(interaction, guildConfig, client) {

        await InteractionHelper.safeDefer(interaction);


        const botName = client?.user?.username || "Music Bot";


        const embed = createEmbed({
            title: `🎵 ${botName} Music Help`,
            description: "Available music commands:",

            color: "primary",

            fields: [
                {
                    name: "🎶 Playback",
                    value: [
                        "`/play` - Play a song",
                        "`/pause` - Pause current song",
                        "`/resume` - Resume playback",
                        "`/skip` - Skip current song",
                        "`/stop` - Stop music",
                    ].join("\n"),
                    inline: false,
                },

                {
                    name: "📜 Queue",
                    value: [
                        "`/queue` - Show queue",
                        "`/shuffle` - Shuffle queue",
                        "`/loop` - Loop settings",
                    ].join("\n"),
                    inline: false,
                },

                {
                    name: "🔊 Control",
                    value: [
                        "`/volume` - Change volume",
                        "`/nowplaying` - Current song",
                    ].join("\n"),
                    inline: false,
                },
            ],

            thumbnail: client.user?.displayAvatarURL?.({
                size: 1024,
            }),
        });


        embed.setFooter({
            text: "Music Bot",
        });

        embed.setTimestamp();


        await InteractionHelper.safeEditReply(interaction, {
            embeds: [embed],
            components: [],
        });
    },
};
