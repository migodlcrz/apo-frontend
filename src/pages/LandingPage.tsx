import { useNavigate } from "react-router-dom";
import Accordion from "../components/Accordion";
import Tag from "../components/Tag";
import { IoTrophy } from "react-icons/io5";
import Card from "../components/Card";
import { FaHandshakeAngle, FaHeart } from "react-icons/fa6";
import { RiPlantFill } from "react-icons/ri";
import { useRef } from "react";

const LandingPage = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const centennialRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const handleScrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleScrolltoCentennial = () => {
    centennialRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div id="Landing Page" className="flex flex-col gap-10 pb-10 w-full">
      <div className="flex flex-col lg:px-40">
        <div className="flex flex-col items-start justify-center p-10 pt-20 lg:px-12 space-y-10">
          <div className="flex flex-col w-full text-start gap-10">
            <Tag mode="light">APO AAGNY</Tag>
            <span className="flex text-black text-3xl  lg:text-6xl font-extrabold drop-shadow-lg w-full text-center items-center lg:text-start lg:items-start">
              Come celebrate 100 years of Alpha Phi Omega!
            </span>
            <div className="flex flex-col w-full gap-2 text-center justify-center items-center lg:items-start lg:text-start">
              <span className="text-gray-500 text-md lg:text-2xl font-medium drop-shadow-lg w-9/12 lg:w-full">
                Join us for an unforgettable Centennial Celebration on December
                14-16 2025, hosted by APOAA Greater New York
              </span>
              <span className="text-gray-500 text-md lg:text-2xl font-medium drop-shadow-lg w-9/12 lg:w-full">
                Let's honor a century of Leadership, Friendship, and Service
                together!
              </span>
            </div>
            <div className="flex flex-row gap-2 w-full justify-center lg:justify-start">
              <button
                className="bg-[#282e3a] text-white font-bold text-md lg:text-xl py-2 lg:py-3 px-6 lg:x-8 rounded-lg transition hover:bg-[#1e2025]"
                onClick={handleScrolltoCentennial}
              >
                See details
              </button>
              <button
                className="bg-white text-[#282e3a] font-bold text-md lg:text-xl py-2 lg:py-3 px-6 lg:px-8 rounded-lg transition hover:bg-slate-100 border-[0.1px] border-[#282e3a]"
                onClick={handleScrollToAbout}
              >
                About Us
              </button>
            </div>
          </div>

          <div className="flex w-full justify-center">
            {/* <img
              src="/boat-ride.jpg"
              className="w-1/2 h-[80vh] object-cover"
              alt="Main Landing"
            /> */}
            <video
              src="/teaser.mp4"
              className="w-full lg:w-2/3 rounded-lg shadow-lg"
              controls
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>

      {/* Slideshow & Logo Section */}
      <div
        ref={centennialRef}
        className="flex flex-col gap-2 lg:gap-10 w-full items-center justify-center py-10 bg-slate-100 lg:px-40"
      >
        {/* Slideshow */}
        <div className="flex flex-col justify-center items-center gap-2">
          <Tag mode="dark">Special Announcement</Tag>
          <span className="text-xl lg:text-6xl font-bold">
            Celebrating our 100th Anniversary
          </span>
          <div className="flex flex-col w-full items-center justify-center px-6">
            <span className="text-slate-500 text-sm lg:text-xl text-center">
              Join us in commemorating a century of service, impact, and
              community building. A hundred years of making a difference, and
              we're just getting started.
            </span>
          </div>
          <div className="flex flex-row gap-2">
            <button
              onClick={() =>
                window.open(
                  "https://docs.google.com/forms/d/e/1FAIpQLSd7FGy-1YDi5T7GfcANAFCUwm0OxU7YdI5otvp_VCbyPEIyZQ/viewform",
                  "_blank"
                )
              }
              className="bg-[#282e3a] text-white px-4 py-2 rounded-lg font-semibold text-md lg:text-xl transition hover:bg-[#1e2025] cursor-pointer"
            >
              Register Now
            </button>
            <button
              onClick={() => {
                navigate("/centennial");
              }}
              className="text-[#282e3a] px-4 py-2 rounded-lg font-semibold text-md lg:text-xl transition hover:bg-slate-200 border-[0.1px] border-slate-300 cursor-pointer"
            >
              Learn More
            </button>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-2 w-full">
          <div className="w-full lg:w-1/2 px-6">
            <img src="/centennial-register.PNG" alt="" />
          </div>
        </div>

        {/* Logo & Text */}
        <div className="w-fit lg:w-1/2 flex flex-col items-center justify-center text-center p-6 bg-[#282e3a]">
          <img src="/100-year.png" className="w-auto h-[80%] mb-4" />
          <span className="text-white font-bold text-2xl lg:text-4xl">
            APOAA-GNY
          </span>
        </div>
      </div>

      {/* Mission Section */}
      {/* <div
        ref={aboutRef}
        className="flex flex-col w-full items-center py-4 gap-4 lg:gap-10 lg:px-40"
      >
        <div className="flex flex-col lg:flex-col gap-4 items-center">
          <Tag mode="light">Our Mission</Tag>
          <span className="text-xl lg:text-6xl font-bold">
            Creating Lasting Impact
          </span>
          <div className="flex flex-col w-full items-center justify-center px-6">
            <span className="text-slate-500 text-sm lg:text-xl text-center">
              Alpha Phi Omega's (APO) mission is to prepare college students to
              be community and campus leaders through service and fellowship.
              APO's vision is to be recognized as the top service-based
              leadership development organization.
            </span>
          </div>
          <ul className="flex flex-col gap-10">
            <Accordion title="Develop leadership skills">
              Leadership is not just about authority—it’s about inspiring
              others, making tough decisions, and fostering growth. We aim to
              develop strong leaders who lead with integrity, confidence, and a
              commitment to positive change.
            </Accordion>
            <Accordion title="Promote Friendship">
              Friendship is the foundation of a strong and supportive community.
              We encourage genuine connections built on trust, respect, and
              shared experiences.
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
      </div> */}

      {/* Vision Section */}
      <div className="flex flex-col w-full justify-center bg-white items-center p-8 lg:py-16 gap-4 lg:px-40">
        <Tag mode="light">Our Vision</Tag>
        <span className="text-xl lg:text-6xl font-bold">A Better Tomorrow</span>
        <div className="flex flex-col w-full items-center justify-center px-6">
          <span className="text-slate-500 text-sm lg:text-xl text-center">
            Alpha Phi Omega (APO) envisions a world where leadership thrives
            through service, friendships are forged through shared purpose, and
            communities are uplifted through inclusive growth. We aim to be the
            premier platform for individuals to share, grow, improve, and invest
            in themselves and others, creating a ripple effect of positive
            change across the globe.
          </span>
        </div>
        <div className="flex flex-col lg:flex-row gap-4 pt-8">
          <Card
            title="Top Leadership Organization"
            icon={<IoTrophy />}
            description="Be recognized as the premier organization for developing leaders
              through meaningful service and impactful experiences."
          />
          <Card
            title="Peace Through Inclusion"
            icon={<FaHandshakeAngle />}
            description="Build inclusive and welcoming communities that embrace diversity and promote unity for a more peaceful world."
          />
        </div>
        <div className="flex flex-col lg:flex-row gap-4">
          <Card
            title="Core Values in Action"
            icon={<FaHeart />}
            description="Uphold and promote the core values of leadership, friendship, and service in all that we do."
          />
          <Card
            title="Share. Grow. Improve. Invest."
            icon={<RiPlantFill />}
            description="Fulfill our mission by encouraging members to share knowledge, grow personally, improve communities, and invest in meaningful causes."
          />
        </div>
      </div>

      {/* Service & Fellowship Sections */}
      <div className="flex flex-col lg:flex-row gap-4 bg-slate-100 py-10">
        <div className="flex flex-col w-full justify-start items-start px-8 gap-4">
          <Tag mode="light">Service</Tag>
          <span className="text-xl lg:text-4xl font-bold">
            Service to the Community
          </span>
          <span className="text-slate-600">
            APO members actively contribute to various community service
            organizations like The Humane Society, Boys and Girls Club, and
            Habitat for Humanity. Additionally, we organize events such as blood
            drives and run-a-thons to make a positive impact and support those
            in need.
          </span>
          <div className="flex flex-col w-full h-full bg-slate-200 p-6 lg:p-10 text-white text-sm lg:text-xl text-justify gap-6 mt-8 rounded-lg shadow-lg">
            <span className="text-black">
              APO members volunteer at many community service organizations
            </span>
            <span className="text-black">
              APO also hosts events such as blood drives and run-a-thons.
            </span>
          </div>
        </div>
        <div className="flex flex-col w-full justify-start items-start px-8 gap-4">
          <Tag mode="light">Fellowship</Tag>
          <span className="text-xl lg:text-4xl font-bold">
            Fellowship and Brotherhood
          </span>
          <span className="text-slate-600">
            APO fosters strong bonds among members through activities like movie
            nights, gym sessions, and crafting. We also encourage alumni to stay
            connected and give back as volunteers after graduation. As a
            national co-ed fraternity rooted in the values of the Boy Scouts of
            America, we prioritize the spirit of fellowship and lifelong
            connections.
          </span>
          <div className="flex flex-col w-full h-full bg-slate-200 p-6 lg:p-10 text-white text-sm lg:text-xl text-justify gap-6 mt-8 rounded-lg shadow-lg">
            <span className="text-black">
              APO members bond through activities such as movie nights, going to
              the gym, and crafting.
            </span>
            <span className="text-black">
              APO encourages alumni brothers to become volunteers after
              graduation.
            </span>
            <span className="text-black">
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
