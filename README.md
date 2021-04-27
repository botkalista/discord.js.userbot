
## discord.js.userbot

#### Allow discord.js to login as User

### Install
`npm i discord.js.userbot`

### allowUserBotting(client, [node_modules_path])

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| client | <code>any</code> |  | client instance of new Discord.Client |
| [node_modules_path] | <code>string</code> | <code>&quot;../node_modules&quot;</code> | relative path to your node_modules | default `../node_modules` |

## Example

```js
const Discord = require('discord.js');
const allowUserBotting = require('discord.js.userbot');
const client = new Discord.Client();
// Remember to set correct node_modules_path if it's not working.
allowUserBotting(client);
//or
allowUserBotting(client,'my_node_modules_folder_path');
client.login('TOKEN');
```

**You can read more in the function documentation.**
