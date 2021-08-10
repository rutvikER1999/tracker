import Geolocation from 'react-native-location';

const tenMetersWithDegrees = 0.0001;

const getLocation = increment => {
    return {
        timestamp: 10000000,
        coords: {
            speed: 0,
            heading: 0,
            accuracy: 5,
            altitudeAccuracy: 5,
            altitude: 5,
            longitude: -122.0312186 + (increment * tenMetersWithDegrees),
            latitude: 37.33233141 + (increment * tenMetersWithDegrees)
        },
    }
}

let counter = 0;
setInterval(() => {
    Geolocation._eventEmitter.emit('locationUpdated', {
        location: getLocation(counter)
    });
    counter++;
}, 1000);