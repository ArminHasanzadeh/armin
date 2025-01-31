import './App.css'
import Heder from './components/Heder/Heder.jsx'
import Pages from './pages/Pages.jsx'
import Content from './Content/Content.jsx'
import Footer from './footer/Footer.jsx'


function App() {

  return (
  <main className='flex flex-col'>
      
        <Heder />
    
        <Pages />

        <Content />

       <Footer />
      
  </main>
  );
}

export default App
