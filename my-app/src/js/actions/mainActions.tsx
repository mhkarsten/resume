export const ADD_ITEM = "adding item";
export const REMOVE_ITEM = 'removing an item';

export const addItem = (text: String) => {
    return {
        type: ADD_ITEM,
        payload: text
    }
}

export const removeItem = (id: Number) => {
    return {
        type: REMOVE_ITEM,
        payload: id
    }
}