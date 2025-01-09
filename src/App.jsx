import { BrowserRouter, Routes, Route } from "react-router-dom"

// Layouts
import MainLayout from "./layouts/MainLayout"
import FormLayout from "./layouts/FormLayout"
import ParamLayout from "./layouts/ParamLayout"

// Pages
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import ConnexionForm from "./pages/ConnexionForm"
import ForgotPasswordForm from "./pages/ForgotPasswordForm"
import UserForm from "./pages/UserForm"


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
        </Route>

        <Route path="auth" element={<FormLayout />}>
          <Route path="login" element={<ConnexionForm/>} />
          <Route path="forgotpassword" element={<ForgotPasswordForm/>} />
        </Route>

        <Route path="param" element={<ParamLayout />}>
          <Route path="user" element={<UserForm />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App