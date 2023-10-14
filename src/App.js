import "./App.css";
import GifList from "./components/GifList";
import GifForm from "./components/GifForm";
import { connect } from "react-redux";
import { useEffect } from "react";
import { getGifs } from "./actions";

function App(props) {
  const { loading, error, getGifs } = props;

  useEffect(() => {
    getGifs("dogs");
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

export default connect(mapStateToProps, { getGifs })(App);
