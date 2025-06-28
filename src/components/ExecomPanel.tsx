import React from "react";

const execomMembers = [
  {
    role: "President",
    name: "Bro. Sol Jasper Kapunan",
    description: "A Profile of Leadership, Integrity and Excellence",
    chapter: "Pi Chapter 0016-1993-21953",
    image: "/execom/sol.png",
    link: "#",
  },
  {
    role: "1st Vice President",
    name: 'Bro. Nathaniel "Dong" Roehl Ty',
    batch: "Batch 1981",
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
      instagram: "#",
      facebook: "#",
      linkedin: "#",
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
      instagram: "#",
      facebook: "#",
      linkedin: "#",
    },
  },
];

const ExecomPanel = () => {
  return (
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
          <div className="p-4 text-sm">
            <p className="text-gray-800 font-semibold">{member.role}</p>
            <h2 className="text-[#0c238a] font-bold">{member.name}</h2>

            {member.description && (
              <p className="text-gray-700 mt-1">{member.description}</p>
            )}
            {member.batch && (
              <p className="text-gray-700 mt-1">{member.batch}</p>
            )}
            {member.chapter && (
              <p className="text-gray-700 mt-1 whitespace-pre-line">
                {member.chapter}
              </p>
            )}
            <a
              href={member.link}
              className="text-xs text-blue-800 underline mt-2 inline-block"
            >
              read more
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExecomPanel;
