import { FaLocationDot } from "react-icons/fa6";
import CentennialCard from "../components/CentennialCard";
import Tag from "../components/Tag";
import YellowTag from "../components/YellowTag";

const CentennialPage = () => {
  return (
    <div className="flex flex-col gap-20 w-full justify-center items-center pt-20 relative">
      {/* Premium Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-yellow-50/30 to-white/50 -z-10"></div>
      <div className="absolute top-20 right-10 w-64 h-64 bg-gradient-to-r from-yellow-300/20 to-yellow-500/20 rounded-full blur-3xl -z-10"></div>
      {/* Added Centennial Links Section */}
      <div
        // ref={centennialRef}
        className="flex flex-col gap-10 w-full items-center justify-center bg-gradient-to-b from-slate-100 to-white px-10 lg:px-40"
        // initial="hidden"
        // whileInView="visible"
        // viewport={{ once: true }}
        // variants={fadeUp}
      >
        <div className="text-center items-center flex flex-col gap-6 max-w-4xl relative">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 rounded-full blur-lg"></div>
            <Tag mode="dark">🎉 Centennial Exclusive</Tag>
          </div>
          <h2 className="text-2xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
            Celebrating our 100th Anniversary
          </h2>
          <p className="text-slate-600 text-md lg:text-xl">
            Join us for a momentous Centennial Celebration on December 14–16,
            2025. Hosted by APO - ALUMNI ASSOCIATION of GREATER NEW YORK.
          </p>
          <p className="text-slate-600 text-md lg:text-xl">
            You Are Invited To A Once in a Lifetime Event that You Don’t Want To
            Miss. A Century of Great Leadership, Lasting Friendship, and
            Relentless Service!
          </p>
          <div className="flex flex-row gap-4 justify-center mt-6">
            <button
              onClick={() =>
                window.open(
                  "https://docs.google.com/forms/d/e/1FAIpQLSd7FGy-1YDi5T7GfcANAFCUwm0OxU7YdI5otvp_VCbyPEIyZQ/viewform",
                  "_blank"
                )
              }
              className="relative group bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-black px-8 py-4 rounded-xl font-bold text-md lg:text-xl transition-all transform hover:scale-105 shadow-2xl border-2 border-white/30"
            >
              <span className="absolute inset-0 bg-white/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></span>
              <span className="relative flex items-center gap-2">
                ✨ Register Now
              </span>
            </button>
            <button className="relative bg-white/80 backdrop-blur-sm text-[#282e3a] border-2 border-yellow-300/50 hover:bg-yellow-50 hover:border-yellow-400 px-8 py-4 rounded-xl font-bold text-md lg:text-xl transition-all shadow-xl">
              Learn More
            </button>
          </div>
        </div>
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
          <img
            src="/centennial-register.PNG"
            alt="Centennial Registration"
            className="relative w-full max-w-xl rounded-2xl shadow-2xl border-4 border-white/50 group-hover:scale-105 transition-transform"
          />
        </div>
        <div className="relative flex flex-col lg:flex-row w-full bg-gradient-to-r from-[#282e3a] to-[#1a1f2e] gap-10 p-10 rounded-2xl shadow-2xl border border-yellow-400/20">
          <div className="absolute top-4 right-4 bg-yellow-400/20 backdrop-blur-sm px-3 py-1 rounded-full text-yellow-300 text-xs font-bold border border-yellow-400/30">
            PREMIUM CONTENT
          </div>
          <div className="flex flex-col gap-6 w-full lg:w-1/2 justify-between">
            <h3 className="text-white text-2xl lg:text-4xl font-bold">
              A Century of Service in the Greatest City
            </h3>
            <p className="text-yellow-200 text-sm lg:text-lg">
              Since 1925, Alpha Phi Omega has been woven into the fabric of New
              York City – from Harlem to Wall Street, from the Village to the
              Heights.
            </p>
            <div className="hidden lg:flex gap-2">
              <YellowTag icon={<FaLocationDot />} text="Leadership" />
              <YellowTag icon={<FaLocationDot />} text="Friendship" />
              <YellowTag icon={<FaLocationDot />} text="Service" />
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <video
              src="/teaser-1.mp4"
              className="w-full rounded-lg shadow-md"
              controls
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full items-center gap-10 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-yellow-50/20 to-transparent -z-10"></div>
        <div className="relative text-center">
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-yellow-600/10 rounded-2xl blur-2xl"></div>
          <div className="relative text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent px-8 py-4">
            ✨ Exclusive Centennial Events
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-6 w-full lg:px-20 px-5 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-100/30 via-transparent to-yellow-100/30 rounded-3xl -z-10"></div>
          <div className="flex flex-col gap-4 w-full lg:w-1/2">
            <CentennialCard
              title="Registration"
              subtitle="Register Here"
              link="https://docs.google.com/forms/d/e/1FAIpQLSd7FGy-1YDi5T7GfcANAFCUwm0OxU7YdI5otvp_VCbyPEIyZQ/viewform"
              img="/links/register.png"
              description="Secure your spot at the Centennial Celebration by completing the registration form. This step ensures you're officially counted among the attendees and helps organizers prepare an unforgettable experience. Click the link to register online with your details."
            />
            <CentennialCard
              title="Hotels"
              subtitle="Where Are You Staying"
              link="/pdfs/hotels.pdf"
              img="/links/hotel.png"
              description="Looking for a place to stay during the celebration? Browse our curated list of nearby hotels offering comfortable accommodations for all budgets. Access the PDF to explore lodging options and plan your stay with ease."
            />
            <CentennialCard
              title="Event Packages"
              subtitle="Check Our Available Packages"
              link="/pdfs/event-packages.pdf"
              img="/links/100-year.png"
              description="Choose from a variety of exciting event packages tailored to suit your interests and availability. Each package offers a unique way to experience the Centennial festivities. View the full list in the downloadable PDF to find the one that fits you best."
            />
          </div>

          <div className="flex flex-col gap-4 w-full lg:w-1/2">
            <CentennialCard
              title="Payment"
              subtitle="Where to Send Payment"
              link="/pdfs/payment.pdf"
              img="/links/payment.png"
              description="Find out how to send your payments for registration and event packages securely. This guide includes all necessary banking details and instructions. Make sure your payment is properly processed by following the provided steps in the PDF."
            />
            <CentennialCard
              title="Itinerary"
              subtitle="Where We Heading"
              link="/pdfs/itinerary.pdf"
              img="/links/itinerary.png"
              description="Get a sneak peek at all the activities planned for the Centennial Celebration. The itinerary outlines day-by-day events, locations, and times so you can prepare ahead. Download the full schedule and don’t miss a moment of the excitement."
            />
            <CentennialCard
              title="Inquiries"
              subtitle="Email apoaagny@gmail.com"
              link="mailto:apoaagny@gmail.com"
              img="/links/inquiry.png"
              description="Have any questions about the event? Whether it’s about registration, accommodations, or activities, feel free to reach out. Send an email to apoaagny@gmail.com and our team will gladly assist you."
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row w-full items-stretch h-auto lg:h-[calc(100vh)] relative">
        <div className="absolute top-4 left-4 z-10 bg-black/50 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-bold border border-white/20">
          🏆 EXCLUSIVE FEATURE
        </div>
        <div className="w-full lg:w-2/3 lg:relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-transparent z-10 group-hover:opacity-50 transition-opacity"></div>
          <img
            src="the-grind.PNG"
            alt=""
            className="lg:absolute lg:inset-0 w-full h-full lg:object-cover filter brightness-110 contrast-105"
          />
        </div>
        <div className="flex flex-col w-full lg:w-1/3 gap-5 bg-gradient-to-b from-[#ffec9c] to-[#dbbb17] items-start p-10 lg:p-20 relative">
          <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-300/20 rounded-full blur-2xl"></div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent rounded-lg blur-sm"></div>
            <h1 className="relative text-black text-lg lg:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text">
              🏛️ Meeting with the Mayor
            </h1>
          </div>
          <span className="text-black">
            Mayor Sal Panto Jr of Easton, PA <br />
            Feb. 12, 2024 <br />
            By: Bro. Sol Jasper Kapunan <br />
          </span>
          <p className="text-black">
            One clear GNY Vision leads to one grand direction. The team shall
            deliver spot-on; we now have the approval from Easton!
          </p>
          <p className="text-black">
            Thanks for the reception Mayor Sal, as you welcomed the team with
            Sol. Hand in hand, everyone stood tall; inch by inch we will deliver
            it all!
          </p>
          <p className="text-black">
            This lifetime shall bear witness to our centennial. Nil any repeat,
            no retakes and no remedial; For if we sleep and miss this one, then
            wait shall we in eternity, after we’re gone.
          </p>
          <p className="text-black">
            But one thing for sure that brothers and sisters will do; an
            indelible mark and at the center too. The rotunda, the prime
            location; at the heartland of Easton we will lay the foundation. The
            Obelisk shall not be the only one; historic tours & more shall
            continue the fun.
          </p>
          <p className="text-black">
            Our fraternity has evolved in all directions, with memorable events
            to remind this nation. For posterity and unto thee, we commence the
            grind and put everything in motion.
          </p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row w-full items-start gap-10 p-10 lg:p-20 bg-gradient-to-b from-[#ffec9c] to-[#dbbb17]">
        <div className="flex flex-col w-full lg:w-1/2">
          <h1 className="text-black text-lg lg:text-5xl font-bold mb-4">
            Centennial Planning in Action!
          </h1>
          <p className="text-black text-md lg:text-xl mb-6">
            A successful planning meeting between Alpha Phi Omega Alumni
            Association Greater New York (APOAA GNY) and Lafayette College as we
            work together to prepare for the Alpha Phi Omega 100th Anniversary
            Celebration this December 14–16, 2025!
          </p>
          <p className="text-black text-md lg:text-xl mb-6">
            Exciting things are on the horizon as we honor 100 years of
            Leadership, Friendship, and Service.
          </p>

          <div className="mt-4">
            <h2 className="text-black font-bold text-lg lg:text-2xl">
              Lafayette Team:
            </h2>
            <ul className="text-black text-sm lg:text-md list-disc ml-5">
              <li>Nicole Eramo - Chief of Staff</li>
              <li>
                Elaine Stomber - Co-Director of Special Collections & College
                Archives and College Archivist
              </li>
              <li>
                Kelly Huth - Alpha Phi Omega Adviser on Campus and Assistant
                Director for Internal & Community Communications
              </li>
              <li>Jeff Troxell - Director of Public Safety</li>
              <li>
                Chelsea Morreese - Executive Director of Community Engagement
                and Director of the Landis Center
              </li>
            </ul>
          </div>

          <div className="mt-6">
            <h2 className="text-black font-bold text-lg lg:text-2xl">
              APOAA GNY Centennial Team:
            </h2>
            <ul className="text-black text-sm lg:text-md list-disc ml-5">
              <li>Bro. Sol Jasper Kapunan</li>
              <li>Bro. Nathaniel Roehl Ty</li>
              <li>Bro. Virmin Banaag</li>
              <li>Sis. Jericha Ong-Daof</li>
              <li>Sis. JoyMa O’Brien (not in picture)</li>
              <li>Bro. Edwin Monge (not in picture)</li>
              <li>Bro. Jigsaw Reodica (not in picture)</li>
              <li>Bro. Opal Raymundo (not in picture)</li>
            </ul>
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="p-3 bg-gradient-to-r from-[#AE8625] via-[#F7EF8A] to-[#D2AC47] rounded-3xl">
            <img
              src="/centennial-planning.png"
              alt="Centennial Planning"
              className="rounded-xl shadow-lg w-full h-auto max-w-[600px] bg-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CentennialPage;
