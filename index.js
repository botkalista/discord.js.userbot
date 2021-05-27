
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
 * 
 * 
 * @param {import('discord.js').Client} client - client instance of new Discord.Client
 */
function allowUserBotting(client) {
    client.rest.getAuth = function () {
        const token = this.client.token || this.client.accessToken;
        if (token) return `${token}`;
        throw new Error('TOKEN_MISSING');
    }
}

module.exports = allowUserBotting;
