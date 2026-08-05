import { Navigate, Route, Routes } from 'react-router-dom'
import { profile } from './data/profile'
import Feed from './pages/feed/Feed'
import Profile from './pages/profile/Profile'
import './shared.css'

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={<Navigate to={`/${profile.username}`} replace />}
      />
      <Route path="/:username" element={<Profile />} />
      <Route path="/:username/feed/:postId" element={<Feed />} />
    </Routes>
  )
}

export default App