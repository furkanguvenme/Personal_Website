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
    if (language !== null) {
      if (language === "english") {
        dispatch(english());
      } else {
        dispatch(turkish());
      }
    }

    const dark = JSON.parse(localStorage.getItem("mode"));
    if (dark !== null) {
      dispatch(modeAl(dark));
    }
  }, [dispatch]);

  return (
    <>
      <div className="w-[100%] h-[984px] bg-[#F4F4F4] ">
        <div className="w-[100%] ">
          <div className="w-[148px] h-[148px] bg-[#D9D9D9] rounded-full mt-[-60px] ml-[33.1vw]"></div>
        </div>
        <Header />
        <Aboutme />
        <div className="w-[100%]">
          <div className="w-[161.33px] h-[161.33px] bg-[#D9D9D9] rounded-full ml-[70.3vw] z-[99] absolute flex items-center justify-center bottom-0 mb-[-92.665px]">
            <div className="w-[105.33px] h-[105.33px]">
              <div className="w-[105.33px] h-[52.665px] bg-[#F4F4F4] rounded-t-[52.665px]"></div>
              <div className="w-[105.33px] h-[52.665px] bg-white rounded-b-[52.665px]"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
