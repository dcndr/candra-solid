import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import Nav from "~/components/Nav";
import "./app.css";

export default function App() {
  return (
    <Router
      root={props => (
        <>
          <div class="bg-black/5 flex p-6 h-full min-h-screen">
            <Nav />
            <Suspense>{props.children}</Suspense>
          </div>
        </>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
