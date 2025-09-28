import Portfolio from "./pages/Portfolio";
import { ThemeProvider } from "./contexts/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <Portfolio />
    </ThemeProvider>
  );
}

export default App;
