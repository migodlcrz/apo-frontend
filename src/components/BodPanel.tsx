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
    <div className="flex flex-wrap justify-center gap-8 py-12 bg-gradient-to-b from-transparent to-yellow-50/30 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-100/20 via-transparent to-yellow-100/20 rounded-3xl -z-10"></div>
      {execomMembers.map((member, index) => (
        <div
          key={index}
          className="w-full sm:w-[320px] bg-gradient-to-b from-white to-yellow-50/50 rounded-2xl overflow-hidden shadow-2xl border-2 border-white/60 backdrop-blur-sm hover:scale-105 transition-all duration-300 relative group"
        >
          <div className="absolute top-3 right-3 bg-yellow-400/80 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-bold text-black border border-white/50 z-10">
            ✨ BOARD
          </div>
          <div className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10"></div>
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500"
            />
          </div>
          <div className="p-6 text-sm space-y-3 relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-yellow-600"></div>
            {member.role && (
              <div className="bg-gradient-to-r from-yellow-400/10 to-yellow-600/10 rounded-lg p-3 border border-yellow-200/50">
                <p className="text-gray-800 font-bold text-center">{member.role}</p>
              </div>
            )}
            <h2 className="text-[#0c238a] font-bold text-lg bg-gradient-to-r from-blue-800 to-blue-600 bg-clip-text text-transparent">{member.name}</h2>

            {member.description && (
              <div className="border-t border-yellow-200/50 pt-3 mt-3">
                <p className="text-gray-700 text-justify bg-white/50 rounded-lg p-3 border border-yellow-100/50">
                  {member.description}
                </p>
              </div>
            )}

            {member.batch && (
              <div className="border-t border-yellow-200/50 pt-3 mt-3">
                <p className="text-gray-700 bg-yellow-50/50 rounded-lg p-2 font-medium">{member.batch}</p>
              </div>
            )}

            {member.chapter && (
              <div className="border-t border-yellow-200/50 pt-3 mt-3">
                <p className="text-gray-700 whitespace-pre-line bg-white/30 rounded-lg p-3 border border-yellow-100/30">
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
