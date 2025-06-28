interface CentennialCardProps {
  title: string;
  subtitle: string;
  link: string;
  img: string;
}

const CentennialCard = ({
  title,
  subtitle,
  link,
  img,
}: CentennialCardProps) => (
  <div
    className="flex items-center gap-4 p-4 bg-[#ffec9c] rounded-lg shadow-md hover:shadow-lg transition cursor-pointer"
    onClick={() => window.open(link, "_blank")}
  >
    <img src={img} alt={title} className="w-16 h-16 object-cover rounded-md" />
    <div className="flex flex-col">
      <span className="text-lg font-bold text-black">{title}</span>
      <span className="text-sm text-[#282e3a] font-semibold">{subtitle}</span>
    </div>
  </div>
);

export default CentennialCard;
