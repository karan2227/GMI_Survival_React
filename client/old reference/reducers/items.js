
//Perfect way of Reducer with error and loading status

export function itemsHasErrored(state = false, action) {
    switch (action.type) {
        case 'ITEMS_HAS_ERRORED':
            return action.hasErrored;

        default:
            return state;
    }
}

export function itemsIsLoading(state = false, action) {
    switch (action.type) {
        case 'ITEMS_IS_LOADING':
            return action.isLoading;

        default:
            return state;
    }
}

export function items(state = [], action) {
    switch (action.type) {
        case 'ITEMS_FETCH_DATA_SUCCESS':
            return action.items;

        default:
            return state;
    }
}



//Reducer with only functionality but no error and loading status

export function traderItems(state = [], action) {
    console.log('insdide reducer');
    console.log(state);
    console.log(action);
    switch (action.type) {
        case 'TRADERS_FETCH_DATA_SUCCESS':
            return action.traders;

        default:
            return state;
    }
}

export function stockItems(state = [], action) {
    console.log('insdide reducer');
    console.log(action);
    switch (action.type) {
        case 'STOCKS_FETCH_DATA_SUCCESS':
            return action.items;

        default:
            return state;
    }
}