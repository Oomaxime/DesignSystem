import { BrowserRouter, Routes, Route } from "react-router-dom"

// Layouts
import MainLayout from "./layouts/MainLayout"

// Pages
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App