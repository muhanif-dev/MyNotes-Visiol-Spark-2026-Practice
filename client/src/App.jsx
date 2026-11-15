import { useState, useEffect} from "react";

function App() {
  const [message, setMessage] = useState();
  useEffect(() => {
    const fetchBackend = async () => {
     try {
       const response = await fetch(
       `${import.meta.env.VITE_API_BASE_URL}/api/health`
      );
      if(!response.ok) {
        throw new Error("Backend Connection Failed");
      }
      const data = await response.json();

      setMessage(data.message);
     } catch (error) {
      setMessage("Error");
      console.error(error.message);
     }
    };
    fetchBackend();
  }, []);

  return(
    <div>
      <h1>MyNotes</h1>
      <p>{message}</p>
    </div>
  )
}
export default App;
