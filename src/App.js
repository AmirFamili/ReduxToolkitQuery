import { useState } from "react";
import { Provider } from "react-redux";
import store from "./app/store"
import AlbumList from "./components/AlbumList";
import UpdateAlbum from "./components/UpdateAlbum";
import NewAlbum from "./components/NewAlbum";

function App() {
  const [selectedAlbum, setSelectedAlbum] = useState(null)
  return (
    <Provider store={store}>
      <AlbumList setSelectedAlbum={setSelectedAlbum} />
      <UpdateAlbum selectedAlbum={selectedAlbum} setSelectedAlbum={setSelectedAlbum} />
      <NewAlbum />
    </Provider>
  );
}

export default App;
