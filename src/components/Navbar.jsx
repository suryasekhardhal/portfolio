import { Link } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { toggleTheme } from "../features/themeSlice";
import { FaSun, FaMoon } from "react-icons/fa";
function Navbar() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.mode);

  return (
    <>
     <nav className="flex justify-between items-center px-6 py-4 shadow-md bg-white dark:bg-gray-800 dark:text-white">
        <h1 className="text-xl font-bold text-black dark:text-white">Suryasekhar</h1>
        <div className="flex gap-6 items-center">
            <Link to="/" className="hover:text-blue-500 transition-colors">Home</Link>
            <Link to="/about" className="hover:text-blue-500 transition-colors">About</Link>
            <Link to="/projects" className="hover:text-blue-500 transition-colors">Projects</Link>
            <Link to="/contact" className="hover:text-blue-500 transition-colors">Contact</Link>
            <button
                onClick={() => dispatch(toggleTheme())}
                className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
            >
                {theme === "light" ? <FaMoon /> : <FaSun />}
            </button>

        </div>

     </nav>
    </>
  );
}

export default Navbar;