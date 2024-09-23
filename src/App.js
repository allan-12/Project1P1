import React, { useState } from 'react';
import './App.css';
import InputSection from './components/InputSection';
import FluxList from './components/FluxList';
import GraphSection from './components/GraphSection';


function App() {
  const [dates, setDates] = useState({ startDate: '', endDate: '' });
  const [fluxImpossibles, setFluxImpossibles] = useState([]);
  const [fluxJournaliers, setFluxJournaliers] = useState([]);
  const [graphData, setGraphData] = useState([]);

  // Fonction pour mettre à jour les dates et recalculer les flux et le graphique
  const handleDateChange = (type, value) => {
    setDates((prevDates) => ({
      ...prevDates,
      [type]: value,
    }));

    // Logique simplifiée : Mise à jour des flux en fonction des dates
    if (type === 'startDate') {
      setFluxImpossibles([
        "[2024-07-14] [BP Cresus & Cesar – 8970€] (Néri, -5000€) (Hita, -1000€) (Raliz, -7000€)",

      ]);
      setFluxJournaliers([
        "[2024-07-10] [Myriade Fr=78840€] (CAR remb, 78000€)",
        "[2024-07-14] [BP Cresus & Cesar=8970€] (Néri, -5000€) (Hita, -1000€) (Raliz, -7000€)",
        "[2024-07-14] [A2=1000€] (Min remb, 500€)",
        "[2024-07-15][BP Cresus & Cesar=21030€] (Flux TransfertArgent entrant: CCA remb., 30000€)",
        "[2024-07-15][Myriade Fr=48840€] (Flux TransfertArgent sortant: CCA remb., -30000€)",
        "[2024-07-16] [Myriade Fr=46040€] (SAFIR, -2800€)",
      ]);

      // Données du graphique (exemple)
      setGraphData([
        { date: "07-01", A2: 3000, CreanceMyriade: 2000 },
        { date: "07-05", A2: 4500, CreanceMyriade: 3000 },
        { date: "07-10", A2: 6000, CreanceMyriade: 1000 },
        { date: "07-15", A2: 8000, CreanceMyriade: 5000 },
        { date: "07-16", A2: 10000, CreanceMyriade: 7000 },
      ]);
    }
  };

  return (
    <div>
      <h3>Patrimoine       Cresus</h3>
      <h3>    Cresus</h3>

      <nav className="navbar">
    <ul>
      <li>
        <input type="checkbox" id="aggregat" />
        <label htmlFor="aggregat">Agrégat</label>
      </li>
      <li>
        <input type="checkbox" id="tresorerie" />
        <label htmlFor="tresorerie">Trésorerie</label>
      </li>
      <li>
        <input type="checkbox" id="immobilisations" />
        <label htmlFor="immobilisations">Immobilisations</label>
      </li>
      <li>
        <input type="checkbox" id="obligations" />
        <label htmlFor="obligations">Obligations</label>
      </li>
    </ul>
  </nav>

      <InputSection onDateChange={handleDateChange} />
      <FluxList fluxImpossibles={fluxImpossibles} fluxJournaliers={fluxJournaliers} />
      <GraphSection data={graphData} />
    </div>
  );
}

export default App; 
