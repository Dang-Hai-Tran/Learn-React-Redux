import { useState } from "react";
import { useSelector } from "react-redux";
import "./App.css";
import EditPage from "./components/Edit/EditPage";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import MakePost from "./components/Posts/MakePost";
import Post from "./components/Posts/Post";

function App() {
  const [isEdit, setIsEdit] = useState(false);
  const pending = useSelector((state) => state.user.pending);
  const error = useSelector((state) => state.user.error);
  const [isOpenPost, setIsOpenPost] = useState(false);
  return (
    <div className="App">
      {isEdit ? (
        <EditPage setIsEdit={setIsEdit} />
      ) : (
        <>
          <Header setIsEdit={setIsEdit} />
          {pending && <p>Loading...</p>}
          {error && <p>Error!</p>}
          {isOpenPost ? (
            <MakePost setIsOpenPost={setIsOpenPost} />
          ) : (
            <>
              <div className="post-container">
                <Post />
              </div>
              <Footer isOpenPost={isOpenPost} setIsOpenPost={setIsOpenPost} />
            </>
          )}
        </>
      )}
    </div>
  );
}

export default App;
