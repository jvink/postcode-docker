const initialState = {
    loadingFoundAddress: false,
    errorFoundAddress: undefined,
    foundAddress: undefined,
    errorAllAddresses: undefined,
    loadingAllAddresses: false,
    allAddresses: undefined,
};

const address = (state = initialState, action) => {
    switch (action.type) {
        case "GET_ADDRESS_REQUEST":
            return {
                ...state,
                loadingFoundAddress: true,
            };
        case "GET_ADDRESS_ERROR":
            return {
                ...state,
                loadingFoundAddress: false,
                foundAddress: undefined,
                errorFoundAddress: action.error,
            };
        case "GET_ADDRESS_SUCCESS":
            return {
                ...state,
                errorFoundAddress: undefined,
                loadingFoundAddress: false,
                foundAddress: action.data
            };
        case "GET_ALL_ADDRESSES_REQUEST":
            return {
                ...state,
                loadingAllAddresses: true,
            };
        case "GET_ALL_ADDRESSES_ERROR":
            return {
                ...state,
                loadingAllAddresses: false,
                allAddresses: undefined,
                errorAllAddresses: action.error,
            };
        case "GET_ALL_ADDRESSES_SUCCESS":
            return {
                ...state,
                errorAllAddresses: undefined,
                loadingAllAddresses: false,
                allAddresses: action.data,
            };
        default:
            return state;
    }
};

export default address