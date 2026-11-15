import { useState, useEffect} from "react";

function App() {
  const [message, setMessage] = useState();
  useEffect(() => {
    const fetchBackend = async () => {
     try {
       const response = await fetch(
        "http://localhost:5000/api/health"
      );
      if(!response) {
        throw new Error("Failed");
      }
      const data = await response.json();

      setMessage(data.message);
     } catch (error) {
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


// import { useEffect, useState } from "react";

// function App() {
//   const [message, setMessage] = useState("Connecting to backend...");

//   useEffect(() => {
//     const fetchBackend = async () => {
//       try {
//         const response = await fetch(
//           "http://localhost:5000/api/health"
//         );

//         if (!response.ok) {
//           throw new Error("Backend request failed");
//         }

//         const data = await response.json();

//         setMessage(data.message);
//       } catch (error) {
//         setMessage("Backend connection failed!");
//         console.error(error);
//       }
//     };

//     fetchBackend();
//   }, []);

//   return (
//     <div>
//       <h1>MyNotes Application</h1>

//       <h2>Backend Connection Status</h2>

//       <p>{message}</p>
//     </div>
//   );
// }

// export default App;
