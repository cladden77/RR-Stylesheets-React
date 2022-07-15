import './App.css';

const styledText = {
  fontSize: "25px",
  textAlign: "center",
  margin: "40px",
  border: "1px solid green"
};

export default function App() {
  return (
    <div style={styledText}>
      <p>Customized Text</p>
    </div>
  );
}
