# RocketChat NodeJs Library

Check [RocketChat](https://rocket.chat) [REST API](https://rocket.chat/docs/developer-guides/rest-api)

## Examples

### Authentication, list users and post new message

```nodejs

var rocketchat  =  require('./bin/rocketchat.bundle.js').RocketChat;

var client = new rocketchat.Client();
client.hostname = 'localhost';

var auth = new rocketchat.Authentication(client);
auth.login({
  username: 'bot',
 	password: 'mypass'
}).then(() =>  {
  auth.me().then(({data})=> {
    console.log(data)
  });
  var user = new rocketchat.Users(client);
  user.list().then(({data}) => {
    console.log(data);
  });
  var chat = new rocketchat.Chat(client);
  chat.postMessage({
    roomId: 'general',
    channel: '#general',
    text: 'testing from my new lib',

  });
});

```

## Todo

- Add good documentation
- add missing implementation
