export function getAddress(zipcode, houseNumber, suffix) {
  return async (dispatch) => {
    const URL = `http://127.0.0.1:4000/${zipcode}/${houseNumber}${suffix ? `/${suffix}` : ``}`;
    dispatch({ type: "GET_ADDRESS_REQUEST" });

    try {
      const fetchResponse = await fetch(URL);
      const response = await fetchResponse.json();
      if (response.error) {
        dispatch({ type: "GET_ADDRESS_ERROR", error: response.result });
      } else {
        dispatch({ type: "GET_ADDRESS_SUCCESS", data: response.result });
      }
    } catch (error) {
      dispatch({ type: "GET_ADDRESS_ERROR", error });
    }
  }
}

export function getAllAddresses() {
  return async (dispatch) => {
    const URL = `http://127.0.0.1:4000/all`;
    dispatch({ type: "GET_ALL_ADDRESSES_REQUEST" });

    try {
      const fetchResponse = await fetch(URL);
      const response = await fetchResponse.json();
      if (response.error) {
        dispatch({ type: "GET_ALL_ADDRESSES_ERROR", error: response.result });
      } else {
        dispatch({ type: "GET_ALL_ADDRESSES_SUCCESS", data: response.result });
      }
    } catch (error) {
      dispatch({ type: "GET_ALL_ADDRESSES_ERROR", error });
    }
  }
}