import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import TeamPage from '../pages/TeamPage'
import MatchesPage from '../pages/MatchesPage'
import StoriesPage from '../pages/StoriesPage'
import GalleryPage from '../pages/GalleryPage'
import ContactPage from '../pages/ContactPage'
import NotFoundPage from '../pages/NotFoundPage'

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/team" element={<TeamPage />} />
      <Route path="/matches" element={<MatchesPage />} />
      <Route path="/stories" element={<StoriesPage />} />
      <Route path="/gallery" element={<GalleryPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

export default AppRoutes
