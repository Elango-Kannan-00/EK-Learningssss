import React, { useEffect, useState } from "react";
import Cards from "./components/Cards.jsx";
import "./App.css";
import ProfileView from "./components/ProfileView.jsx";

function App() {
  const [details, setDetails] = useState([]);
  const [selectedEmp, setSelectedEmp] = useState(null);

  useEffect(() => {
    fetch("/data/employees.json")
      .then((res) => res.json())
      .then(setDetails)
      .catch((err) => console.error("Error:", err));
  }, []);

  return (
    <div>
      <h1 id="heading1">Welcome to EK's Employee Profile Viewer App !</h1>
      <h1 className="heading2">Employee Profile Page</h1>
      <div className="cards-grid">
        {details.map((emp) => (
          <Cards
            key={emp.id}
            emp={emp}
            viewProfile={() => setSelectedEmp(emp)}
          />
        ))}
      </div>

      {selectedEmp && (
        <div className="profileview-backdrop">
          <ProfileView emp={selectedEmp} onClose={() => setSelectedEmp(null)} />
        </div>
      )}
    </div>
  );
}

export default App;
