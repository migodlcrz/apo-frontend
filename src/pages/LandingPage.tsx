import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

import Tag from "../components/Tag";
import RedirectCard from "../components/RedirectCard";
import NYCSlideshow from "../components/NYCSlideshow";

import { FaHeart } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { TbNumber100Small } from "react-icons/tb";
import { IoIosPeople } from "react-icons/io";
import { BiSolidDonateHeart } from "react-icons/bi";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const LandingPage = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const handleScrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div id="Landing Page" className="flex flex-col gap-10 pb-10 w-full">
      {/* HERO SECTION */}
      <div className="w-full relative overflow-hidden">
        <NYCSlideshow />

        {/* Floating Blob Gradient */}
        <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-yellow-300 rounded-full filter blur-3xl opacity-30 animate-[bounceSlow_6s_ease-in-out_infinite] z-0"></div>

        {/* Floating APO Seal */}
        <motion.img
          src="/apo-seal.png"
          alt="APO Seal"
          className="absolute bottom-10 right-10 w-32 opacity-10 z-0"
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 6 }}
        />

        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 lg:px-64 gap-6 z-10"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          <motion.div
            variants={fadeUp}
            custom={0}
            className="bg-yellow-400/90 px-6 py-2 rounded-full text-zinc-900 font-bold text-sm lg:text-lg shadow-lg"
          >
            <span
              style={{ fontFamily: "Broadway, sans-serif", fontWeight: "bold" }}
            >
              APOAAGNY
            </span>
          </motion.div>
          <motion.h1
            variants={fadeUp}
            custom={1}
            className="flex flex-col text-white text-4xl lg:text-6xl font-extrabold drop-shadow-2xl"
          >
            <span>
              <span className="text-yellow-400">100 Years</span> of Resolute
              Commitment to{" "}
            </span>
            <span className="text-white">
              <Typewriter
                words={["Leadership", "Friendship", "Service"]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
          </motion.h1>
          <motion.p
            variants={fadeUp}
            custom={2}
            className="text-yellow-100 text-base lg:text-2xl font-medium drop-shadow-lg max-w-3xl"
          >
            Join us for an unforgettable Centennial Celebration on December
            14–16, 2025. Hosted by APOAA Greater New York. Let’s honor a century
            of Leadership, Friendship, and Service!
          </motion.p>
          <motion.div
            variants={fadeUp}
            custom={3}
            className="flex flex-row gap-4 items-center justify-center"
          >
            <button
              className="relative group overflow-hidden bg-yellow-500 hover:bg-yellow-600 text-black font-bold text-md lg:text-xl py-2 lg:py-3 px-6 lg:px-8 rounded-lg shadow-lg transition"
              onClick={() => navigate("/centennial")}
            >
              <span className="absolute inset-0 bg-white opacity-10 rounded-full scale-0 group-hover:scale-150 transition-transform duration-700 ease-out" />
              <span className="relative z-10">See details</span>
            </button>
            <button
              className="bg-white hover:bg-gray-200 text-[#282e3a] font-bold text-md lg:text-xl py-2 lg:py-3 px-6 lg:px-8 rounded-lg shadow-md transition"
              onClick={handleScrollToAbout}
            >
              About Us
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* REDIRECT CARDS */}
      <motion.div
        className="flex flex-col gap-4 items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <Tag mode="dark">Explore More</Tag>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 px-10 lg:px-40">
          <RedirectCard
            icon={<TbNumber100Small />}
            title="Centennial"
            description="Celebrate 100 years of Alpha Phi Omega with special events and historical highlights."
            iconColor="text-yellow-500"
            onClick={() => navigate("/centennial")}
          />
          <RedirectCard
            icon={<FaCalendarAlt />}
            title="Events"
            description="Stay updated with upcoming Centennial programs, socials, and official activities."
            iconColor="text-blue-500"
            onClick={() => navigate("/events")}
          />
          <RedirectCard
            icon={<FaHeart />}
            title="Service"
            description="Join impactful service initiatives that honor our commitment to community and humanity."
            iconColor="text-red-500"
          />
          <RedirectCard
            icon={<IoIosPeople />}
            title="Leadership"
            description="Discover how our brothers and sisters lead with purpose through the decades."
            iconColor="text-green-500"
            onClick={() => navigate("/leadership")}
          />
          <RedirectCard
            icon={<FaShoppingCart />}
            title="Shop"
            description="Grab exclusive Centennial merch and memorabilia to mark this historic milestone."
            iconColor="text-purple-500"
            onClick={() => navigate("/store")}
          />
          <RedirectCard
            icon={<BiSolidDonateHeart />}
            title="Donate"
            description="Support the future of APO by contributing to our ongoing programs and causes."
            iconColor="text-orange-500"
            onClick={() => navigate("/donate")}
          />
        </div>
      </motion.div>

      {/* SERVICE & FELLOWSHIP */}
      {/* <motion.div
        className="flex flex-col lg:flex-row gap-8 bg-slate-100 py-16 px-6 lg:px-40"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <div className="flex flex-col gap-4 w-full">
          <Tag mode="light">Service</Tag>
          <h3 className="text-xl lg:text-4xl font-bold">
            Service to the Community
          </h3>
          <p className="text-slate-600">
            APO members actively contribute to various community service
            organizations like The Humane Society, Boys and Girls Club, and
            Habitat for Humanity. Additionally, we organize events such as blood
            drives and run-a-thons to make a positive impact and support those
            in need.
          </p>
          <div className="bg-slate-200 p-6 rounded-lg shadow-md text-black text-sm lg:text-lg flex flex-col gap-3 mt-6">
            <p>
              • APO members volunteer at many community service organizations
            </p>
            <p>• APO hosts events such as blood drives and run-a-thons</p>
          </div>
        </div>

        <div className="flex flex-col gap-4 w-full">
          <Tag mode="light">Fellowship</Tag>
          <h3 className="text-xl lg:text-4xl font-bold">
            Fellowship and Brotherhood
          </h3>
          <p className="text-slate-600">
            APO fosters strong bonds among members through activities like movie
            nights, gym sessions, and crafting. We also encourage alumni to stay
            connected and give back as volunteers after graduation. As a
            national co-ed fraternity rooted in the values of the Boy Scouts of
            America, we prioritize the spirit of fellowship and lifelong
            connections.
          </p>
          <div className="bg-slate-200 p-6 rounded-lg shadow-md text-black text-sm lg:text-lg flex flex-col gap-3 mt-6">
            <p>• Members bond through fun and meaningful activities</p>
            <p>• Alumni are encouraged to return as volunteers</p>
            <p>
              • APO is a national co-ed fraternity rooted in Scouting values
            </p>
          </div>
        </div>
      </motion.div> */}
    </div>
  );
};

export default LandingPage;
