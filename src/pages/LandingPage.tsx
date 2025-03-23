import { useNavigate } from "react-router-dom";
import Accordion from "../components/Accordion";

const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <div id="Landing Page" className="flex flex-col gap-10 pb-10">
      <div className="w-full relative">
        <img
          src="/group-students.jpg"
          className="w-full h-[80vh] object-cover"
          alt="Main Landing"
        />
        <div className="absolute inset-0 bg-opacity-50 flex flex-col items-center justify-center text-center px-6 lg:px-12 space-y-4">
          <span className="text-white text-3xl lg:text-6xl font-extrabold drop-shadow-lg">
            Welcome to APOAA-GNY Centennial Celebration
          </span>
          <span className="text-white text-lg lg:text-3xl font-medium drop-shadow-lg max-w-3xl">
            Support Our Mission: Your Contribution Empowers Leadership, Service,
            and Lasting Change.
          </span>
          <button
            className="bg-[#e8d794] text-[#282e3a] font-bold text-lg lg:text-xl py-3 px-8 rounded-full shadow-lg transition-transform transform hover:scale-105 hover:bg-[#d4c285]"
            onClick={() => {
              navigate("/donate");
            }}
          >
            Donate Now
          </button>
        </div>
      </div>

      {/* Slideshow & Logo Section */}
      <div className="flex flex-col-reverse gap-10 lg:gap-none lg:flex-row w-full items-center justify-center py-10 bg-white">
        {/* Slideshow */}
        <div className="w-full lg:w-1/2 px-6">
          <video
            src="/slideshow.mp4"
            className="w-full rounded-lg shadow-lg"
            controls
          >
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Logo & Text */}
        <div className="w-full lg:w-1/2 flex flex-col items-center justify-center text-center px-6">
          <img src="/100-year.png" className="w-auto h-[80%] mb-4" />
          <span className="text-[#282e3a] font-bold text-2xl lg:text-4xl">
            APOAA-GNY Centennial Celebration
          </span>
        </div>
      </div>

      {/* About Section */}
      <div className="flex flex-col w-full items-center py-4 gap-4 lg:gap-10">
        <div className="flex flex-col lg:flex-col gap-4 items-center">
          <span className="text-[#292e3b] text-2xl lg:text-4xl font-bold">
            About
          </span>
          <div className="flex flex-col lg:flex-row gap-4 items-center w-full lg:px-40">
            <div className="flex flex-col w-full lg:w-full items-center justify-center p-8">
              <span className="text-[#292e3b] text-sm lg:text-xl text-justify">
                Alpha Phi Omega's (APO) mission is to prepare college students
                to be community and campus leaders through service and
                fellowship. APO's vision is to be recognized as the top
                service-based leadership development organization.
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="flex flex-col w-full justify-center items-center px-8 gap-4">
        <span className="text-[#292e3b] text-2xl lg:text-4xl font-bold">
          Mission
        </span>
        <ul className="flex flex-col gap-10">
          <Accordion title="Develop leadership skills">
            Leadership is not just about authority—it’s about inspiring others,
            making tough decisions, and fostering growth. We aim to develop
            strong leaders who lead with integrity, confidence, and a commitment
            to positive change.
          </Accordion>
          <Accordion title="Promote Friendship">
            Friendship is the foundation of a strong and supportive community.
            We encourage genuine connections built on trust, respect, and shared
            experiences.
          </Accordion>
          <Accordion title="Provide Service">
            Service is at the heart of our mission, driving us to give back to
            those around us. By prioritizing service, we strengthen our
            commitment to making a difference.
          </Accordion>
          <Accordion title="Create Inclusive Communities">
            A thriving community is one where diversity is embraced, and
            everyone feels welcome.
          </Accordion>
          <Accordion title="Make the World a Better Place">
            Our ultimate goal is to leave the world better than we found it.
          </Accordion>
        </ul>
      </div>

      {/* Vision Section */}
      <div className="flex flex-col w-full justify-center bg-[#282e3a] items-center p-8 lg:py-16 gap-4">
        <span className="text-white text-2xl lg:text-4xl font-bold">
          Vision
        </span>
        <ul className="flex flex-col gap-10 text-white text-sm lg:text-xl">
          <li>
            <span className="text-xl lg:text-3xl font-bold">1. </span>Be
            recognized as the top service-based leadership development
            organization.
          </li>
          <li>
            <span className="text-xl lg:text-3xl font-bold">2. </span>Create
            inclusive communities for a more peaceful world.
          </li>
          <li>
            <span className="text-xl lg:text-3xl font-bold">3. </span>Values
            leadership, friendship, and service.
          </li>
          <li>
            <span className="text-xl lg:text-3xl font-bold">4. </span>
            Objectives: Share, Grow, Improve, and Invest.
          </li>
        </ul>
      </div>

      {/* Service & Fellowship Sections */}
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="flex flex-col w-full justify-center items-center px-8 gap-4">
          <span className="text-[#292e3b] text-2xl lg:text-4xl font-bold">
            Service
          </span>
          <div className="flex flex-col w-full h-full bg-[#282e3a] p-6 lg:p-10 text-white text-sm lg:text-xl text-justify gap-6">
            <span>
              APO members volunteer at many community service organizations,
              including The Humane Society, Boys and Girls Club, and Habitat for
              Humanity.
            </span>
            <span>
              APO also hosts events such as blood drives and run-a-thons.
            </span>
          </div>
        </div>
        <div className="flex flex-col w-full justify-center items-center px-8 gap-4">
          <span className="text-[#292e3b] text-2xl lg:text-4xl font-bold">
            Fellowship
          </span>
          <div className="flex flex-col w-full h-full bg-[#282e3a] p-6 lg:p-10 text-white text-sm lg:text-xl text-justify gap-6">
            <span>
              APO members bond through activities such as movie nights, going to
              the gym, and crafting.
            </span>
            <span>
              APO encourages alumni brothers to become volunteers after
              graduation.
            </span>
            <span>
              APO is a national co-ed fraternity that was derived from the Boy
              Scouts of America.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
