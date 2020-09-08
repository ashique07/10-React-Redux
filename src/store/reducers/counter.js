import * as actionTypes from '../action';

const initialState = {

    counter : 0,
}

const reducer = (state = initialState, action) => 
{
    console.log('[REDUCER]', action);

    switch(action.type) {

        case actionTypes.INCREMENT:
            return {
                ...state,
                counter: state.counter + 1
            }
        
        case actionTypes.DECREMENT:
            return {
                ...state,
                counter: state.counter - 1
            }
        case actionTypes.ADD:
            return {
                ...state,
                counter: state.counter + action.value
            }
        case actionTypes.SUBTRACT:
            return {
                ...state,
                counter: state.counter - action.value
            }     
    }

    /*
    if(action.type === 'INCREMENT')
    {
        return {
            ...state,
            counter: state.counter + 1
        }

    }
    if(action.type === 'DECREMENT')
    {
        return {
            ...state,
            counter: state.counter - 1
        }

    }
    if(action.type === 'ADD')
    {
        return {
            ...state,
            counter: state.counter + action.value
        }

    }
    if(action.type === 'SUBTRACT')
    {
        return {
            ...state,
            counter: state.counter - action.value
        }

    }
    */

    return state;
}

export default reducer;