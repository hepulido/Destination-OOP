const Airport = require("../../classes/Airport")
const Plane = require("../../classes/Plane")
describe('Airport class', () => {
    const airport = new Airport('LAX', 1234);
    it('assigns name and plane correctly', () => {
        expect(airport.name).toBe('LAX');
        expect(airport.getPlanes()).toEqual([]);

    })
    it('assigns correct airportCode value', () => {
        expect(airport.airportCode).toBe(1234);

    })

    it('adds Plane object to the planes array using addPlane() method', () => {
        const plane = new Plane('LAX', 'JFK', "Sky Harbor")
        airport.addPlane(plane)
        expect(airport.getPlanes()).toContainEqual(plane);

    })
})