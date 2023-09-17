import { Route, Routes } from 'react-router-dom';
import SharedLayout from 'components/SharedLayout';
import Home from 'pages/Home';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />} />
      <Route index element={<Home />} />
    </Routes>
  );
};

export default App;
