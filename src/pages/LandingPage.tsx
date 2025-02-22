import Accordion from "../components/Accordion";

const LandingPage = () => {
  return (
    <div id="Landing Page">
      <div className="flex flex-col w-full items-center py-4 gap-4">
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
          <ul className="">
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
        <div className="flex flex-col w-full justify-center bg-[#292e3b] items-center p-8 gap-4 ">
          <span className="text-white text-2xl font-bold">Vision</span>
          <ul className="flex flex-col gap-4 text-white">
            <li className="text-white text-sm">
              <span className="text-xl font-bold">1. </span>Be recognized as the
              top service-based leadership development organization
            </li>
            <li className="text-white text-sm">
              <span className="text-xl font-bold">2. </span>Create inclusive
              communities for a more peaceful world
            </li>
            <li className="text-white text-sm">
              <span className="text-xl font-bold">3. </span>Values leadership,
              friendship, and service.
            </li>
            <li className="text-white text-sm">
              <span className="text-xl font-bold">4. </span>Objectives Share,
              Grow, Improve, and Invest.{" "}
            </li>
          </ul>
        </div>
        <div className="flex flex-col w-full justify-center items-center px-8 gap-4 ">
          <span className="text-[#292e3b] text-2xl font-bold">Service</span>
          <div className="flex flex-col w-full bg-[#292e3b] p-6 text-white text-sm text-justify gap-6">
            <span>
              APO members volunteer at many community service organizations,
              including The Humane Society, Boys and Girls Club, and Habitat for
              Humanity
            </span>
            <span>
              APO also hosts events such as blood drives and run-a-thons
            </span>
          </div>
        </div>
        <div className="flex flex-col w-full justify-center items-center px-8 gap-4 ">
          <span className="text-[#292e3b] text-2xl font-bold">Fellowship</span>
          <div className="flex flex-col w-full bg-[#292e3b] p-6 text-white text-sm text-justify gap-6">
            <span>
              APO members bond through activities such as movie nights, going to
              the gym, and crafting
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
  );
};

export default LandingPage;
