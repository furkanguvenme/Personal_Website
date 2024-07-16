import { useSelector } from "react-redux";

export default function Profile() {
  const profile = useSelector((store) => store.myData).profile;
  const dil = localStorage.getItem("language");
  return (
    <>
      <div>
        <div className="w-[120px] h-[24px] bg-[#82BBFF] absolute ml-[987.33px] mt-[255.33px] rounded-[5.33px] max-md:hidden"></div>
        <div className="w-[100%] h-[73.984vh]  bg-[#F4F4F4] flex flex-col items-center justify-center ">
          {dil == "english" ? (
            <h1 className="text-[48px] font-medium font-[Inter] pb-0 mb-[61px] max-md:mb-[-80px] ">
              Profile
            </h1>
          ) : (
            <h1 className="text-[48px] font-medium font-[Inter] pb-0 mb-[61px] max-md:mb-[-80px] ">
              Profil
            </h1>
          )}
          <div className=" flex flex-row justify-center items-center gap-[87px] max-md:flex-col max-md:gap-0 ">
            <div className="w-[666.67px] h-[417.33px]  bg-white pl-[56px] pt-[56px] rounded-[16px] max-md:scale-[0.6] max-md:mb-[-100px]">
              <h2 className="text-[32px] font-normal font-[playfair] text-[#EA2678] mb-[32px]">
                {dil == "english" ? "Basic Information" : "Kişisel Bilgiler"}
              </h2>
              <div className="flex gap-[35px] leading-[48px] ">
                <div className="w-[185px] h-[232px] text-[24px] font-semibold font-[Inter]">
                  <p>{profile.born}</p>
                  <p>{profile.city}</p>
                  <p>{profile.education}</p>
                  <br />
                  <p>{profile.position}</p>
                </div>
                <div className="w-[275px] h-[232px] text-[24px] font-normal font-[Inter]">
                  <p>{profile.bornTime}</p>
                  <p>{profile.cityx}</p>
                  <p className="leading-[32px]">{profile.educationx}</p>
                  <p>{profile.positionx}</p>
                </div>
              </div>
            </div>

            <div className="w-[636.67px] h-[321.33px] flex flex-col justify-center gap-8 z-[1] max-md:scale-[0.6]">
              <h2 className="text-[32px] font-normal font-[playfair]">
                {profile.title}
              </h2>
              <p className="text-[24px] font-normal font-[Inter]">
                {profile.aboutme}
              </p>
              <p className="text-[24px] font-normal font-[Inter]">
                {profile.aboutme2}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
