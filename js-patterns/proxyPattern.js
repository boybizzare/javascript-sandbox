// allows you to use one object as a placehilder for another object
// proxy can control access to that object


class CurrencyAPI {
  // constructor(coin) {
  //   this.coin = coin;
  // }

  getValue(coin) {
    console.log('Calling external API...');
    switch (coin) {
      case 'Bitcoin':
        return '$8,500';
      case 'Litecoin':
        return '$50';
      case 'Ethereum':
        return '$175';
    }
  }
}

// const api = new CurrencyAPI();

// console.log(api.getValue('Bitcoin'));

class Proxy {
  constructor() {
    this.api = new CurrencyAPI();
    this.cache = {};
  }

  getValue(coin) {
    if (this.cache[coin] == null) {
      this.cache[coin] = this.api.getValue(coin);
    }
    return this.cache[coin];
  }
}

const proxy = new Proxy();

console.log(proxy.getValue('Bitcoin'));
console.log(proxy.getValue('Bitcoin'));
console.log(proxy.getValue('Litecoin'));
