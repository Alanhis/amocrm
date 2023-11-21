import Header from './header/header';
import MainPage from './main/main';
import Footer from './footer/footer';
import Decoration from './decoration/decoration';
import './App.css';
import '@fontsource/inter';
import '@fontsource/montserrat';

export default function App() {
  return (
    <div className="App">
      <Decoration />
      <Header />
      <MainPage />
      <Footer />
    </div>
  );
}
