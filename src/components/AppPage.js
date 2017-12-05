import React from 'react';

import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import { EventsList } from './events';

const AppPage = ({ data }) => {
  if (data.loading) {
    return (
      <h1>Loading</h1>
    );
  }
  
  return (
    <EventsList events={data.events} />
  );
}

const fragments = gql`
  fragment event on Event {
    id
    name
    attendees {
      ...user
    }
  }

  fragment user on User {
    name
    username
    location
  }
`;

const query = gql`
  query {
    events {
      ...event
    }
  }

  ${fragments}
`;

export default graphql(
  query
)(AppPage);