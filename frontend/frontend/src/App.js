import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("Загрузка...");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/hello");
        const data = await res.json();
        setMessage(data.message);
      } catch (err) {
        setMessage("Ошибка связи с сервером");
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
}

export default App;
