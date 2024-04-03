import "./App.css";
import { Layout } from "antd";

import AppHeader from "./components/layout/AppHeader.jsx";
import AppSider from "./components/layout/AppSider.jsx";
import AppContent from "./components/layout/AppContent.jsx";
import { CryptoContextProvider } from "./context/crypto-context.jsx";

function App() {
  return (
    <CryptoContextProvider>
      <Layout>
        <AppHeader />
        <Layout>
          <AppSider />
          <AppContent />
        </Layout>
      </Layout>
    </CryptoContextProvider>
  );
}

export default App;
