import React from 'react';

const EventsList = ({ events }) => {
    return (
        events.map((event, i) => {
            return (
                <div key={i}>
                    {event.name}
                </div>
            )
        })
    );
}

export default EventsList;