const quotesReducer = (state = { quotes: [], loading: false}, action) => {
    switch (action.type) {
        case "LOADING_QUOTES":
            return { 
                ...state, quotes: [...state.quotes],
                loading: true,
            };
            case "ADD_QUOTES":
                return {
                    ...state,
                    quotes: action.quotes,
                    loading: false
                }
        default:
            return state
    }
}

export default quotesReducer