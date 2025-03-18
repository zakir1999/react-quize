import "../Styles/App.css";
import Layout from "./Layout.jsx";
import Home from "./Pages/Home.jsx";
import Signup from "./Pages/Signup.jsx";
function App() {
  return (
    <Layout>
      <Home />
      <Signup />
    </Layout>
  );
}
export default App;
