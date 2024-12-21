import LoginScreen from './assets/components/LoginScreen'
import Repository from './assets/components/Repository'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginScreen />} />
        <Route path="/repository" element={<Repository />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
