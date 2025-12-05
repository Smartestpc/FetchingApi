import { useContext } from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";
import { TogglerCont } from "./Toggler";

const Header = () => {
  let { toggleBtn } = useContext(TogglerCont);
  let { handleToggle } = useContext(TogglerCont);
  let { cartCount } = useContext(TogglerCont);

  return (
    <div className="h-20 bg-[#3a3a3a] w-full text-white font-bold flex items-center justify-between px-4 fixed top-0 left-0 right-0 z-10">
      <div className="text-3xl text-lime-500 uppercase">Smart Store</div>
      <div className="flex items-center gap-8">
        <div className={toggleBtn ? "hidden" : "block"}>
          <Link to="/">
            <div className="bg-white px-5 py-1 text-black rounded-md">Back</div>
          </Link>
        </div>
        <div className="cursor-pointer" onClick={handleToggle}>
          <Link to="/cart">
            <div className="relative">
              <MdOutlineShoppingCart size={27} />
              <span className="absolute -top-2 -right-2 bg-lime-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
