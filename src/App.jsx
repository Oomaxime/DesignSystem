import { BrowserRouter, Routes, Route } from "react-router-dom";

// Layouts
import FormLayout from "./layouts/FormLayout";
import ParamLayout from "./layouts/ParamLayout";

// Pages
import NotFound from "./pages/NotFound";
import ConnexionForm from "./pages/ConnexionForm";
import ForgotPasswordForm from "./pages/ForgotPasswordForm";
import UserForm from "./pages/UserForm";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<FormLayout />}>
          <Route index element={<ConnexionForm />} />
          <Route path="forgotpassword" element={<ForgotPasswordForm />} />
        </Route>

        <Route path="param" element={<ParamLayout />}>
          <Route path="user" element={<UserForm />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
