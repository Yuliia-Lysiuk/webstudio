import { Home } from "page/HomePage";
import { Navigation } from "page/Navigation";
import { Portfolio } from "page/PortfolioPage";
import { Routes, Route } from "react-router-dom";

export const App = () => {
  return <>
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="portfolio" element={<Portfolio />} />
        </Route>
      </Routes>
  </>;
};
