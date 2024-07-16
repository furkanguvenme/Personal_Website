import { useSelector } from "react-redux";
import Ones from "./ones";

export default function Proje({ item, index }) {
  const librarys = Object.values(item.used);
  const darkMode = useSelector((store) => store.darkMode);

  return (
    <>
      <div
        key={index}
        className="w-[666.67px] h-[890.67px] rounded-[16px] flex flex-col pl-[53.33px] pr-[122.67px] pt-[61.33px] gap-[20px] "
        style={{ background: `${darkMode ? item.darkBack : item.background}` }}
      >
        <h2 className="text-[38.67px] font-[playfair] font-bold dark:text-[#FFFFFF]">
          {item.name}
        </h2>
        <p className="text-[21.33px] font-[Inter] font-normal dark:text-[#FFFFFF]">
          {item.about}
        </p>
        <div className="w-[70%] flex flex-row flex-wrap gap-[13.67px] ">
          {librarys.map((item, index) => {
            return <Ones key={index} item={item} index={index} />;
          })}
        </div>
        <div className="w-[100%] flex flex-row justify-between">
          <a
            href={item.link}
            className="text-[26.67px] font-semibold font-[Inter] dark:text-[#FFFFFF]"
          >
            View on Github
          </a>
          <a
            href={item.link2}
            className="text-[26.67px] font-semibold font-[Inter] dark:text-[#FFFFFF]"
          >
            Go to app →
          </a>
        </div>
        <div className="flex justify-center absolute mt-[566.67px] ml-[-53.33px] ">
          <img
            src={item.picture}
            className="z-[99] absolute w-[468.2px] h-[292px] ml-[0.3px] mt-[22px]"
          />
          <img src={item.pcPicture} className="" />
        </div>
      </div>
    </>
  );
}
