
// Make an object of states that any state has a list of city [ stateName:[...cities] ]
// Create a function to add new state to list using Spread
// (state)=>{}
// Create a function to add new city to one of state using Spread
// (city,state)=>{}
// Create a function to Add list of new city to one of state using Spread
// (cities,state)=>{}
let citiesState = {
    iran : ['tehran','sari','tabriz','ahvaz'],
    england : ['london','manchester','liverpool'],
    spain: ['madrid','barcelon','pompluna','sevill']
}
    function createStates(newObj){
        citiesState = {...citiesState,...newObj};
        console.log(citiesState);
    }
    let newObj = {france: ['paris']};
    createStates(newObj);

    function addCityState(cityName, key){
        citiesState[key] = [...citiesState[key], cityName];
        console.log(citiesState);
        }
    addCityState('karaj','iran');
    
    function addCitysToState(key, cities){
        citiesState[key] = [...citiesState[key], ...cities];
        console.log(citiesState);
        }
        let cities = ['kerman', 'shiraz'];
    addCitysToState('iran',cities);