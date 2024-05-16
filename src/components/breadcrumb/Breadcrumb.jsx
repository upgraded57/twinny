import { FaChevronRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function Breadcrumb({ links }) {
  return (
    <>
      <div className="flex flex-row items-center gap-2">
        {links.map((link, idx) => {
          const isLast = idx === links.length - 1;
          return (
            <Link
              key={link.id}
              to={link.location}
              className="p-text text-sm flex items-center gap-2 hover:underline"
            >
              {link.text}
              {!isLast && <FaChevronRight className="text-lg" />}
            </Link>
          );
        })}
      </div>
    </>
  );
}
