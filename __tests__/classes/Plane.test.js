const Plane = require("../../classes/Plane");
const Person = require("../../classes/Person")

describe('Plane class', () => {
    it('assigns company, origin, and destination are correcly assigned', () => {
        const plane = new Plane('Company', 'origin', 'destination');
        expect(plane.company).toBe('Company');
        expect(plane.origin).toBe('origin');
        expect(plane.destination).toBe('destination');
    })
    it('initialized passengers array as an empty array', () => {
        const plane = new Plane('Company', 'origin', 'destination')
        expect(plane.getPassengers()).toEqual([]);

    })
    it('adds a passenger to the passengers array ussing addPassenger()', () => {
        const plane = new Plane('Company', 'origin', 'destination');
        const passenger = new Person('Steve','new york');
        plane.addPassenger(passenger);
        expect(plane.getPassengers()).toContainEqual(passenger);

    })

 

})