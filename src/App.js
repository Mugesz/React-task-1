import "./App.css";
import Card from "./ReactCard/Card";

const cardDetails = [
  {
    valid: "FREE",
    plan: 0,
    feature: [
      {
        key: "Single User",
        value: true,
      },
      {
        key: "5GB Storage",
        value: true,
      },
      {
        key: "Unlimited Public Projects",
        value: true,
      },
      {
        key: "Community Access",
        value: false,
      },
      {
        key: "Unlimited Private Projects",
        value: false,
      },
      {
        key: "Dedicated Phone Support",
        value: false,
      },
      {
        key: "Free Subdomain",
        value: false,
      },
      {
        key: "Monthly Status Reports",
        value: false,
      },
    ],
  },
  {
    valid: "PLUS",
    plan: 9,
    feature: [
      {
        key: "5 User",
        value: true,
      },
      {
        key: "50GB Storage",
        value: true,
      },
      {
        key: "Unlimited Public Projects",
        value: true,
      },
      {
        key: "Community Access",
        value: true,
      },
      {
        key: "Dedicated Phone Support",
        value: true,
      },
      {
        key: "Free Subdomain",
        value: true,
      },
      {
        key: "Monthly Status Reports",
        value: false,
      },
    ],
  },
  {
    valid: "PRO",
    plan: 49,
    feature: [
      {
        key: "Unlimited User",
        value: true,
      },
      {
        key: "150GB Storage",
        value: true,
      },
      {
        key: "Unlimited Public Projects",
        value: true,
      },
      {
        key: "Community Access",
        value: true,
      },
      {
        key: "Dedicated Phone Support",
        value: true,
      },
      {
        key: "Free Subdomain",
        value: true,
      },
      {
        key: "Monthly Status Reports",
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
