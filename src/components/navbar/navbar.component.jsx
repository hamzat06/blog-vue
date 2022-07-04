import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import "./navbar.component.style.scss";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__container">
        <Link to="/">
          <img src={Logo} alt="logo" />
        </Link>
        <div className="header__container__socials">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.3333 3.34168C17.5 3.75001 16.6833 3.91584 15.8333 4.16668C14.8991 3.11251 13.5141 3.05418 12.1833 3.55251C10.8525 4.05084 9.98079 5.26918 9.99996 6.66668V7.50001C7.29579 7.56918 4.88746 6.33751 3.33329 4.16668C3.33329 4.16668 -0.151707 10.3608 6.66663 13.3333C5.10663 14.3725 3.55079 15.0733 1.66663 15C4.42329 16.5025 7.42746 17.0192 10.0283 16.2642C13.0116 15.3975 15.4633 13.1617 16.4041 9.81251C16.6848 8.7939 16.8241 7.74156 16.8183 6.68501C16.8166 6.47751 18.0766 4.37501 18.3333 3.34084V3.34168Z"
              stroke="#4B4B4B"
              stroke-width="1.25"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <span>&bull;</span>

          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5Z"
              stroke="#4B4B4B"
              stroke-width="1.25"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M7.5 3C11.6667 8 13.3333 11.75 13.75 16.5"
              stroke="#4B4B4B"
              stroke-width="1.25"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M5.33337 15.8333C8.25004 12.9167 10.3334 10.4167 17.4167 10.5"
              stroke="#4B4B4B"
              stroke-width="1.25"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M2.58337 8.95835C6.75004 8.95835 10.7617 8.64169 15.345 4.79169"
              stroke="#4B4B4B"
              stroke-width="1.25"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <span>&bull;</span>

          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.5 12.5C13.8807 12.5 15 11.3807 15 10C15 8.61929 13.8807 7.5 12.5 7.5C11.1193 7.5 10 8.61929 10 10C10 11.3807 11.1193 12.5 12.5 12.5Z"
              stroke="#4B4B4B"
              stroke-width="1.25"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12.5 2.5H7.5C6.11929 2.5 5 3.61929 5 5C5 6.38071 6.11929 7.5 7.5 7.5H12.5C13.8807 7.5 15 6.38071 15 5C15 3.61929 13.8807 2.5 12.5 2.5Z"
              stroke="#4B4B4B"
              stroke-width="1.25"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M7.5 12.5C6.83696 12.5 6.20107 12.2366 5.73223 11.7678C5.26339 11.2989 5 10.663 5 10C5 9.33696 5.26339 8.70107 5.73223 8.23223C6.20107 7.76339 9.33696 8 10 8L10 12.5H7.5ZM7.5 12.5C7.00555 12.5 6.5222 12.6466 6.11108 12.9213C5.69995 13.196 5.37952 13.5865 5.1903 14.0433C5.00108 14.5001 4.95157 15.0028 5.04804 15.4877C5.1445 15.9727 5.3826 16.4181 5.73223 16.7678C6.08187 17.1174 6.52732 17.3555 7.01227 17.452C7.49723 17.5484 7.99989 17.4989 8.45671 17.3097C8.91352 17.1205 9.30397 16.8 9.57867 16.3889C9.85338 15.9778 10 15.4945 10 15V2.5"
              stroke="#4B4B4B"
              stroke-width="1.25"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <span>&bull;</span>

          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.5 17.5V14.5834C12.5 13.75 12.5833 13.4167 12.0833 12.9167C14.4167 12.6667 16.6667 11.75 16.6667 7.91669C16.6657 6.92082 16.2771 5.96444 15.5833 5.25002C15.9087 4.38499 15.8788 3.42638 15.5 2.58335C15.5 2.58335 14.5833 2.33335 12.5833 3.66669C10.8894 3.22551 9.11063 3.22551 7.41667 3.66669C5.41667 2.33335 4.5 2.58335 4.5 2.58335C4.12123 3.42638 4.09128 4.38499 4.41667 5.25002C3.72288 5.96444 3.33435 6.92082 3.33333 7.91669C3.33333 11.75 5.58333 12.6667 7.91667 12.9167C7.41667 13.4167 7.41667 13.9167 7.5 14.5834V17.5M7.5 15.8334C3.91667 17 3.91667 13.75 2.5 13.3334L7.5 15.8334Z"
              stroke="#4B4B4B"
              stroke-width="1.25"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
