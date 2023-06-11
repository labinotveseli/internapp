import PropTypes from "prop-types";

const Header = ({ step }) => {
  const displayStep = step === "1/2" ? "Step 1/2" : "Step 2/2";

  return (
    <header className="navbar navbar-light bg-white">
      <div className="container d-flex justify-content-center align-items-center">
        <div className="header-content text-center">
          <h1 className="navbar-brand">Choose Service</h1>
          <p className="navbar-text smaller-fonts">{displayStep}</p>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  step: PropTypes.string.isRequired,
};

export default Header;
