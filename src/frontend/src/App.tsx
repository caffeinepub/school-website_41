import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Toaster } from "@/components/ui/sonner";
import About from "@/pages/About";
import Academics from "@/pages/Academics";
import Admissions from "@/pages/Admissions";
import Contact from "@/pages/Contact";
import Faculty from "@/pages/Faculty";
import Home from "@/pages/Home";
import News from "@/pages/News";
import Parents from "@/pages/Parents";
import Students from "@/pages/Students";
import {
  Outlet,
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";

// Root layout
const rootRoute = createRootRoute({
  component: () => (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <Toaster richColors position="top-right" />
    </div>
  ),
});

// Page routes
const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home,
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: About,
});

const academicsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/academics",
  component: Academics,
});

const admissionsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/admissions",
  component: Admissions,
});

const facultyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/faculty",
  component: Faculty,
});

const studentsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/students",
  component: Students,
});

const parentsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/parents",
  component: Parents,
});

const newsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/news",
  component: News,
});

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/contact",
  component: Contact,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  aboutRoute,
  academicsRoute,
  admissionsRoute,
  facultyRoute,
  studentsRoute,
  parentsRoute,
  newsRoute,
  contactRoute,
]);

const router = createRouter({
  routeTree,
  defaultPreload: "intent",
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
