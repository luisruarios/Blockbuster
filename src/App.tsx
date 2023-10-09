import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home/index';
import CheckoutPage from './pages/checkout/index';
import Layout from './components/Layout';

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<CheckoutPage />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
