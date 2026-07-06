import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Services } from "./pages/Services";
import { Countries } from "./pages/Countries";
import { Pricing } from "./pages/Pricing";
import { Testimonials } from "./pages/Testimonials";
import { Contact } from "./pages/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "services", Component: Services },
      { path: "countries", Component: Countries },
      { path: "pricing", Component: Pricing },
      { path: "testimonials", Component: Testimonials },
      { path: "contact", Component: Contact },
    ],
  },
]);
