# RocketChat NodeJs Library

[RocketChat](https://rocket.chat) [REST API document](https://rocket.chat/docs/developer-guides/rest-api).

## Examples

### Me

```
var rocketChat = require('rocketchat').RocketChat;
var client = new rocketChat.Client();
client.hostname = 'rockat.chat';
client.port = 3001;
var authentication = new rocketChat.Authentication();
authentication.login({
  username: 'megabot',
  password: 'hiddenpwd'
}).then(() => {
  console.log(authentication.me());
});

```

## Todo

- Add good documentation
- Publish to to npm
- add missing implementation
