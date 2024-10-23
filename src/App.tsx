import { BrowserRouter as Router } from 'react-router-dom';
import AdminLayout from './components/AdminLayout';
import './globalStyles.css'

function App() {

  return (
    <Router>
      <AdminLayout />
    </Router>
  )
}

export default App
