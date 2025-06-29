import { useEffect, useState } from "react";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";
import LearnMoreModal from "./LearnMoreModal";

type SocialLinks = {
  instagram: string;
  facebook: string;
  linkedin: string;
};

export type ExecomMember = {
  role: string;
  name: string;
  description?: string;
  summary?: string;
  batch?: string;
  chapter: string;
  image: string;
  link: string;
  socials?: SocialLinks;
};

const execomMembers = [
  {
    role: "President",
    name: "Bro. Sol Jasper Kapunan",
    description: "A Profile of Leadership, Integrity and Excellence",
    summary:
      "Bro. Sol Kapunan is a remarkable individual whose exceptional accomplishments and contributions have earned him prestigious recognitions. His journey is a testament to his unwavering commitment to excellence, both in his professional endeavors and community engagements\n\n\nThis year (2024), Sol was awarded by International Center of the Capital Region for his exceptional leadership in Civic engagement and citizenship. He also received a Special Congressional Recognition from Congressman Paul Tonko, (NY 20th District) for his outstanding and invaluable service to the community.\n\n\nIn 2023, he was honored to receive quadruple recognitions for his advocacy and leadership namely, the New York State Assembly Citation, commending him as “An Outstanding Individual worthy of the esteem of both the Community and the Great State of New York” for authoring the petition, addressed to the City Council of Albany, advocating for the acknowledgement of the Filipino American community’s significant contributions and the establishment of an Annual celebration for the Filipino Grand Parade in the City of Albany; Power Player Awards, Award of Excellence for Philanthropy and Filipino Cultural heritage advocacy by Socsksargen USA, Inc. and a commendation by the County of Bergen, New Jersey in honor and recognition of his commitment to bound common ideals of cooperation, unity, equality and the pursuit of personal and professional excellence and for his dedication to the Filipino American community. \n\n\nBro. Sol’s exemplary civic engagement and contributions extend beyond his professional success, embodying a commitment to community and leadership:\n\n\nBro. Sol is the Founding President of Kalayaan 1521 Council Inc., a New York Non-Profit Corporation dedicated to preserving and promoting Filipino culture and heritage. His dedication to serving the community is further demonstrated through his role as:\n\n\nPresident Elect of Alpha Phi Omega Alumni Association of Greater New York (2025-2026)\n\nPresident of the Alpha Phi Omega Alumni Association of Greater New York (2023-2024)\n\nChairman of the Board of Alpha Phi Omega (Philippines)- Alumni Council of North America (2023)\n\nDirector of Philippine Independence Council Inc. (PIDCI) (2024-2026)\n\nBoard Member of APAPA (Asian Pacific Islander American Public Affairs) Albany NY Chapter representing the Filipino-American community.",

    chapter: "Pi Chapter 0016-1993-21953",
    image: "/execom/sol.png",
    link: "#",
  },
  {
    role: "1st Vice President",
    name: 'Bro. Nathaniel "Dong" Roehl Ty',
    batch: "Batch 1981",
    summary:
      "Dong brings extensive organizing experience to the Alumni Association of Greater New York. He excels in behind-the-scenes work, from project planning to implementation.\n\n\nIn the 80s, he held leadership roles in Gamma Epsilon and Gamma Iota. A strong advocate for human rights, he organized youth, community, and religious groups.\n\n\nDong is currently a Union organizer with the New York State Nurses Association (NYSNA).",
    chapter: "Gamma Epsilon Chapter",
    image: "/execom/dong.png",
    link: "#",
  },
  {
    role: "2nd Vice President",
    name: "Bro. Edwin Monge",
    batch: "Batch 1990",
    chapter:
      "Chapter Beta Beta Chapter\nSchool Univ of Northeastern Philippines\nOccupation Senior Civil Engineer - Dept of Trans.\nPetitioner - APOAAGNY\nAlumni Chartering DY 2012\nAPO Webteam/Gatekeeper Admin",
    image: "/execom/edwin.png",
    link: "#",
  },
  {
    role: "Secretary",
    name: "Sis. Jericha Ong-Daof",
    batch: "Batch 1997",
    chapter:
      "Gamma Epsilon Chapter\nDe La Salle University\nLicensed Insurance Broker in NY, NJ, PA, CT and CA",
    image: "/execom/jericha.png",
    link: "#",
    socials: {
      instagram: "https://www.instagram.com/itsmydayoff/#",
      facebook: "https://www.facebook.com/jerichaongdaof",
      linkedin: "https://www.linkedin.com/in/jerichadaof/",
    },
  },
  {
    role: "Treasurer",
    name: "Sis. Maria O'Brien",
    batch: "Batch 1982-A",
    chapter:
      "Eta Lambda Chapter\nBukidnon State University\nMother of three and Grandmother to four",
    image: "/execom/maria.png",
    link: "#",
  },
  {
    role: "Auditor",
    name: "Sis. Ma. Nina L. Canicon-Fernandez",
    batch: "Batch 2002-B",
    chapter:
      "Alpha Beta Chapter\nCebu Institute of Technology University\nOperations Manager, Fleurdeliz Creations, LLC",
    image: "/execom/nina.png",
    link: "#",
    socials: {
      instagram:
        "https://www.instagram.com/lacebuanalakwatsera_1925/?igsh=MTg2enF0emY5bjd4MA%3D%3D&utm_source=qr#",
      facebook: "https://www.facebook.com/mncanicon1925?mibextid=LQQJ4d",
      linkedin:
        "https://www.linkedin.com/in/nina-canicon-fernandez-364bbb98/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    },
  },
];

const ExecomPanel = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState<ExecomMember | null>(
    null
  );

  const openModal = (member: ExecomMember) => {
    setSelectedMember(member);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedMember(null);
  };

  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    // Cleanup on component unmount
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isModalOpen]);

  return (
    <>
      <div className="flex flex-wrap justify-center gap-6 py-12 bg-gray-50">
        {execomMembers.map((member, index) => (
          <div
            key={index}
            className="w-full sm:w-[300px] bg-[#d2d2f5] rounded-lg overflow-hidden shadow-lg"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-72 object-cover"
            />
            <div className="p-4 text-sm space-y-2">
              <p className="text-gray-800 font-semibold">{member.role}</p>

              <div className="border-t border-gray-300 pt-2">
                <h2 className="text-[#0c238a] font-bold">{member.name}</h2>
              </div>

              {member.description && (
                <div className="border-t border-gray-300 pt-2">
                  <p className="text-gray-700">{member.description}</p>
                </div>
              )}

              {member.batch && (
                <div className="border-t border-gray-300 pt-2">
                  <p className="text-gray-700">{member.batch}</p>
                </div>
              )}

              {member.chapter && (
                <div className="border-t border-gray-300 pt-2">
                  <p className="text-gray-700 whitespace-pre-line">
                    {member.chapter}
                  </p>
                </div>
              )}

              {(member.name === "Bro. Sol Jasper Kapunan" ||
                member.name === 'Bro. Nathaniel "Dong" Roehl Ty') && (
                <div className="border-t border-gray-300 pt-2">
                  <button
                    onClick={() => openModal(member)}
                    className="text-xs text-blue-800 underline hover:cursor-pointer"
                  >
                    read more
                  </button>
                </div>
              )}

              {member.socials && (
                <div className="border-t border-gray-300 pt-2 flex gap-3 text-[#0c238a]">
                  <a
                    href={member.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram size={18} />
                  </a>
                  <a
                    href={member.socials.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebook size={18} />
                  </a>
                  <a
                    href={member.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin size={18} />
                  </a>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && selectedMember && (
        <LearnMoreModal member={selectedMember} onClose={closeModal} />
      )}
    </>
  );
};

export default ExecomPanel;
