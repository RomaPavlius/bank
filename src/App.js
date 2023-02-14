import { Routes, Route } from 'react-router-dom'
import { NavBar } from './components/NavBar/NavBar';
import { Accounts } from './pages/Accounts/Accounts';
import { AccountOwners } from './pages/AccountOwners/AccountOwners';
import { Main } from './pages/Main/Main'
import { Login } from './pages/Login/Login';
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={< Login />} />
        <Route path='/accounts' element={<Accounts />} />
        <Route path='/accountowners' element={<AccountOwners />} />
      </Routes>
      
    </>
  );
}

export default App;
