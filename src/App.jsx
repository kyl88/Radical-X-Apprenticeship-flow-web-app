import { Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import SideBar from './components/SideBar'
import Dashboard from './pages/Dashboard/Dashboard'
import Apprenticeship from './pages/Apprenticeship/Apprenticeship'
import Internship from './pages/Internship/internship'
import Jobs from './pages/Jobs/Jobs'
import Settings from './pages/Settings/Settings'
function App() {
  return (
    <>
    <Router>
      <SideBar />
      <Routes>
        <Route path='/dashboard' element={<Dashboard/>} exact/>
        <Route path='/apprenticeship' element={<Apprenticeship/>} />
        <Route path='/internship' element={<Internship/>} />
        <Route path='/jobs' element={<Jobs/>} />
        <Route path='/settings' element={<Settings/>} />
      </Routes>
    </Router>
    </>
  )
}

export default App
