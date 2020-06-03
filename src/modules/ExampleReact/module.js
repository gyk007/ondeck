// eslint-disable-next-line
import React from 'react';
import ReactDOM from 'react-dom';
import App from 'ExampleReact/component/App';
import 'ExampleReact/index.css';
import 'github-fork-ribbon-css/gh-fork-ribbon.css';
import Module from 'OneDeckCore/module';
import axios from 'axios';

/**
 * Class ExampleReact
 * module use React
 */
export default class ExampleReact extends Module {
  init(path, state) {
    console.log('init', this.constructor.name, path, state);

    this.reactApp = ReactDOM.render(
      <App />,
      document.getElementById('MainContent'),
    );

    axios('/some.pl');

    this.eventHandler();
  }

  eventHandler() {
    this.$$on('onSumm', (summ) => this.$$gemit('examplEvent', summ));
    this.$$on('notify', (btnmane) => this.$$gemit('notify', btnmane));
  }

  dispatcher(path, state) {
    console.log('dispatcher', this.constructor.name, path, state);
  }

  mounted(module, layout) {
    console.log('mounted', this.constructor.name, module, layout);
  }

  destroy() {
    ReactDOM.unmountComponentAtNode(document.getElementById('MainContent'));
  }
}