import "./App.css";
import Card from "./ReactCard/Card";

const cardDetails = [
  {
    valid: "FREE",
    plan: 0,
    feature: [
      {
        keys: "Single User",
        value: true,
      },
      {
        keys: "5GB Storage",
        value: true,
      },
      {
        keys: "Unlimited Public Projects",
        value: true,
      },
      {
        keys: "Community Access",
        value: false,
      },
      {
        keys: "Unlimited Private Projects",
        value: false,
      },
      {
        keys: "Dedicated Phone Support",
        value: false,
      },
      {
        keys: "Free Subdomain",
        value: false,
      },
      {
        keys: "Monthly Status Reports",
        value: false,
      },
    ],
  },
  {
    valid: "PLUS",
    plan: 9,
    feature: [
      {
        keys: "5 User",
        value: true,
      },
      {
        keys: "50GB Storage",
        value: true,
      },
      {
        keys: "Unlimited Public Projects",
        value: true,
      },
      {
        keys: "Community Access",
        value: true,
      },
      {
        keys: "Dedicated Phone Support",
        value: true,
      },
      {
        keys: "Free Subdomain",
        value: true,
      },
      {
        keys: "Monthly Status Reports",
        value: false,
      },
    ],
  },
  {
    valid: "PRO",
    plan: 49,
    feature: [
      {
        keys: "Unlimited User",
        value: true,
      },
      {
        keys: "150GB Storage",
        value: true,
      },
      {
        keys: "Unlimited Public Projects",
        value: true,
      },
      {
        keys: "Community Access",
        value: true,
      },
      {
        keys: "Dedicated Phone Support",
        value: true,
      },
      {
        keys: "Free Subdomain",
        value: true,
      },
      {
        keys: "Monthly Status Reports",
        value: true,
      },
    ],
  },
];


function App() {
  return (
    <div className="App">
      <h1> Price card </h1>
      <div className="top-content">
        {cardDetails.map((detail) => {
          return <Card details={detail}></Card>;
        })}
      </div>
    </div>
  );
}

export default App;
