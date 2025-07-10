export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 font-sans">
      <div className="max-w-4xl mx-auto py-16 px-4">
        <h1 className="text-4xl font-bold mb-2">TALKwithAI – YOUR AI FRIENDLY DOST (ChatBot) for Smarter Conversations</h1>
        <p className="text-xl mb-6">An Epitome of Knowledge – built to bring clarity, curiosity, and comfort into your AI interactions.
        <br/><span className="italic text-sm">A digital companion powered by intention and intelligence.</span></p>
        <div className="mb-10">
          <iframe
            src="https://www.chatbase.co/chatbot-iframe/h2TQy42fYCXoUo6RHNik2"
            width="100%"
            height="600"
            style={{ border: 'none' }}
            allowFullScreen
          ></iframe>
        </div>
        <div className="text-md bg-white p-6 rounded shadow">
          <h2 className="text-2xl font-semibold mb-2">About the Creator</h2>
          <p>Crafted by Tanisha Hasan — a soulful digital creator blending intelligence, intuition, and intention.
          With TALKwithAI, she transforms conversations into a trusted space of learning, empathy, and growth.</p>
        </div>
        <div className="mt-6 text-sm text-gray-700">
          <p><strong>Let’s Connect:</strong> <a className="text-blue-500 underline" href="mailto:tinashaikh30@gmail.com">tinashaikh30@gmail.com</a></p>
        </div>
      </div>
    </div>
  )
}
