
let initialState = {
    Products: [],
    Product: []
}

const ProductReducer = (state = initialState, action) => {
    //console.log(action)
    switch (action.type) {
        case 'PRODUCTS_ACTIVE':
            return {
                ...state,
                Products: action.payload,
            }
        case 'PRODUCT_ACTIVE':
            return {
                ...state,
                Product: action.payload,
            }
        default:
            return state
    }
}

export default ProductReducer