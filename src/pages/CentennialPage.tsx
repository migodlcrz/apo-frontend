import CentennialCard from "../components/CentennialCard";

const CentennialPage = () => {
  return (
    <div className="flex flex-col gap-20 w-full justify-center items-center pt-20">
      {/* Added Centennial Links Section */}
      <div className="flex flex-col w-full items-center gap-10">
        <div className="text-4xl font-bold">Centennial Events</div>
        <div className="flex flex-col lg:flex-row gap-4 w-full px-20">
          <div className="flex flex-col gap-4 w-full lg:w-1/2">
            <CentennialCard
              title="Registration"
              subtitle="Register Here"
              link="https://docs.google.com/forms/d/e/1FAIpQLSd7FGy-1YDi5T7GfcANAFCUwm0OxU7YdI5otvp_VCbyPEIyZQ/viewform"
              img="/links/register.png"
            />
            <CentennialCard
              title="Hotels"
              subtitle="Where Are You Staying"
              link="/pdfs/hotels.pdf"
              img="/links/hotel.png"
            />
            <CentennialCard
              title="Event Packages"
              subtitle="Check Our Available Packages"
              link="/pdfs/event-packages.pdf"
              img="/links/100-year.png"
            />
          </div>
          <div className="flex flex-col gap-4 w-full lg:w-1/2">
            <CentennialCard
              title="Payment"
              subtitle="Where to Send Payment"
              link="/pdfs/payment.pdf"
              img="/links/payment.png"
            />
            <CentennialCard
              title="Itinerary"
              subtitle="Where We Heading"
              link="/pdfs/itinerary.pdf"
              img="/links/itinerary.png"
            />
            <CentennialCard
              title="Inquiries"
              subtitle="Email apoaagny@gmail.com"
              link="mailto:apoaagny@gmail.com"
              img="/links/inquiry.png"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row w-full items-stretch h-auto lg:h-[calc(100vh)]">
        <div className="w-full lg:w-2/3 lg:relative">
          <img
            src="the-grind.PNG"
            alt=""
            className="lg:absolute lg:inset-0 w-full h-full lg:object-cover"
          />
        </div>
        <div className="flex flex-col w-full lg:w-1/3 gap-5 bg-[#ffec9c] items-start p-10 lg:p-20">
          <h1 className="text-black text-lg lg:text-5xl">The Grind</h1>
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

      <div className="flex flex-col lg:flex-row w-full items-start gap-10 p-10 lg:p-20 bg-[#ffec9c]">
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
