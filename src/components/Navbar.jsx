import { Link } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { toggleTheme } from "../features/themeSlice";
import { FaSun, FaMoon } from "react-icons/fa";
function Navbar() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.mode);

  return (
    <>
     <nav className="flex justify-between items-center px-6 py-4 shadow-md bg-white dark:bg-gray-800">
        <h1 className="text-xl font-bold">Suryasekhar</h1>

     </nav>
    </>
  );
}

export default Navbar;