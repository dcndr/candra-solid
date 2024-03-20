import { A } from "@solidjs/router";

export default function Home() {
  return (
    <main class="flex flex-col gap-6 my-auto items-center text-center mx-auto p-4">
      <img class="size-36 rounded-full" src="/profile.webp"></img>
      <div class="flex flex-col font-medium text-3xl">
        <h2 class="md:text-4xl opacity-70">Hello world, I'm</h2>
        <h1 class="font-bold text-5xl md:text-7xl">Darren Candra</h1>
      </div>
    </main>
  );
}
