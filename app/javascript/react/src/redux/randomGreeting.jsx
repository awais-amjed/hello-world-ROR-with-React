import RandomGreetingApi from "../api/randomGreetingAPI";

const GREETING_FETCHED = 'GREETING_FETCHED';

const fetchGreeting = () => async (dispatch) => {
    const greeting = await RandomGreetingApi.getRandomGreeting();

    dispatch({
        type: GREETING_FETCHED,
        greeting,
    });
};

const randomGreetingReducer = (state = '', actions) => {
    switch (actions.type) {
        case GREETING_FETCHED:
            return actions.greeting;
        default:
            return state;
    }
};

export {
    randomGreetingReducer as default,
    fetchGreeting,
    GREETING_FETCHED,
};
