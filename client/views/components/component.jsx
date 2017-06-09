import React, { Component as ReactComponent } from 'react';

let componentPrototype = React.createClass({ render: () => {} }).prototype;
let ignoredMethods = Object.keys(componentPrototype)
  .reduce((map, key) => {
    map[key] = true;
    return map;
  }, {});

export default class BaseComponent extends ReactComponent {
  constructor(props) {
    super(props);

    let proto = this.constructor.prototype
      , keys = Object.getOwnPropertyNames(proto)
      ;

    keys
      .filter((key) => {
        return !ignoredMethods[key] && isFunction(proto[key]);
      })
      .forEach((key) => {
        this[key] = proto[key].bind(this);
      });

    this.state = {};
  }
}

function isFunction(o) {
  return Boolean(o && o.constructor && o.call && o.apply);
}
