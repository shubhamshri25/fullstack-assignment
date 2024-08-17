import { useEffect, useState } from "react";
import axios from "axios";
function App() {
  const [data, setData] = useState();

  useEffect(() => {
    axios.get("/ping").then((res) => setData(res.data));
  }, []);

  return <>{data}</>;
}

export default App;
