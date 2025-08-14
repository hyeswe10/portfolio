import { BrowserRouter, Route, Routes } from 'react-router';
import MainPage from './components/MainPage';
import ShoppingMall from './components/ShoppingMall';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/shoppingmall" element={<ShoppingMall/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
