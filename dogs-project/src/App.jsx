import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Login from "./Components/Login/Login";
function App() {
    return (
        <div>
            <BrowserRouter>
                <Header />
                <Home />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="login/*" element={<Login />} />
                    <Route path="conta/*" element={<User />} />
                    <Route path="foto/:id" element={<Photo />} />
                    <Route path="foto" element={<Feed />} />
                    <Route path="perfil" element={<User />} />
                    <Route path="postar" element={<User />} />
                    <Route path="404" element={<NotFound />} />
                    <Route path="*" element={<Navigate to="/404" />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
