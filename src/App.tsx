import { HashRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { AlbumDetailPage } from './pages/AlbumDetailPage'
import { AlbumsPage } from './pages/AlbumsPage'
import { BestMomentsPage } from './pages/BestMomentsPage'
import { GuinnessBookPage } from './pages/GuinnessBookPage'
import { HomePage } from './pages/HomePage'
import { MessagesPage } from './pages/MessagesPage'
import { NotFoundPage } from './pages/NotFoundPage'
import { SchoolCalendarPage } from './pages/SchoolCalendarPage'
import { TimelinePage } from './pages/TimelinePage'

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/albums" element={<AlbumsPage />} />
          <Route path="/albums/:albumId" element={<AlbumDetailPage />} />
          <Route path="/timeline" element={<TimelinePage />} />
          <Route path="/messages" element={<MessagesPage />} />
          <Route path="/best-moments" element={<BestMomentsPage />} />
          <Route path="/guinness-book" element={<GuinnessBookPage />} />
          <Route path="/school-calendar" element={<SchoolCalendarPage />} />
          <Route path="/not-found" element={<NotFoundPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}

export default App
