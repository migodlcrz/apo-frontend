import Accordion from "../components/Accordion";

const LandingPage = () => {
  return (
    <div id="Landing Page">
      <div className="flex flex-col w-full items-center gap-4 lg:gap-10">
        <div className="flex flex-col w-full">hello</div>
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex flex-col w-full lg:w-1/2 items-center justify-center text-center">
            <img src="/100-year.png" className="w-auto h-[80%]" />
            <h1 className="text-blue-950 font-bold text-2xl lg:text-4xl">
              APOAA-GNY Centennial Celebration
            </h1>
          </div>
          <div className="flex flex-col w-full lg:w-1/2 bg-[#292e3b] border-y-2 items-center justify-center p-8">
            <span className="text-white text-sm lg:text-xl text-justify">
              Alpha Phi Omega's (APO) mission is to prepare college students to
              be community and campus leaders through service and fellowship.
              APO's vision is to be recognized as the top service-based
              leadership development organization.
            </span>

            <video
              src="/slideshow.mp4"
              className="mt-4 w-full rounded-lg"
              controls
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        {/* <div className="flex flex-col lg:flex-row-reverse gap-4"> */}
        <div className="flex flex-col w-full justify-center items-center px-8 gap-4 ">
          <h1 className="text-[#292e3b] text-2xl lg:text-4xl font-bold">
            Mission
          </h1>
          <ul className="flex flex-col w-full lg:w-1/2">
            <Accordion title="Develop leadership skills">
              Leadership is not just about authority—it’s about inspiring
              others, making tough decisions, and fostering growth. We aim to
              develop strong leaders who lead with integrity, confidence, and a
              commitment to positive change. By honing problem-solving
              abilities, communication skills, and teamwork, we empower
              individuals to take initiative and drive meaningful progress
              within our organization and beyond.
            </Accordion>
            <Accordion title="Promote Friendship">
              Friendship is the foundation of a strong and supportive community.
              We encourage genuine connections built on trust, respect, and
              shared experiences. Through brotherhood and camaraderie, we create
              bonds that last a lifetime, ensuring that no one stands alone in
              times of challenge or triumph.
            </Accordion>
            <Accordion title="Provide Service">
              Service is at the heart of our mission, driving us to give back to
              those around us. Whether it’s volunteering on campus, supporting
              local communities, or contributing to national initiatives, we
              believe that selfless acts create lasting impact. By prioritizing
              service, we strengthen our commitment to making a difference in
              the lives of others.
            </Accordion>
            <Accordion title="Create Inclusive Communities">
              A thriving community is one where diversity is embraced, and
              everyone feels welcome. We are dedicated to fostering an
              environment where all voices are heard, differences are
              celebrated, and barriers are broken. Through inclusion, we build
              stronger, more united spaces that uplift every member.
            </Accordion>
            <Accordion title="Make the World a Better Place">
              Our ultimate goal is to leave the world better than we found it.
              Whether through leadership, friendship, service, or inclusivity,
              we strive to create a lasting, positive impact. By working
              together, we can drive meaningful change, inspire future
              generations, and shape a brighter future for all.
            </Accordion>
          </ul>
        </div>
        <div className="flex flex-col w-full justify-center bg-[#292e3b] border-y-2 items-center p-8 lg:py-16 gap-4 ">
          <h1 className="text-white text-2xl lg:text-4xl font-bold">Vision</h1>
          <ul className="flex flex-col gap-4 text-white text-sm lg:text-xl">
            <li>
              <span className="text-xl lg:text-3xl font-bold">1. </span>Be
              recognized as the top service-based leadership development
              organization
            </li>
            <li>
              <span className="text-xl font-bold">2. </span>Create inclusive
              communities for a more peaceful world
            </li>
            <li>
              <span className="text-xl font-bold">3. </span>Values leadership,
              friendship, and service.
            </li>
            <li>
              <span className="text-xl font-bold">4. </span>Objectives Share,
              Grow, Improve, and Invest.{" "}
            </li>
          </ul>
        </div>
        {/* </div> */}

        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex flex-col w-full justify-center items-center px-8 gap-4 ">
            <h1 className="text-[#292e3b] text-2xl lg:text-4xl font-bold">
              Service
            </h1>
            <div className="flex flex-col w-full h-full bg-[#292e3b] p-6 lg:p-10 text-white text-sm lg:text-xl text-justify gap-6">
              <span>
                APO members volunteer at many community service organizations,
                including The Humane Society, Boys and Girls Club, and Habitat
                for Humanity
              </span>
              <span>
                APO also hosts events such as blood drives and run-a-thons
              </span>
            </div>
          </div>
          <div className="flex flex-col w-full justify-center items-center px-8 gap-4 ">
            <h1 className="text-[#292e3b] text-2xl lg:text-4xl font-bold">
              Fellowship
            </h1>
            <div className="flex flex-col w-full h-full bg-[#292e3b] p-6 lg:p-10 text-white text-sm lg:text-xl text-justify gap-6">
              <span>
                APO members bond through activities such as movie nights, going
                to the gym, and crafting
              </span>
              <span>
                APO encourages alumni brothers to become volunteers after
                graduation
              </span>
              <span>
                APO is a national co-ed fraternity that was derived from the Boy
                Scouts of America.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
