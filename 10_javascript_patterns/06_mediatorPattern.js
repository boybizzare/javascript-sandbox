const user = function (name) {
  this.name = name;
  this.chatroom = null;
}

user.prototype = {
  send: function (message, to) {
    chatroom.send(message, this, to);
  },
  receive: function (message, from) {
    console.log(`${from.name} to ${this.name}: ${message}`);
  }
}

const Chatroom = function () {
  let users = {}; // list of  users

  return {
    register: function (user) {
      users[user.name] = user;
      user.chatroom = this;
    },
    send: function (message, from, to) {
      if (to) {
        // Single user message
        to.receive(message, from);
      } else {
        // Mass message
        for (key in users) {
          if (users[key] !== from) {
            users[key].receive(message, from);
          }
        }
      }
    }
  }
}

const jamal = new user('Jamal');
const oluwole = new user('Oluwole');
const wisdom = new user('Wisdom');

const chatroom = new Chatroom();

chatroom.register(jamal);
chatroom.register(oluwole);
chatroom.register(wisdom);

jamal.send('Hello Oluwole', oluwole);
wisdom.send('Hello Jamal, you are the best dev ever', jamal);
oluwole.send('Hello everyone');