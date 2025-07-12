import Head from "next/head";
import ChatWidget from "../components/ChatWidget";

export default function Home() {
  return (
    <>
      <Head>
        <title>TALKwithAI – Your AI Friendly Dost</title>
        <meta
          name="description"
          content="TALKwithAI – a gentle yet powerful AI companion for smarter conversations."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/*   Page Wrapper   */}
      <div className="min-h-screen bg-gradient-to-br from-[#0F1114] via-[#1A1C20] to-[#0F1114] text-gray-200 font-sans flex flex-col items-center px-4 pb-20">
        {/*   Header   */}
        <header className="w-full max-w-3xl text-center pt-16 pb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4 tracking-tight">
            TALKwithAI – <span className="text-teal-400">Your AI Friendly Dost</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 italic max-w-xl mx-auto">
            A digital companion built to bring clarity, curiosity &amp; comfort into your AI interactions.
          </p>
        </header>

        {/*   Chatbot Embed   */}
        <section className="w-full max-w-3xl rounded-2xl shadow-xl overflow-hidden ring-1 ring-gray-800">
          {/* Replaced static iframe with ChatWidget for fresh sessions */}
          <ChatWidget />
        </section>

        {/*   Footer   */}
        <footer className="mt-12 text-sm text-gray-500 text-center max-w-lg leading-relaxed">
          <p>
            Built with ❤️ by <span className="font-medium text-gray-300">Tanisha Hasan</span>. Powered by&nbsp;
            <a href="https://vercel.com" target="_blank" rel="noreferrer" className="text-teal-400 hover:underline">
              Vercel
            </a>
            &nbsp;and&nbsp;
            <a href="https://chatbase.co" target="_blank" rel="noreferrer" className="text-teal-400 hover:underline">
              Chatbase
            </a>
            .
          </p>
        </footer>
      </div>
    </>
  );
}
