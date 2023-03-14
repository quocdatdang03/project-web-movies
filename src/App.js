// library :
import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import publicRoutes from "./routes/routes";

import DefaultLayout from "./layout/components/DefaultLayout";
import Overlay from "./components/Overlay";

function App() {
  return (
    <div className="App bg-[#0f0f0f] min-h-[100vh]">
      <Routes>
        {publicRoutes.map((item, index) => {
          let Layout = DefaultLayout;
          if (item.layout) {
            Layout = item.layout;
          } else if (item.layout === null) {
            Layout = Fragment;
          }
          // get component :
          let Page = item.component;
          return (
            <Route
              key={index}
              path={item.path}
              element={
                <Layout>
                  <Page />
                </Layout>
              }
            />
          );
        })}
      </Routes>
      <Overlay />
    </div>
  );
}

export default App;
