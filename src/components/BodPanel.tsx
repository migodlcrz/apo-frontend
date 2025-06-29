const execomMembers = [
  {
    role: "Chairman of the Board",
    name: "Bro. Jigsaw Reodica",
    batch: "0710-89-15264",
    chapter:
      "Eta Kappa Chapter\nColegio de San Juan de Letran\nIntramuros, Manila",
    description: "Makulay Na Makulay\nAng Buhay Sa GNY",
    image: "/bod/jigsaw.png",
    link: "#",
  },
  {
    role: "Board Member",
    name: "Bro. Apollo Raymund Paranal",
    batch: "Batch 1986-A",
    chapter:
      "Zeta Iota Chapter\nBicol Christian College of Medicine/Ago Medical and Educational Center",
    description:
      "Licensed Physical Therapist in the Philippines and New Jersey and Massachusetts",
    image: "/bod/apollo.png",
    link: "#",
  },
  {
    role: "BOD Secretary",
    name: "Bro. Custodio Baldonado Jr.",
    batch: "0305-81-12520",
    chapter:
      "Gamma Epsilon Chapter\nDe La Salle University - Manila\nBS Electronics & Communications Engineering",
    description:
      "Certified Medicare Insurance Planner\nLife Underwriter Training Council Fellow",
    image: "/bod/custodio.png",
    link: "#",
  },

  //
  {
    name: "Bro. Caril Donila",
    batch: "",
    chapter: "",
    description:
      "I entered the world of Alpha Phi Omega to explore it's three guiding principles, Leadership, Friendship and Service. Initiated in Centro Escolar University, Batch 1977, Pre-dentistry and Dentistry. Graduated Dentistry at DOMC and licensed in the Philippines. ",
    image: "/bod/caril.png",
    link: "#",
  },
  {
    name: "Bro. Adrian Cayamanda",
    batch: "Batch 1995-B",
    chapter:
      "Eta Theta Chapter\nLetran College Calamba, Laguna\nBachelor in Industrial Engineering\nWorks at Atlas Technical Consultant, Inc. ",
    description: "",
    image: "/bod/adrian.png",
    link: "#",
  },
  {
    name: "Bro. Carlito Macaro",
    batch: "0215-1972-04478 (PIONEER)",
    chapter:
      'Beta Omicron Chapter\nMabini Colleges Daet, Camarines Norte\n "Cheers to the wounds which never heal, the more we drink the better we feel"',
    description:
      "Certified Medicare Insurance Planner\nLife Underwriter Training Council Fellow",
    image: "/bod/carlito.png",
    link: "#",
  },
];

const BodPanel = () => {
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
            <h2 className="text-[#0c238a] font-bold">{member.name}</h2>

            {member.description && (
              <div className="border-t border-gray-300 pt-2 mt-2">
                <p className="text-gray-700 text-justify">
                  {member.description}
                </p>
              </div>
            )}

            {member.batch && (
              <div className="border-t border-gray-300 pt-2 mt-2">
                <p className="text-gray-700">{member.batch}</p>
              </div>
            )}

            {member.chapter && (
              <div className="border-t border-gray-300 pt-2 mt-2">
                <p className="text-gray-700 whitespace-pre-line">
                  {member.chapter}
                </p>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default BodPanel;
