import { useEffect } from "react";
import "./App.css";
import Aboutme from "./components/Aboutme";
import Header from "./components/Header";
import { useDispatch } from "react-redux";
import { dilAl, english, modeAl, turkish } from "./store/actions/actions";
import Skills from "./components/Skills";
import Profile from "./components/Profile";
import Project from "./components/Project";
import Footer from "./components/projectComp/footer";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const language = localStorage.getItem("language");
    dispatch(dilAl(language));

    if (language === "english") {
      dispatch(english());
    } else if (language === "turkish") {
      dispatch(turkish());
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
          <div className="w-[161.33px] h-[161.33px] bg-[transparent] border-[#D9D9D9] border-[28px] rounded-full ml-[70.3vw] z-[99] absolute flex items-center justify-center bottom-0 mb-[-92.665px]"></div>
        </div>
      </div>
      <Skills />
      <div className="w-[100%] h-[65.33px] absolute">
        <div className="w-[135px] h-[65.33px] bg-[#525252] mt-[-126.66px] rounded-r-full"></div>
      </div>
      <div className="w-[100%] absolute flex justify-end">
        <img
          src="https://i.hizliresim.com/3s2bbrs.png"
          className="mt-[-42px]"
        />
      </div>
      <Profile />
      <Project />
      <Footer />
      <div className="w-[100%] absolute">
        <div className="w-[366.67px] h-[24px] bg-[#82BBFF] absolute bottom-[337px] left-[693px] -z-[1] rounded-[5.33px]"></div>
      </div>
    </>
  );
}

export default App;
