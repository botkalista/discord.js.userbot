import { Client } from "discord.js";

/**
 * 
 * Allow discord.js to login as User.
 * 
 * @example
 * const Discord = require('discord.js');
 * const allowUserBotting = require('discord.js.userbot');
 *
 * const client = new Discord.Client();
 * 
 * // Remember to set correct node_modules_path if it's not working.
 * 
 * allowUserBotting(client);
 * //or
 * allowUserBotting(client,'my_node_modules_folder_path');
 * 
 * 
 * client.login('TOKEN');
 */
export default function allowUserBotting(client: Client) {
    (client as any).rest.getAuth = function () {
        const token = this.client.token || this.client.accessToken;
        if (token) return `${token}`;
        throw new Error('TOKEN_MISSING');
    }
}
