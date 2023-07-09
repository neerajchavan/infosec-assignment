import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import LoginPage from "./pages/LoginPage";
import { Container } from "react-bootstrap";
import RegistrationPage from "./pages/RegistrationPage";
import { ROUTE } from "./utils/constants";
import { useMediaQuery } from "react-responsive";

function App() {
    const isTabletView = useMediaQuery({ maxWidth: 1200 });

    return (
        <>
            <BrowserRouter>
                <Navbar />

                <Container fluid={isTabletView ? true : false} className="app-container">
                    <Routes>
                        <Route path={ROUTE.LOGIN} element={<LoginPage />} />
                        <Route path={ROUTE.REGISTER} element={<RegistrationPage />} />
                    </Routes>
                </Container>
            </BrowserRouter>
        </>
    );
}

export default App;
