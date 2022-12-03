import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './components/homePage';
import DetailsPage from './components/detailsPage';
import NavBar from './components/navBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/details/:id" element={<DetailsPage />} />
      </Routes>
    </div>
  );
}

export default App;
