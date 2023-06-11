import { useState } from "react";
import Header from "./assets/Header";
import Body from "./assets/Body";
import Footer from "./assets/Footer";

const App = () => {
  const [step, setStep] = useState("1/2");
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    { name: "Dermal Fillers", image: "path_to_image" },
    { name: "Secret RF", image: "path_to_image" },
    { name: "HArmonyCA", image: "path_to_image" },
    { name: "Profhilo", image: "path_to_image" },
  ];

  const handleSelectOption = (option) => {
    setSelectedOption(option);
    setStep("2/2");
  };

  const handleGoBack = () => {
    setSelectedOption(null);
    setStep("1/2");
  };

  return (
    <div className="container-fluid">
      <Header step={step} onGoBack={handleGoBack} />
      <div className="mt-4 pt-4">
        {selectedOption ? (
          <div className="selected">
            <h2>Selected Option: {selectedOption.name}</h2>
            <button className="btn btn-primary" onClick={handleGoBack}>
              Go Back
            </button>
          </div>
        ) : (
          <Body options={options} onSelectOption={handleSelectOption} />
        )}
      </div>
      <Footer />
    </div>
  );
};

export default App;
