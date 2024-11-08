import { useEffect, useState } from "react";
import { LearnosityRequest } from "./models/LearnosityRequest";

function App() {
  const [request, setRequest] = useState<null | LearnosityRequest>(null);

  useEffect(() => {
    fetch("http://localhost:3000")
      .then((response) => response.json())
      .then((data) => {
        setRequest(data);
      });
  }, []);

  useEffect(() => {
    if (request) {
      window.LearnosityItems.init(request, {
        readyListener() {},
        errorListener(err) {
          console.log(err);
        },
      });
    }
  }, [request]);

  return (
    <div>
      <div id="learnosity_assess"></div>
    </div>
  );
}

export default App;
