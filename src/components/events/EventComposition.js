import React, { Component } from 'react';

import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import { Box, TextInput, Button } from 'grommet';
import { Add } from 'grommet-icons';

const initialState = {
    name: '',
}

class EventComposition extends Component {
    constructor(props) {
        super(props);

        this.onInput = this.onInput.bind(this);
        this.onAddEvent = this.onAddEvent.bind(this);

        this.state = initialState;
    }

    onInput({ target }) {
        const { value } = target;
        this.setState({
            name: value
        });
    }

    onAddEvent() {
        const { name } = this.state;
        const { mutate } = this.props;

        mutate({
            variables: {
                input: {
                    name
                }
            }
        });
        this.setState(initialState);
    }
    
    render() {
        const { name } = this.state;

        return (
            <Box direction='row'>
                <Box>
                    <TextInput placeholder='Add a new Event' value={name} onInput={this.onInput} />
                </Box>
                <Box>
                    <Button icon={<Add />} onClick={this.onAddEvent} />
                </Box>
            </Box>
        );
    }
}

const mutation = gql`
    mutation eventCreate($input: EventInput) {
        eventCreate(input: $input) {
            id
            name
        }
    }
`;

export default graphql(
    mutation, {
        options: {
            refetchQueries: [
                'events',
            ],
        },
    }
)(EventComposition);