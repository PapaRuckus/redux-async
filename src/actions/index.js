import axios from "axios";

export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";

export const getGifs = (searchTerm) => {
  return (dispatch) => {
    dispatch(fetchstart());
    axios
      .get(
        `https://api.giphy.com/v1/gifs/search?api_key=zbJLj05GcKTx4iYyJSVZUUe8p50Mn2WB&q=${searchTerm}`
      )
      .then((res) => {
        dispatch(fetchSuccess(res.data.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const fetchstart = () => {
  return { type: FETCH_START };
};

export const fetchSuccess = (gifs) => {
  return { type: FETCH_SUCCESS, payload: gifs };
};
