import './App.css';
import { Route, Routes } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import HomePage from './components/homePage';
import DetailsPage from './components/detailsPage';
import NavBar from './components/navBar';
import Search from './components/search';
import MyCollection from './components/myCollection';

function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/details/:id" element={<DetailsPage />} />
          <Route path="/mycollection" element={<MyCollection />} />
          <Route exact path="/search" element={<Search />} />
        </Routes>
      </ChakraProvider>
    </div>
  );
}

export default App;
