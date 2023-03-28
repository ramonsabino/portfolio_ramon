import { Footer } from "./components/Footer.jsx";
import MainContent from "./components/MainContent.jsx";
import Sidebar from "./components/Sidebar.jsx";
import "./styles/components/app.sass";

function App() {
  return (
    <div id="portfolio">
      <h1>Ramon Sabino</h1>
      <Sidebar />
      <MainContent />
    </div>
  );
}

export default App;
