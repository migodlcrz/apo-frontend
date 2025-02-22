const LandingPage = () => {
  return (
    <div id="Landing Page">
      <div className="flex flex-col w-full items-center pt-4 gap-4">
        <div className="flex flex-col w-full items-center text-center">
          <img src="/100-year.png" className="w-[80%] h-[80%]" />
          <span className="text-blue-950 font-bold text-2xl">
            APOAA-GNY Centennial Celebration
          </span>
        </div>
        <div className="flex flex-col w-full bg-[#292e3b] p-8">
          <span className="text-white text-sm text-justify">
            Alpha Phi Omega's (APO) mission is to prepare college students to be
            community and campus leaders through service and fellowship. APO's
            vision is to be recognized as the top service-based leadership
            development organization.{" "}
          </span>
        </div>
        <div className="flex flex-col w-full justify-center items-center px-8 gap-4 ">
          <span className="text-[#292e3b] text-2xl font-bold">Mission</span>
          <ul className="w-full items-start text-[#292e3b] text-lg font-semibold">
            <li>Develop leadership skills</li>
            <li>Promote friendship</li>
            <li>Provide service</li>
            <li>Create inclusive communities</li>
            <li>Make the world a better place</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
