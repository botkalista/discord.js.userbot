
## discord.js.userbot

#### Allow discord.js to login as User

### Install
`npm i discord.js.userbot`

### allowUserBotting(client, [node_modules_path])

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| client | <code>Client</code> | <code>undefined</code> | client instance of new Discord.Client |

## Example

```js
const Discord = require('discord.js');
const allowUserBotting = require('discord.js.userbot');
const client = new Discord.Client();
// Remember to set correct node_modules_path if it's not working.
allowUserBotting(client);
client.login('TOKEN');
```

**You can read more in the function documentation.**
