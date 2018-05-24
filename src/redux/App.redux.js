const GET_COUNTRIES_AND_THREAT_LEVELS = "GET_COUNTRIES_AND_THREAT_LEVELS";

/**
 * Action Creators 
 */

export function getCountriesAndThreatLevels(url) {
    dispatch =>
        fetch("https://web-travel-test.cc.uic.edu/countries", {
            method: "GET"
        }).then(res => res.json())
            .then(countries => {
                dispatch({
                    type: GET_COUNTRIES_AND_THREAT_LEVELS,
                    value: countries
                })
            })
            .catch((err) => {
                console.error(err);
            })
}

/**
 * Reducers
 */

var initialState = {
    countries: [],
    userCountries: []
}

export function studentReducer(state = initialState, action) {

    switch (action.type) {
        case GET_COUNTRIES_AND_THREAT_LEVELS:
            return Object.assign({}, state, { countries: [...action.values] });
        default:
            return state;
    }

}