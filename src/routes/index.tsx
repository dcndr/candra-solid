// import { faGithub } from "@fortawesome/free-brands-svg-icons"
// import { faEnvelope } from "@fortawesome/free-solid-svg-icons"

export default function Home() {
  return (
    <main class="flex flex-col gap-6 justify-center items-center text-center mx-auto p-4">
      <img class="size-36 rounded-full hover:scale-110 transition-transform" src="/profile.webp"></img>
      <div class="flex flex-col font-medium text-3xl">
        <h2 class="md:text-4xl opacity-70">Hello world, I'm</h2>
        <h1 class="font-bold text-5xl sm:text-6xl md:text-7xl">Darren Candra</h1>
      </div>
    </main>
  );
}
