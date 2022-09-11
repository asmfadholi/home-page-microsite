import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PhoneNumberProvider } from "./contexts/phoneNumberContext";

// layout page
import Header from "./components/Header";

// routes
import HomeLazy from "./pages/home/Lazy";
import NotFoundLazy from "./pages/not-found/Lazy";

// styles
import "./index.css";

const root = createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <PhoneNumberProvider>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<HomeLazy />} />
          <Route path="*" element={<NotFoundLazy />} />
        </Route>
      </Routes>
    </PhoneNumberProvider>
  </BrowserRouter>
);
