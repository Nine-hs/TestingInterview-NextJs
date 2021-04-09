import axios from 'axios'

export const getProducts = () => {
    return dispatch => dispatch({
        type: 'PRODUCTS_ACTIVE',
        payload: { "id": 1, "name": "shoes" }
    });
}


export const getProduct = (product_id) => {
    //alert(JSON.stringify(product_id))
    return dispatch => {
        axios.get('/api/Product/' +  product_id )
            .then(res => {
                dispatch({ type: 'PRODUCT_ACTIVE', payload: res })
            })
    }
}