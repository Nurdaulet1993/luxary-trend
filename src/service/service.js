export default class Service {
    getData = async (url = '../db.json') => {
        const res = await fetch(`https://swapi.co/api/people/1`);

        if(!res.ok) {
            throw new Error(`Could not fetch ${url}`);
        }

        return await res.json();
    }
}

