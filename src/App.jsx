import { BrowserRouter, Routes, Route } from "react-router-dom"

// Layouts
import MainLayout from "./layouts/MainLayout"
import FormLayout from "./layouts/FormLayout"

// Pages
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
        </Route>

        <Route element={<FormLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App