const AboutPage = () => {
  return (
    <div className="flex flex-col relative min-h-screen bg-gradient-to-b from-[#ffec9c] to-[#dbbb17]">
      {/* Premium Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-yellow-50/40 via-white to-yellow-50/20 -z-10"></div>
      <div className="absolute top-20 right-10 w-80 h-80 bg-gradient-to-r from-yellow-300/15 to-yellow-500/15 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-40 left-10 w-60 h-60 bg-gradient-to-l from-yellow-400/10 to-yellow-600/10 rounded-full blur-2xl -z-10"></div>

      {/* Header Section */}
      <div className="flex flex-col items-center justify-center pt-20 pb-10 px-4 sm:px-8 relative">
        <div className="max-w-6xl w-full">
          <div className="text-center mb-12">
            <div className="relative inline-block mb-6">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 rounded-2xl blur-2xl"></div>
              <h1 className="relative text-4xl sm:text-6xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text">
                📖 About APOAAGNY
              </h1>
            </div>

            <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-white/60 shadow-xl mb-8">
              <p className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">
                Formerly known as APOEASTCOAST
              </p>
              <p className="text-lg text-gray-700 font-medium">
                Alpha Phi Omega Alumni Association of Greater New York
              </p>
            </div>
          </div>

          {/* Main Content */}
          <div className="space-y-8">
            {/* Introduction */}
            <div className="bg-gradient-to-br from-white to-yellow-50/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/60 shadow-xl">
              <div className="relative mb-4">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-yellow-600/10 rounded-xl blur-lg"></div>
                <h2 className="relative text-2xl sm:text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text">
                  🌟 Our Organization
                </h2>
              </div>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                APOAAGNY or Alpha Phi Omega Alumni Association of Greater New
                York is a non-stock and non-profit organization, with membership
                exclusive to alumni members of Alpha Phi Omega Philippines
                residing in New York, New Jersey, Connecticut including some
                areas in the Northern part of Pennsylvania. These areas are
                considered statistically as The Greater New York Metropolitan
                Area. It is the largest metropolitan economy in the world, with
                a gross metropolitan product of over US$2.6 trillion and draws
                strength not only from its own residents but those across the
                wider metropolitan region. 23.5 million people live across the
                31 counties of New York, New Jersey, and Connecticut that make
                up our metro region.
              </p>
            </div>

            {/* Early History */}
            <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/60 shadow-xl">
              <div className="relative mb-4">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 to-blue-600/10 rounded-xl blur-lg"></div>
                <h2 className="relative text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-800 to-blue-600 bg-clip-text">
                  🏛️ Foundation (1983-1988)
                </h2>
              </div>
              <div className="space-y-4 text-gray-700 leading-relaxed text-sm sm:text-base">
                <p>
                  The organization began in 1983 when a group of APO brothers
                  met and decided to form an alumni association for members of
                  APO Philippines residing in the mentioned Metropolitan area.
                  On May 19, 1984, they had a formal meeting and was able to
                  organized APOEASTCOAST or the Alpha Phi Omega East Coast
                  Alumni Association.
                </p>
                <p>
                  However, on October 31, 1987, a group of brothers met at
                  Maharlika Restaurant in Queens, New York, to plan APO's 62nd
                  Foundation Day Celebration. They formed an Ad Hoc Committee to
                  consolidate efforts in organizing the envisioned APOEASTCOAST.
                  Our beloved Brother Librado Ureta, who is the organizer of
                  Alpha Phi Omega International Service Fraternity in the
                  Philippines was the guest of honor.
                </p>
                <div className="bg-yellow-100/50 rounded-xl p-4 border border-yellow-200/50">
                  <p className="font-semibold text-gray-800">
                    📅 January 30, 1988: The inaugural general membership
                    assembly took place in Queens, New York, with 23 members in
                    attendance. The Alpha Phi Omega International Alumni
                    Association of the East Coast ratified its constitution and
                    by-laws and elected its officers.
                  </p>
                </div>
              </div>
            </div>

            {/* Growth Period */}
            <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/60 shadow-xl">
              <div className="relative mb-4">
                <div className="absolute inset-0 bg-gradient-to-r from-green-400/10 to-green-600/10 rounded-xl blur-lg"></div>
                <h2 className="relative text-2xl sm:text-3xl font-bold bg-gradient-to-r from-green-800 to-green-600 bg-clip-text">
                  📈 Growth & Development (1988-1999)
                </h2>
              </div>
              <div className="space-y-4 text-gray-700 leading-relaxed text-sm sm:text-base">
                <p>
                  Under this term, the association's membership grew to 200
                  members, and the association engaged in local community
                  projects. In 1992, APOEASTCOAST hosted the First Biennial
                  Convention of the Alpha Phi Omega Alumni Council of North
                  America (ACNA), marking a significant milestone as one of the
                  Chartered Alumni Associations.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-blue-100/50 rounded-xl p-4 border border-blue-200/50">
                    <h3 className="font-bold text-blue-800 mb-2">
                      🏆 Major Achievements
                    </h3>
                    <ul className="text-sm space-y-1">
                      <li>• First Biennial ACNA Convention (1992)</li>
                      <li>• First Tri-Area Camping (1994)</li>
                      <li>• Service for NYC homeless</li>
                    </ul>
                  </div>
                  <div className="bg-green-100/50 rounded-xl p-4 border border-green-200/50">
                    <h3 className="font-bold text-green-800 mb-2">
                      🎯 Annual Activities
                    </h3>
                    <ul className="text-sm space-y-1">
                      <li>• Summer Camping</li>
                      <li>• Easter Egg Hunt</li>
                      <li>• Apple Picking</li>
                      <li>• NYC Marathon</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Modern Era */}
            <div className="bg-gradient-to-br from-white to-yellow-50/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/60 shadow-xl">
              <div className="relative mb-4">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400/10 to-purple-600/10 rounded-xl blur-lg"></div>
                <h2 className="relative text-2xl sm:text-3xl font-bold bg-gradient-to-r from-purple-800 to-purple-600 bg-clip-text">
                  🚀 Modern Era (2006-Present)
                </h2>
              </div>
              <div className="space-y-4 text-gray-700 leading-relaxed text-sm sm:text-base">
                <div className="bg-yellow-100/50 rounded-xl p-4 border border-yellow-200/50">
                  <p className="font-semibold text-gray-800">
                    📅 May 27, 2006: The Board of Directors adopted the name
                    "Alpha Phi Omega Alumni Association of Greater New York"
                    (APOAAGNY)
                  </p>
                </div>
                <p>
                  Since then, the association has been actively involved in
                  various community outreach projects in ACNA (Alumni Council of
                  North America) and APO Philippines. The organization continues
                  to encourage members to organize alumni associations in their
                  local areas on the Eastern Seaboard, with APODCAA being one of
                  our successful progenies.
                </p>
                <p>
                  Through the years, despite fluctuations in membership like any
                  organization, APOAAGNY has remained resilient with the
                  continuous help of hard-working brothers and sisters,
                  maintaining our commitment to Leadership, Friendship, and
                  Service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
