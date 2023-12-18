import React from 'react';

const EventList = ({ events }) => {
    const containerStyle = {
        maxWidth: '600px',
        margin: 'auto',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '8px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        backgroundColor: events.length > 0 ? 'rgba(245, 245, 245, 0.9)' : 'transparent',
        color:'green',
        fontFamily:'Source Sans Pro,sans-serif'
        // Adjust the background color based on the number of events
      };
  return (
    <div style={containerStyle}>
      {events.length === 0 ? (
        <p>No upcoming events</p>
      ) : (
        <ul>
          {events.map((event) => (
            <li key={event.id}>
              <strong>{event.title}</strong>
              <p>Date: {event.date}</p>
              <p>Location: {event.location}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

// Example usage
const eventsData = [
  {
    id: 1,
    title: 'Conference XYZ',
    date: '2023-01-01',
    location: 'City ABC',
  },
  {
    id: 2,
    title: 'Workshop ABC',
    date: '2023-02-15',
    location: 'Town XYZ',
  },
  // Add more events as needed
];

const App = () => {
  return (
    <div>
      <h1 style={{textAlign:'center',fontFamily:'Source Sans Pro,sans-serif'}}>Upcoming Events</h1>
      <EventList events={eventsData} />
    </div>
  );
};

export default App;
