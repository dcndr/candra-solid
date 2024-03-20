import { useLocation } from "@solidjs/router";

export default function Nav() {
  const location = useLocation();
  const active = (path: string) =>
    path == location.pathname ? "font-bold" : "border-transparent hover:border-sky-600";
  return (
    <nav class="bg-white/60 text-xl rounded-2xl">
      <ul class="container flex flex-col gap-4 items-start p-8 py-16 min-w-44">
        <li class={active("/")}>
          <a href="/">Home</a>
        </li>
        <li class={active("/about")}>
          <a href="/about">About</a>
        </li>
      </ul>
    </nav>
  );
}
