
import {
  Routes,
  Route,
  useNavigationType,
  useLocation
} from "react-router-dom";
import Learntinoui from './pages/Learntinoui';
import { useEffect } from "react";

function App() {

  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    //TODO: Update meta titles and descriptions below
    switch (pathname) {
      case "/":
        title = "Dovineowuor | Full Stack Software Engineer";
        metaDescription = "<meta name="description" content="JavaScript wizard, Android Developer, Graphic Designer, UI/UX designer, Technical Support Specialist."> <meta name="keyword" content="portfolio, javascript, developer, Software Engineer, Kotlin, Java, SQL, PHP, REACT, MERN "> <meta property="og:title" content="Dovine Owuor | Front End Web Developer, Full Stack Software Developer, Android Developer, Full Stack JavaScript Developer"/> <meta property="og:image" content="https://dovineowuor.github.io/Learntino"/> <meta property="og:type" content="website" />" />";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);


  return (
    <Routes>
      <Route path="/" element={<Learntinoui/>}/>

    </Routes>
  );
}
export default App;
  