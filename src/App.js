import { BrowserRouter, Route, Routes } from 'react-router';
import MainPage from './components/MainPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
