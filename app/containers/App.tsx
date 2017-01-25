import * as React from 'react'
import { connect } from "react-redux";
import * as Helmet from 'react-helmet';

import { asyncConnect } from "redux-connect";

interface AppProps {

}

@connect()
export default class App extends React.Component<AppProps, any> {

  constructor() {
    super();
  }

  render() {
    return(
      <div>
        <Helmet 
          title = 'React Redux Serverside'
          defaultTitle = 'React Redux Serverside'
          /*titleAttributes={{itemprop: "name", lang: "en"}}*/
          meta = {[
              {name: 'description', content: 'The future.'}
          ]}
        />
        <div>
            <h1>App</h1>
            {this.props.children}
        </div>
      </div>
    );
  }
}



