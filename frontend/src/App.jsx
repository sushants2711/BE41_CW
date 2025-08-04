import { AddMovie } from "./components/AddMovie";
import { MovieByTitle } from "./components/MovieByTitle";
import { Movies } from "./components/Movies";

function App() {
  return (
    <>
    <AddMovie />
      <Movies />
      <MovieByTitle title="RRR"/>
    </>
  );
}

export default App;
