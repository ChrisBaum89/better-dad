export const fetchQuotes = () => {
    return (dispatch) => {
        dispatch({type: 'LOADING_QUOTES'});
        fetch("http://localhost:3000/quotes")
        .then ((response) => {return response.json()})
        .then((responseJSON) => {dispatch({type: "ADD_QUOTES", quotes: responseJSON})})
    }
}