import "./styles/reset.css";
import "./styles/normalize.css";
import "./styles/main.css";

import { TilesGameContainer } from "./components/TilesGame";
import { Layout } from "./containers/Layout/Layout";

function App() {
  return (
    <Layout>
      <TilesGameContainer />
    </Layout>
  );
}

export default App;
