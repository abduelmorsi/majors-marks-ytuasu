import { ThemeProvider } from "@material-tailwind/react";
import { NavbarSimple } from './components/Navbar.jsx';
import MarksTable from './components/Datatable.jsx';
import { Routes, Route } from 'react-router-dom';
import MajorsDetails from './pages/MajorsDetails.jsx';

export default function App() {
  return (
    <ThemeProvider>
      <NavbarSimple />
      <Routes>
        <Route path="/" element={<MarksTable />} />
        <Route path="/majors-details" element={<MajorsDetails />} />
      </Routes>
    </ThemeProvider>
  );
}