import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Root from './Root';

import { ApolloProvider } from 'react-apollo';
import client from './apolloClient';

// enables react-hot-reload 3 for any children of Root:

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <ApolloProvider client={client}>
        <Component />
      </ApolloProvider>
    </AppContainer>,
    document.getElementById('root')
  )
}

render(Root);

if (module.hot) {
  //notice that there is the path of the Root component
  module.hot.accept('./Root', () => {
    render(Root);
  });
}
