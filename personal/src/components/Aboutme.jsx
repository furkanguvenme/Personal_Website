import { useSelector } from "react-redux";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";

export default function Aboutme() {
  const myData = useSelector((store) => store.myData);

  if (!myData.about) {
    return <div>Loading...</div>;
  }

  console.log(myData);
  return (
    <div className="w-[100%] h-[41.125rem] flex justify-center mt-[76px]">
      <div className="flex w-[92.25rem] h-[35rem] justify-between">
        <div className="text-[56px] h-[100%] flex flex-col justify-between">
          <p className="w-[888px]">
            <span className="text-[40px]">{myData.about.paragraph1}</span>{" "}
            <br /> <span>{myData.about.paragraph2}</span>
            <br />
            <span>{myData.about.paragraph3}</span>
          </p>
          <div>
            <div className="flex flex-row gap-[1.6875rem]">
              <FaLinkedinIn className="w-[41.33px] h-[45.27]" />
              <FaGithub className="w-[45.33px] h-[48.19]" />
            </div>
            <div className="text-[24px]">
              <p>
                Currently <span className="text-[#AF0C48]">Freelancing</span>{" "}
                for <span className="text-[#AF0C48]">UX, UI, & Web Desing</span>{" "}
                Project .
              </p>
              <p>
                Invite me to join your team →{" "}
                <span className="text-[#AF0C48]">furkanguven.me@gmail.com</span>
              </p>
            </div>
          </div>
        </div>
        <img
          src={myData.about.photo}
          className=" w-[28.416875rem] h-[28.416875rem] object-cover rounded-[1.833125rem] mt-[76px]"
        />
      </div>
    </div>
  );
}
