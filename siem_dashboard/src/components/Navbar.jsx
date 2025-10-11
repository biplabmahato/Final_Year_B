export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <h1>SIEM Dashboard</h1>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#alerts">Alerts</a></li>
          <li><a href="#reports">Reports</a></li>
          <li><a href="#settings">Settings</a></li>
        </ul>
      </div>
    </nav>
  );
}