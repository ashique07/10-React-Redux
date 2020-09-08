import * as actionTypes from '../action';

const initialState = {

    results : []

}

const reducer = (state = initialState, action) => 
{
    console.log('[REDUCER]', action);

    switch(action.type) {
        
        case actionTypes.STORE_RESULT:
            return {
                ...state,
                results: state.results.concat({id: new Date(), value: action.result})
            }
            
        case actionTypes.DELETE_RESULT:

            const updatedArray = state.results.filter(result => result.id !== action.resultElementId);
            
            return {
                ...state,
                results: updatedArray
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