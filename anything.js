// some removed stuff

// const [coordinates] = useState([
//     {
//         latitude: 23.0225,
//         longitude: 74.5714,
//         latitudeDelta: 0.0922,
//         longitudeDelta: 0.0421
//     },
//     {
//         latitude: 23.0210,
//         longitude: 74.5524,
//         latitudeDelta: 0.0922,
//         longitudeDelta: 0.0421
//     }
// ]);

// let points = [];
// for (let i = 0; i < 20; i++) {
//     if (i % 2 === 0) {
//         points.push({
//             latitude: 23.0225 + i * 0.001,
//             longitude: 74.5714 + i * 0.001,
//         });
//     } else {
//         points.push({
//             latitude: 23.0225 + i * 0.002,
//             longitude: 74.5714 + i * 0.001,
//         })
//     }

// }

// console.log(points)

{/* <Marker coordinate={coordinates[0]} />
            <Marker coordinate={coordinates[1]} /> */}
<Polyline
    coordinates={points}
    strokeColor="#000" // fallback for when `strokeColors` is not supported by the map-provider
    strokeColors={['#7F0000']}
    strokeWidth={2}
/>

import MapViewDirections from 'react-native-maps-directions';
{/* <MapViewDirections
                origin={{
                    latitude: 23.0225,
                    longitude: 74.5714,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421
                }}
                destination={{
                    latitude: 23.2110,
                    longitude: 72.6624,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421
                }}
                strokeWidth={3}
                strokeColor="hotpink"
                apikey={'AIzaSyCYtKtdLLvbA8CZ7vPC_AEs0fHO4T-lwt0'}
            /> */}