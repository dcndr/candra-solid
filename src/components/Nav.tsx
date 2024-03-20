import { useLocation } from "@solidjs/router";

export default function Nav() {
  const location = useLocation();
  const active = (path: string) =>
    path == location.pathname ? "font-bold" : "border-transparent hover:border-sky-600";
  return (
    <nav class="text-xl rounded-2xl">
      <div class="container flex flex-col gap-4 sm:gap-8 sm:items-start p-8 sm:py-16 min-w-40">
        <div class="flex gap-1 justify-center sm:justify-start">
          <span class="text-3xl font-bold">candra</span>
          <span class="opacity-70 text-md font-medium">dev</span>
        </div>
        <ul class="flex sm:flex-col gap-3 justify-center sm:justify-start">
          <li class={`${active("/")} hover:scale-110 transition-transform`}>
            <a href="/">Home</a>
          </li>
          <li class={`${active("/projects")} hover:scale-110 transition-transform`}>
            <a href="/projects">Projects</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
