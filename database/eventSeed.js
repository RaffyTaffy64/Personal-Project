'use strict';

const events = [
    {
        eventTitle: 'General Session',
        startTime: '10:00 AM',
        endTime: '12:00 PM',
        speaker: 'Scott Sutherland',
        location: 'Grand Ballroom',
        day: 'Wednesday'
    },
    {
        eventTitle: 'Regional Meeting',
        startTime: '2:00 PM',
        endTime: '4:00 PM',
        speaker: 'Area Developers',
        location: 'Various Halls',
        day: 'Wednesday'
    },
    {
        eventTitle: 'General Session',
        startTime: '10:00 AM',
        endTime: '12:00 PM',
        speaker: 'Kyle Baugh',
        location: 'Grand Ballroom',
        day: 'Thursday'
    },
    {
        eventTitle: 'Special Guest Speakers',
        startTime: '6:00 PM',
        endTime: '8:30 PM',
        speaker: 'Elon Musk and Mark Zuckerberg',
        location: 'Grand Ballroom',
        day: 'Thursday'
    },
    {
        eventTitle: 'General Session',
        startTime: '10:00 AM',
        endTime: '12:00 PM',
        speaker: 'Erica Guarneri',
        location: 'Grand Ballroom',
        day: 'Friday'
    },
    {
        eventTitle: 'Women in Tech Luncheon',
        startTime: '1:00 PM',
        endTime: '3:00 PM',
        speaker: '',
        location: 'Halls A & B',
        day: 'Friday'
    },
    {
        eventTitle: 'Regional Meetings',
        startTime: '4:00 PM',
        endTime: '6:00 PM',
        speaker: 'Area Executives',
        location: 'Various Halls',
        day: 'Friday'
    },
    {
        eventTitle: 'Recognition Dinner',
        startTime: '7:00 PM',
        endTime: '9:30 PM',
        speaker: '',
        location: 'Halls A & B',
        day: 'Friday'
    },
]

module.exports = {
    up: async (queryInterface) => {
        await queryInterface.bulkInsert('events', events.map(event => ({
            eventTitle: event.eventTitle,
            startTime: event.startTime,
            endTime: event.endTime,
            speaker: event.speaker,
            location: event.location,
            day: event.day,
            createdAt: new Date(),
            updatedAt: new Date()
        })), {})
    },

    down: async (queryInterface) => {
        await queryInterface.bulkDelete('events', null, {})
    }
}
