import "./App.css";
import GifList from "./components/GifList";
import GifForm from "./components/GifForm";
import { connect } from "react-redux";
import { useEffect } from "react";
import { fetchstart, fetchSuccess } from "./actions";
import axios from "axios";

function App(props) {
  const { loading, error } = props;

  useEffect(() => {
    props.fetchstart();
    axios
      .get(
        `https://api.giphy.com/v1/gifs/search?api_key=zbJLj05GcKTx4iYyJSVZUUe8p50Mn2WB&q=dogs`
      )
      .then((res) => {
        props.fetchSuccess(res.data.data);
      });
  }, []);

  return (
    <div className="App">
      <h1>Search for Gifs</h1>
      <GifForm />

      {error !== "" && <h3>{error}</h3>}

      {loading ? <h3>We are loading</h3> : <GifList />}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    loading: state.loading,
    error: state.error,
  };
};

// const mapActionsToProps = () => {
//   return {
//     fetchstart
//   }
// }

export default connect(mapStateToProps, { fetchstart, fetchSuccess })(App);
