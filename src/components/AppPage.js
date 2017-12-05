import React from 'react';

import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import { EventsList, EventComposition } from './events';

const AppPage = ({ data }) => {
  if (data.loading) {
    return (
      <h1>Loading</h1>
    );
  }
  
  return (
    <section>
      <EventsList events={data.events} />
      <EventComposition />
    </section>
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
  query events {
    events {
      ...event
    }
  }

  ${fragments}
`;

export default graphql(
  query
)(AppPage);