import Content from "@/components/content/Content";
import Hero from "@/components/hero/Hero";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-zinc-50 dark:bg-black font-sans">
      {/* Hero Section */}
      <Hero />

      {/* Main Content */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 py-12">
        <Content />
      </main>
    </div>
  );
}
