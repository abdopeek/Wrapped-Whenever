import './Navbar.css'

interface NavbarProps {
    setRange : (range: string) => void;
    setIsAuthenticated : (authenticated: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({ setRange, setIsAuthenticated }) => {
    
    const logOut = async () => {
        const resp = await fetch(`http://127.0.0.1:5000/logout`, {
            credentials: "include",
            method: "GET",
            mode: 'no-cors'
        });
        setIsAuthenticated(false)
    }
    
    
    
    return (
        <nav>
            <div className="buttons-container">
                <div onClick={() => setRange("short_term")} className="songs-btn">1 Month</div>
                <div onClick={() => setRange("medium_term")} className="artists-btn">6 Months</div>
                <div onClick={() => setRange("long_term")} className="albums-btn">12 Months</div>
                <div onClick={logOut} className="logout-btn">Log out</div>
            </div>
        </nav>
    )
}

export default Navbar