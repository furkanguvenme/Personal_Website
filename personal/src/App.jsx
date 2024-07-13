import { useEffect } from "react";
import "./App.css";
import Aboutme from "./components/Aboutme";
import Header from "./components/Header";
import { useDispatch } from "react-redux";
import { english, modeAl, turkish } from "./store/actions/actions";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const language = localStorage.getItem("language");
    if (language === "english") {
      dispatch(english());
    } else {
      dispatch(turkish());
    }

    const dark = JSON.parse(localStorage.getItem("mode"));
    if (dark !== null) {
      dispatch(modeAl(dark));
    }
  }, [dispatch]);

  return (
    <>
      <div className="w-[100%] h-[100vh] ">
        <div className="w-[100%]">
          <div className="w-[148px] h-[148px] bg-[#D9D9D9] rounded-full mt-[-60px] ml-[28vw]"></div>
        </div>
        <Header />
        <Aboutme />
      </div>
    </>
  );
}

export default App;
