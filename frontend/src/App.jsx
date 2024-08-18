import {  useState } from "react";
import Header from "../components/Header";
import SearchComponent from "../components/SearchComponent";
import CardList from "../components/CardList";
import Footer from "../components/Footer";
function App() {
  
  const [searchTerm, setSearchTerm] = useState();

  // useEffect(() => {
  //   axios.get("/ping").then((res) => setData(res.data));
  // }, []);

  return (
    <>
      <Header />
      <SearchComponent searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <CardList searchTerm={searchTerm} />
      <Footer />
    </>
  );
}

export default App;
