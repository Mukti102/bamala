import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Navbar";
import { ThemeProvider } from "./components/ui/ThemeProvider";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Foot from "./components/Foot";
import Blogs from "./pages/Blogs";
import SingleBlog from "./pages/SingleBlog";
import BallonContact from "./components/ui/BallonContact";
import Articles from "./pages/Articles";
import Projects from "./pages/Projects";
import SingleProject from "./pages/SingleProject";

export default function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<SingleProject />} />
          <Route path="/blog" element={<Articles />} />
          <Route path="/blog/:id" element={<SingleBlog />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
      <BallonContact />
      <Foot />
    </ThemeProvider>
  );
}
