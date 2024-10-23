import { BrowserRouter as Router } from 'react-router-dom';
import './globalStyles.css'
import AdminLayout from './routes/AdminLayout';

function App() {

  return (
    <Router>
      <AdminLayout />
    </Router>
  )
}

export default App
