import { Routes, Route } from 'react-router-dom'
import { NavBar } from './components/NavBar/NavBar';
import { Accounts } from './pages/Accounts/Accounts';
import { AccountOwners } from './pages/AccountOwners/AccountOwners';
import { Main } from './pages/Main/Main'
function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={< Main />} />
        <Route path='/accounts' element={<Accounts />} />
        <Route path='/accountowners' element={<AccountOwners />} />
      </Routes>
    </>
  );
}

export default App;
