# FluntTS (Plume)

[![Build Status](https://travis-ci.com/crowrvo/flunt.svg?branch=master)](https://travis-ci.com/crowrvo/FluntTs) [![Coverage Status](https://coveralls.io/repos/github/crowrvo/FluntTs/badge.svg?branch=master)](https://coveralls.io/github/crowrvo/FluntTs?branch=master) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## What is Flunt?

Inspired in [Flunt](https://github.com/andrebaltieri/flunt), Every app has business rules and validations, and you probably will need to keep all the errors and notifications that happened and send it to somewhere, maybe to your UI.

Flunt implements the Notification Pattern and helps you to track everything that happend, consolidating your notifications and making it easy to access and manipulate.

## Installation

```sh
$ npm install @crowrvo/plume --save
```

## How to use

### ES6

```js
// i will improve imports soon
import Notifiable from "@crowrvo/plume/dist/Notifications";
import Contract from "@crowrvo/plume/dist/Contracts/Contract";

// extends your class to Notifiable
class Customer extends Notifiable {
  constructor(name, lastname, age) {
    super();
    this.name = name;
    this.lastname = lastname;
    this.age = age;

    this.AddNotification(
      new Contract()
        .Equal(name.length > 0, true, "Name", "name is required")
        .Equal(lastname.length > 0, true, "Lastname", "Lastname is required")
        .Equal(age > 18, true, "Age", "You need more than 18 years")
    );
  }
}

// instance class
var customer = new Customer(null, "Goncalves", 10);

// take your messages

console.log(customer.GetMessages);

//take all notifications
console.log(customer.GetNotifications);
```

### ES5

```js
// i will improve imports soon
const Notifiable = require("@crowrvo/plume/dist/Notifications").default;
const Contract = require("@crowrvo/plume/dist/Contracts/Contract").default;

class Customer extends Notifiable {
  constructor(name, lastname, age) {
    super();
    this.name = name;
    this.lastname = lastname;
    this.age = age;

    this.AddNotification(
      new Contract()
        .Equal(name.length > 0, true, "Name", "name is required")
        .Equal(lastname.length > 0, true, "Lastname", "Lastname is required")
        .Equal(age > 18, true, "Age", "You need more than 18 years")
    );
  }
  
  // You can also add notifications in methods or gets/sets
  public newAge(newAge: number) {
    this.AddNotification(
      new Contract()
        .Equal(age > 18, true, "Age", "You need more than 18 years")
    }
    this.age = newAge;
  }
}

// To use class
module.exports = Customer;

// instance class
var customer = new Customer(null, "Goncalves", 10);

// take your messages

console.log(customer.GetMessages);

//take all notifications
console.log(customer.GetNotifications);
```

## Methods

> Follow the methods that the library provides.

> ## Contract

Validations methods.

--

**Example**

```js
Equal(value, comparer, property, message);
StrictEqual(value, comparer, property, message);
NotEqual(value, comparer, property, message);
StrictNotEqual(value, comparer, property, message);

//To get messages and notifications
GetNotifications();
GetMessages();

// To know if is valid
isValid();
```

> ## Notifiable

> Class turn another class notifiable and works with flunt.

--

**Example**

```js
AddNotification(property, message);
AddNotification(Notification);
AddNotification(Notification[]);
AddNotification(contract);

// To get messages
GetMessages();

// To know if is valid
isValid();
```

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags).

## Authors

| ![Crowrvo](https://avatars.githubusercontent.com/u/56355669?s=40&u=ac0b978ab5cd80f932a5732cfeebb1705a841a8d&v=4) |
| :-------------------------------------------------------------------------------------------------------------------------: |
|                                    [Crowrvo](https://github.com/crowrvo/)                                     |

See also the list of [contributors](https://github.com/crowrvo/FluntTs/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
