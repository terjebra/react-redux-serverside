import * as ReactDOM from 'react-dom/server';
import * as serialize from 'serialize-javascript';
import * as Helmet from 'react-helmet';
import * as React from 'react';
import {Store } from 'redux';

interface HtmlProps{
  store: any;
  component: any;
}

export default class Html extends React.Component<HtmlProps, {}> {
  render() {
    const { component, store} = this.props;
    const content = component ? ReactDOM.renderToString(component) : '';
    const head = Helmet.rewind();
    const attrs = head.htmlAttributes.toComponent();

    return (
     <html {...attrs}>
        <head>
          {head.base.toComponent()}
          {head.title.toComponent()}
          {head.meta.toComponent()}
          {head.link.toComponent()}
          {head.script.toComponent()}
        </head>
        <body>
          <div id="content" dangerouslySetInnerHTML={{__html: content}}/>          
          <script dangerouslySetInnerHTML={{__html: `window.__data=${serialize(store.getState())};`}} charSet="UTF-8"/>
          <script src="http://localhost:3001/dist/bundle.js"></script>
        </body>
      </html>
    );
  }
}