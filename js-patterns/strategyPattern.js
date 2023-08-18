// allows you to swap strategies in and out for each other


class Fedex {
  constructor() {
    // fedex calculations...
    this.calculate = () => {
      return 2.45;
    };
  }
}

class UPS {
  constructor() {
    // UPS calculations...
    this.calculate = () => {
      return 1.56;
    };
  }
}

function Shipping() {
  this.company = '';
  this.strategy = (company) => {
    this.company = company;
  };

  this.calculate = (package) => {
    return this.company.calculate(package);
  };
}

class USPS {
  constructor() {
    // USPS calculations...
    this.calculate = () => {
      return 4.5;
    };
  }
}

const fedex = new Fedex();
const ups = new UPS();
const usps = new USPS();

const package = {
  from: 'alabama',
  to: 'georgia',
  weight: 1.56,
};

const shipping = new Shipping();
shipping.strategy(fedex);
console.log('Fedex: ' + shipping.calculate(package));

shipping.strategy(ups);
console.log('UPS: ' + shipping.calculate(package));

shipping.strategy(usps);
console.log('USPS: ' + shipping.calculate(package));
