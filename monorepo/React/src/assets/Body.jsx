import PropTypes from "prop-types";
import img from "./img/img.png";

const Body = ({ options, onSelectOption }) => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6 my-4 options-container">
          {options.map((option, index) => (
            <div
              className="option-box"
              key={index}
              onClick={() => onSelectOption(option)}
              style={{ cursor: "pointer" }}
            >
              <img src={img} className="option-image" alt={option.name} />
              <h5 className="option-text">{option.name}</h5>
              <svg
                className="greater-than-svg"
                width="15px"
                height="15px"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6.18194 4.18185C6.35767 4.00611 6.6426 4.00611 6.81833 4.18185L9.81833 7.18185C9.90272 7.26624 9.95013 7.3807 9.95013 7.50005C9.95013 7.6194 9.90272 7.73386 9.81833 7.81825L6.81833 10.8182C6.6426 10.994 6.35767 10.994 6.18194 10.8182C6.0062 10.6425 6.0062 10.3576 6.18194 10.1819L8.86374 7.50005L6.18194 4.81825C6.0062 4.64251 6.0062 4.35759 6.18194 4.18185Z"
                  fill="#000000"
                />
              </svg>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

Body.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
  onSelectOption: PropTypes.func.isRequired,
};

export default Body;
