import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import AppContextProvider from "./context/AppContext.jsx";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(
  "pk_test_51NDOuTIZTpBTUp4W4W0q0TUvZYJ8oY6OJK0kw10xiqxnZ2gnTrvo1cY3F6rnroiFCAIkD41DMzgscnBkPJMjxTWn00B8LIFukO"
);

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Elements stripe={stripePromise}>
      <AppContextProvider>
        <App />
      </AppContextProvider>
    </Elements>
  </BrowserRouter>
);
