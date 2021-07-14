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
 * 
 * 
 * client.login('TOKEN');
 * 
 * 
 * @param {any} client - client instance of new Discord.Client
 * @param {string} [node_modules_path=../]  - relative path to your node_modules | default `../`
 */
function allowUserBotting(client, node_modules_path = '../') {

    client.ws.connect = async function () {
        const WebSocketShardClass = await import(node_modules_path + 'discord.js/src/client/websocket/WebSocketShard.js');
        const WebSocketShard = WebSocketShardClass.default;

        const { url: gatewayURL } = await this.client.api.gateway.get().catch(error => {
            throw error.httpStatus === 401 ? new Error('Invalid token') : error;
        });
        this.sessionStartLimit = 1;
        this.gateway = `${gatewayURL}/`;
        let { shards } = this.client.options;
        this.totalShards = shards.length;
        this.shardQueue = new Set(shards.map(id => new WebSocketShard(client.ws, id)));
        return this.createShards();
    }
}

module.exports = allowUserBotting;
