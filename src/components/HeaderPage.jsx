import { Link } from "react-router-dom";
import { NAV_LINKS } from "../constants/navLinks";

function HeaderPage() {
  return (
    <header className="bg-white shadow-xs fixed w-full z-50">
      <div className="max-w-7xl mx-auto p-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/">
          <h1 className="text-xl font-bold text-blue-600">MarkazPro</h1>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex gap-8 text-gray-700 font-medium">
          {NAV_LINKS.map((item, i) => (
            <a key={i} href={item.href} className="hover:text-blue-600">
              {item.label}
            </a>
          ))}
        </nav>

        <Link
          to="/admin"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Kirish
        </Link>
      </div>
    </header>
  );
}

export default HeaderPage;
