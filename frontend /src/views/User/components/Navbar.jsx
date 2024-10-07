import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../../assets/logo.png";

const Navbar = ({ handleDrawerToggle, mobileOpen }) => {
  const navigate = useNavigate();

  const items = [
    {
      text: "Mis Eventos",
      path: "/user/mis_eventos",
      icon: (
        <svg
          width="21"
          height="22"
          viewBox="0 0 21 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mr-2"
        >
          <mask
            id="mask0_608_4058"
            style={{ maskType: "alpha" }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="21"
            height="22"
          >
            <rect width="21" height="22" fill="#D9D9D9" />
          </mask>
          <g mask="url(#mask0_608_4058)">
            <path
              d="M7 12.0689C6.75208 12.0689 6.54427 11.9816 6.37656 11.807C6.20885 11.6325 6.125 11.4161 6.125 11.1581C6.125 10.9 6.20885 10.6837 6.37656 10.5092C6.54427 10.3346 6.75208 10.2473 7 10.2473C7.24792 10.2473 7.45573 10.3346 7.62344 10.5092C7.79115 10.6837 7.875 10.9 7.875 11.1581C7.875 11.4161 7.79115 11.6325 7.62344 11.807C7.45573 11.9816 7.24792 12.0689 7 12.0689ZM10.5 12.0689C10.2521 12.0689 10.0443 11.9816 9.87656 11.807C9.70885 11.6325 9.625 11.4161 9.625 11.1581C9.625 10.9 9.70885 10.6837 9.87656 10.5092C10.0443 10.3346 10.2521 10.2473 10.5 10.2473C10.7479 10.2473 10.9557 10.3346 11.1234 10.5092C11.2911 10.6837 11.375 10.9 11.375 11.1581C11.375 11.4161 11.2911 11.6325 11.1234 11.807C10.9557 11.9816 10.7479 12.0689 10.5 12.0689ZM14 12.0689C13.7521 12.0689 13.5443 11.9816 13.3766 11.807C13.2089 11.6325 13.125 11.4161 13.125 11.1581C13.125 10.9 13.2089 10.6837 13.3766 10.5092C13.5443 10.3346 13.7521 10.2473 14 10.2473C14.2479 10.2473 14.4557 10.3346 14.6234 10.5092C14.7911 10.6837 14.875 10.9 14.875 11.1581C14.875 11.4161 14.7911 11.6325 14.6234 11.807C14.4557 11.9816 14.2479 12.0689 14 12.0689ZM4.375 19.355C3.89375 19.355 3.48177 19.1766 3.13906 18.8199C2.79635 18.4632 2.625 18.0344 2.625 17.5335V4.78272C2.625 4.2818 2.79635 3.85298 3.13906 3.49626C3.48177 3.13954 3.89375 2.96118 4.375 2.96118H5.25V1.13965H7V2.96118H14V1.13965H15.75V2.96118H16.625C17.1062 2.96118 17.5182 3.13954 17.8609 3.49626C18.2036 3.85298 18.375 4.2818 18.375 4.78272V17.5335C18.375 18.0344 18.2036 18.4632 17.8609 18.8199C17.5182 19.1766 17.1062 19.355 16.625 19.355H4.375ZM4.375 17.5335H16.625V8.42579H4.375V17.5335ZM4.375 6.60426H16.625V4.78272H4.375V6.60426Z"
              fill="#1C1B1F"
            />
          </g>
        </svg>
      ),
    }, // Agregando la propiedad icon
    {
      text: "Eventos",
      path: "/user/eventos",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mr-2"
        >
          <mask
            id="mask0_608_4742"
            style={{ maskType: "alpha" }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="24"
            height="24"
          >
            <rect width="24" height="24" fill="#D9D9D9" />
          </mask>
          <g mask="url(#mask0_608_4742)">
            <path
              d="M5 22C4.45 22 3.97917 21.8042 3.5875 21.4125C3.19583 21.0208 3 20.55 3 20V6C3 5.45 3.19583 4.97917 3.5875 4.5875C3.97917 4.19583 4.45 4 5 4H6V2H8V4H16V2H18V4H19C19.55 4 20.0208 4.19583 20.4125 4.5875C20.8042 4.97917 21 5.45 21 6V11H19V10H5V20H12V22H5ZM5 8H19V6H5V8ZM14 22V18.925L19.525 13.425C19.675 13.275 19.8417 13.1667 20.025 13.1C20.2083 13.0333 20.3917 13 20.575 13C20.775 13 20.9667 13.0375 21.15 13.1125C21.3333 13.1875 21.5 13.3 21.65 13.45L22.575 14.375C22.7083 14.525 22.8125 14.6917 22.8875 14.875C22.9625 15.0583 23 15.2417 23 15.425C23 15.6083 22.9667 15.7958 22.9 15.9875C22.8333 16.1792 22.725 16.35 22.575 16.5L17.075 22H14ZM15.5 20.5H16.45L19.475 17.45L19.025 16.975L18.55 16.525L15.5 19.55V20.5ZM19.025 16.975L18.55 16.525L19.475 17.45L19.025 16.975Z"
              fill="#1C1B1F"
            />
          </g>
        </svg>
      ),
    },
    {
      text: "Configuración",
      path: "/configuracion",
      icon: (
        <svg
          className="mr-2"
          width="21"
          height="21"
          viewBox="0 0 21 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.8459 11.3406C17.8849 11.0176 17.9109 10.6818 17.9109 10.3331C17.9109 9.98433 17.8849 9.64851 17.8329 9.3256L20.0299 7.62064C20.2249 7.46565 20.2769 7.18149 20.1599 6.96191L18.0799 3.38408C17.9499 3.15159 17.6769 3.07409 17.4429 3.15159L14.8559 4.1849C14.3099 3.77157 13.7379 3.43575 13.1009 3.17742L12.7109 0.439156C12.6719 0.180829 12.4509 0 12.1909 0H8.03087C7.77087 0 7.56287 0.180829 7.52387 0.439156L7.13387 3.17742C6.49687 3.43575 5.91187 3.78449 5.37887 4.1849L2.79187 3.15159C2.55787 3.06117 2.28487 3.15159 2.15487 3.38408L0.074874 6.96191C-0.0551261 7.1944 -0.00312586 7.46565 0.204874 7.62064L2.40187 9.3256C2.34987 9.64851 2.31087 9.99725 2.31087 10.3331C2.31087 10.6689 2.33687 11.0176 2.38887 11.3406L0.191874 13.0455C-0.00312617 13.2005 -0.055126 13.4847 0.061874 13.7042L2.14187 17.2821C2.27187 17.5146 2.54487 17.5921 2.77887 17.5146L5.36587 16.4813C5.91187 16.8946 6.48387 17.2304 7.12087 17.4887L7.51087 20.227C7.56287 20.4853 7.77087 20.6662 8.03087 20.6662H12.1909C12.4509 20.6662 12.6719 20.4853 12.6979 20.227L13.0879 17.4887C13.7249 17.2304 14.3099 16.8817 14.8429 16.4813L17.4299 17.5146C17.6639 17.605 17.9369 17.5146 18.0669 17.2821L20.1469 13.7042C20.2769 13.4717 20.2249 13.2005 20.0169 13.0455L17.8459 11.3406ZM10.1109 14.208C7.96588 14.208 6.21087 12.4643 6.21087 10.3331C6.21087 8.20188 7.96588 6.45817 10.1109 6.45817C12.2559 6.45817 14.0109 8.20188 14.0109 10.3331C14.0109 12.4643 12.2559 14.208 10.1109 14.208Z"
            fill="black"
          />
        </svg>
      ),
    },
    {
      text: "Perfil",
      path: "/perfil",
      icon: (
        <svg
          className="mr-2"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 7.94852C6.9 7.94852 5.95833 7.55937 5.175 6.78108C4.39167 6.00279 4 5.06718 4 3.97426C4 2.88134 4.39167 1.94573 5.175 1.16744C5.95833 0.389146 6.9 0 8 0C9.1 0 10.0417 0.389146 10.825 1.16744C11.6083 1.94573 12 2.88134 12 3.97426C12 5.06718 11.6083 6.00279 10.825 6.78108C10.0417 7.55937 9.1 7.94852 8 7.94852ZM0 15.897V13.1151C0 12.552 0.145833 12.0346 0.4375 11.5626C0.729167 11.0907 1.11667 10.7305 1.6 10.4821C2.63333 9.96877 3.68333 9.58376 4.75 9.32709C5.81667 9.07042 6.9 8.94209 8 8.94209C9.1 8.94209 10.1833 9.07042 11.25 9.32709C12.3167 9.58376 13.3667 9.96877 14.4 10.4821C14.8833 10.7305 15.2708 11.0907 15.5625 11.5626C15.8542 12.0346 16 12.552 16 13.1151V15.897H0ZM2 13.9099H14V13.1151C14 12.9329 13.9542 12.7673 13.8625 12.6183C13.7708 12.4692 13.65 12.3533 13.5 12.2705C12.6 11.8234 11.6917 11.4881 10.775 11.2645C9.85833 11.041 8.93333 10.9292 8 10.9292C7.06667 10.9292 6.14167 11.041 5.225 11.2645C4.30833 11.4881 3.4 11.8234 2.5 12.2705C2.35 12.3533 2.22917 12.4692 2.1375 12.6183C2.04583 12.7673 2 12.9329 2 13.1151V13.9099ZM8 5.96139C8.55 5.96139 9.02083 5.76682 9.4125 5.37767C9.80417 4.98852 10 4.52072 10 3.97426C10 3.4278 9.80417 2.96 9.4125 2.57085C9.02083 2.1817 8.55 1.98713 8 1.98713C7.45 1.98713 6.97917 2.1817 6.5875 2.57085C6.19583 2.96 6 3.4278 6 3.97426C6 4.52072 6.19583 4.98852 6.5875 5.37767C6.97917 5.76682 7.45 5.96139 8 5.96139Z"
            fill="#1C1B1F"
          />
        </svg>
      ),
    },
    {
      text: "Cerrar Sesión",
      path: "/login",
      icon: (
        <svg
          className="mr-2"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path
              d="M2 6a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v2a1 1 0 1 1-2 0V6H4v12h9v-2a1 1 0 1 1 2 0v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6zm15.293 2.293a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-1.414-1.414L18.586 13H9a1 1 0 1 1 0-2h9.586l-1.293-1.293a1 1 0 0 1 0-1.414z"
              fill="#0D0D0D"
            />
          </g>
        </svg>
      ),
    },
  ];

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".navbar-menu") && mobileOpen) {
        handleDrawerToggle();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [mobileOpen, handleDrawerToggle]);

  return (
    <div
      className={`navbar-menu bg-gradient-to-r from-blue-300 to-red-300 h-full w-60 fixed z-10 transform transition-transform ${
        mobileOpen ? "translate-x-0" : "-translate-x-60"
      } sm:translate-x-0`}
    >
      <div className="flex flex-col h-full">
        <div className="flex justify-center p-4">
          <img src={logo} alt="Logo" className=" h-20 bg-contain" />
        </div>
        <div className="flex-grow">
          <ul className="space-y-2">
            {items.map((item, index) => (
              <li key={index} className="hover:bg-blue-100 transition-colors">
                <button
                  onClick={
                    item.text === "Cerrar Sesión"
                      ? handleLogout
                      : () => navigate(item.path)
                  }
                  className="flex items-center w-full p-4 text-gray-700"
                >
                  {item.icon}
                  <span>{item.text}</span>
                </button>
                {index < items.length - 1 && <hr className="border-gray-300" />}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
