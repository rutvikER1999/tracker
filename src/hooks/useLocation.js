import { useState, useEffect } from 'react';
import Geolocation from 'react-native-location';

export default (callback) => {

    const [err, setErr] = useState(null)
    const [loca, setLoca] = useState(null)
    Geolocation.subscribeToLocationUpdates(location => {
        // console.log(location)
        location?.location?.coords != null ? setLoca(location) : '';
        setLoca(location)
    });


    useEffect(() => {
        //console.log(loca)
        loca?.location?.coords != null ? callback(loca) : '';
    }, [loca])

    const startWatching = async () => {
        Geolocation.configure({
            distanceFilter: 5.0,   //every five meters
            desiredAccuracy: {
                ios: 'best',
                android: 'balancedPowerAccuracy',
            },
        });
        try {
            //const loc = await Geolocation.getLatestLocation((location) => console.log(location), (err) => console.log(err));
            // console.log('ddd', loc)
            const value = Geolocation.requestPermission({
                android: {
                    detail: 'fine',
                    rationale: {
                        title: 'wee need to access your location',
                        message: 'will get your location',
                        buttonPositive: 'Ok',
                        buttonNegative: 'Cancle'
                    },
                }
            })
            value ? setErr('') : setErr('please allow location');
        } catch (error) {
            setErr('please allow location');
        }
    }

    useEffect(() => {
        startWatching()
    }, [])

    return [err]
}