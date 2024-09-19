import image1 from "./assets/blog-image-1.jpg";
import image2 from "./assets/blog-image-2.jpg";
import Header from './components/Header.jsx';
import Article from './components/Article.jsx'
import Footer from './components/Footer.jsx';

function App() {
  return (
    <>
      <Header />
      <main>
        <Article
          imgSrc={image1}
          imgAlt={"Woman walking off screen to the right"}
        />
        <Article
          imgSrc={image2}
          imgAlt={"Woman walking off screen to the right"}
        />
      </main>
      <Footer />
    </>
  );
}

export default App;