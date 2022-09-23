import "./styles.css";
import Header from "./components/Header";
import Card from "./components/Card";
import data from "./data";

export default function App() {
  const entries = data.map((item) => {
    return <Card key={item.id} entry={item} />;
  });

  return (
    <div>
      <Header />
      {entries}
    </div>
  );
}
