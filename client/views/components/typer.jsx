import React from 'react';
import Typed from 'typed.js';
import PropTypes from 'prop-types';

export default class Typer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {
      strings,
      typeSpeed,
      backSpeed,
      startDelay,
      backDelay,
      loop,
      shuffle,
      smartBackspace,
      fadeOut
    } = this.props;
    const options = {
      strings: strings,
      typeSpeed: typeSpeed,
      backSpeed: backSpeed,
      startDelay: startDelay,
      backDelay: backDelay,
      loop: loop,
      shuffle: shuffle,
      smartBackspace: smartBackspace,
      fadeOut: fadeOut
    };
    // all docs and options can be found here http://www.mattboldt.com/typed.js/docs/
    this.typed = new Typed(this.el, options);
  }

  componentWillUnmount() {
    this.typed.destroy();
  }

  render() {
    return (
      <div className="typer-wrap">
        <div>
          <span
            ref={(el) => { this.el = el; }}
          />
        </div>
      </div>
    );
  }
};

Typer.propTypes = {
  strings: PropTypes.array
};
