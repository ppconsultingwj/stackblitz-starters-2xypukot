import React from 'react';
import { colors } from './site.js';

// Wpisy blogowe ze strony głównej (treść bez zmian)
export const blogPosts = [
  {
    id: 1,
    title: "Japanese lesson with Wojtek (Process-San-Shogun) 🙂",
    date: "20.12.2024",
    image: "/shogun_wojtek.webp",
    excerpt: "Kaizen, Gemba, Muda, Muri... these are all Japanese words that recur in our posts. Let's start with the basics: San, Shogun, and today's hero: MUDA.",
    content: (
      <div className="space-y-4 text-slate-700 leading-relaxed">
        <p><strong>1. Kaizen, Gemba, Muda, Muri...</strong> these are all Japanese words that recur and will recur in our posts. Mainly because it was the Japanese who first recognised the importance of process management.</p>
        <p>We invite you to a Japanese lesson with Wojtek (Process-San-Shogun) 🙂</p>

        <h4 className="text-xl font-bold mt-6" style={{color: colors.blue}}>Let's start with the basics:</h4>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>San (さん)</strong>, Mr. Miss. The most common Japanese suffix...</li>
          <li><strong>Shogun (将軍)</strong>, commander-in-chief. Colloquially: Someone wild, everywhere, knows everything...</li>
        </ul>

        <h4 className="text-xl font-bold mt-6" style={{color: colors.blue}}>And Today's hero… MUDA (無駄)</h4>
        <p>This is a Japanese word meaning "futility", "uselessness", or "wastefulness". Colloquially: Muda is simply a waste/loss. Something we do, whether in life or at work, and it does not bring value to our customers.</p>

        <h4 className="text-xl font-bold text-slate-900 mt-6">Let's focus on the 7 Wastes (Muda):</h4>

        <div className="grid gap-4 mt-4">
          <div className="bg-slate-50 p-4 rounded-lg border-l-4" style={{borderColor: colors.green}}>
            <h5 className="font-bold" style={{color: colors.green}}>1. Overproduction</h5>
            <p className="text-sm mt-1">Producing reports that no one reads.</p>
          </div>
          <div className="bg-slate-50 p-4 rounded-lg border-l-4" style={{borderColor: colors.green}}>
            <h5 className="font-bold" style={{color: colors.green}}>2. Waiting</h5>
            <p className="text-sm mt-1">Waiting for approvals or signatures.</p>
          </div>
          <div className="bg-slate-50 p-4 rounded-lg border-l-4 border-red-500">
            <h5 className="font-bold text-red-700">8. Unused potential</h5>
            <p className="text-sm mt-1">Not involving people to solve their problems.</p>
          </div>
        </div>

        <p className="mt-6 italic">That's all for today! If you go so far write in the comments how it's DELIVERY in Japanese?<br/>Regards, Process - SAN - Shogun Wojtek 🙂</p>
      </div>
    )
  },
  {
    id: 2,
    title: "Japanese lesson no.2 #Kaizen #5S",
    date: "22.12.2024",
    image: "/shogun_wojtek_2.webp",
    excerpt: "Since it is spring cleaning time, today I would like to tell you about the 5S method. It originates directly from manufacturing but works great in offices too!",
    content: (
      <div className="space-y-4 text-slate-700 leading-relaxed">
        <p>We are continuing our adventure with KAIZEN and since it is spring cleaning time, today I would like to tell you about the 5S method.</p>
        <p>The 5S methodology originates directly from manufacturing, where the need to maintain order and standardization is linked not only to productivity but actually also to safety. Business services are only slowly discovering how to use the 5S method and transfer it straight from production to office work. Today, I would like to share a few examples with you.</p>
        <p>But starting from the beginning...<br/>5S is a system for organizing and maintaining a clean, efficient, and productive work environment. It has its origins in Japanese manufacturing practices, and the five words beginning with S are originally seiri, seiton, seiso, seiketsu, and shitsuke. These have been translated as sort, set, shine, standardize and sustain – giving five words beginning with S in English as well.</p>

        <h4 className="text-xl font-bold mt-6 border-b pb-2" style={{color: colors.blue}}>The 5S System:</h4>

        <div className="space-y-6 mt-4">
          <div>
            <h5 className="text-lg font-bold" style={{color: colors.green}}>1. Sort (seiri)</h5>
            <p>The first step in the 5S methodology is to sort. Sort: when in doubt, throw it out, delete it or archive it. Have you looked at your computer’s hard drive lately? Do you keep different versions of the same document? Do you struggle to identify the latest version? Think about the amount of time wasted looking through files, trying to find the correct one.</p>
          </div>
          <div>
            <h5 className="text-lg font-bold" style={{color: colors.green}}>2. Set (in order) (seiton)</h5>
            <p>Once you have removed any unnecessary items you can arrange and organize the things that you need in a way that is systematic and logical. decide where to keep necessary items and then organize accordingly.</p>
          </div>
          <div>
            <h5 className="text-lg font-bold" style={{color: colors.green}}>3. Shine (seiso)</h5>
            <p>This step relates to ensuring that your workspace is kept clean and is properly maintained. Do yourself a favor . . . look at any data storage location and ask “is the area clean and free of data clutter?”.</p>
          </div>
          <div>
            <h5 className="text-lg font-bold" style={{color: colors.green}}>4. Standardize (seiketsu)</h5>
            <p>The fourth step in the 5S methodology is to standardize. This step involves creating a set of guidelines and procedures for maintaining the workspace.</p>
          </div>
          <div>
            <h5 className="text-lg font-bold" style={{color: colors.green}}>5. Sustain (shitsuke)</h5>
            <p>The final step in the 5S methodology is to sustain. This step involves creating a culture of continuous improvement, where the previous four steps are consistently followed, and the workspace is continually optimized…</p>
          </div>
        </div>

        <div className="mt-8 p-4 bg-red-50 border border-red-200 rounded-lg">
          <p className="font-bold text-red-800 mb-2 text-center uppercase">👇👇👇 Please remember 👇👇👇</p>
          <p className="font-bold text-slate-800">5S is often misunderstood and twisted into this</p>
          <p className="text-sm mt-2">This is more or less what my desk looked like when I worked in one of my previous company, and unfortunately it's no joke. Remember its not 5S its some kind of bullsh*t…. 🙂</p>
        </div>

        <div className="my-8 rounded-xl overflow-hidden shadow-lg border border-gray-200">
          <div className="aspect-video bg-gray-200 flex items-center justify-center text-gray-500 flex-col">
            <img src="/zdjecie_biurka.webp" alt="Bałagan na biurku:)" className="w-full h-full object-cover" />
          </div>
          <p className="text-center text-xs text-gray-500 p-2 italic">Don't try this at work! ;)</p>
        </div>

        <p className="mt-6 italic border-t pt-4">
          Regards,<br/>
          <strong>Your Process-San-Shogun Wojtek 🙂</strong>
        </p>
      </div>
    )
  },
  {
    id: 3,
    title: "Japanese lesson with Wojtek (Process-San-Shogun) 🙂 Lesson no.3",
    date: "10.01.2025",
    image: "/jidoka_ai.png",
    excerpt: "We’ve already covered Muda (waste) and cleaned up our desks with 5S. Now, it is time to face the inevitable future. Everyone is talking about it—ChatGPT, Copilot, Gemini... But how does this connect to our Japanese philosophy?",
    content: (
      <div className="space-y-4 text-slate-700 leading-relaxed">
        <p><strong>#Jidoka #AI #ProcessOptimization</strong></p>
        <p>We’ve already covered Muda (waste) and cleaned up our desks with 5S. Now, it is time to face the inevitable future. Everyone is talking about it—ChatGPT, Copilot, Gemini... But how does this connect to our Japanese philosophy?</p>
        <p>We invite you to a Japanese lesson with Wojtek (Process-San-Shogun) 🙂</p>
        
        <h4 className="text-xl font-bold mt-6" style={{color: colors.blue}}>Today's word is... Jidoka (自働化).</h4>
        <p>In classic Lean manufacturing, Jidoka means "automation with a human touch" or "intelligent automation."</p>
        <p>It’s not just about a machine working blindly. It’s about a machine that is smart enough to stop when something goes wrong and ask a human for help.</p>
        
        <h4 className="text-xl font-bold mt-6" style={{color: colors.blue}}>And today, Jidoka = AI in our Processes.</h4>
        <p>Many people fear AI, thinking it is Skynet coming to take our jobs. Colloquially: AI is your new, super-fast intern who never sleeps, drinks coffee, or complains about Mondays. But... you still need to be the Manager (the Shogun!) to guide it.</p>
        
        <h4 className="text-xl font-bold text-slate-900 mt-6">Let's see how we can use Jidoka (AI) to eliminate the Muda we talked about in Lesson 1!</h4>

        <div className="grid gap-6 mt-6">
          <div className="bg-slate-50 p-5 rounded-lg border-l-4" style={{borderColor: colors.green}}>
            <h5 className="font-bold text-lg" style={{color: colors.green}}>1. The Muda of "Blank Page Syndrome"</h5>
            <p className="text-sm mt-1">How much time do we waste staring at a blinking cursor?</p>
            <div className="mt-3 text-xs text-slate-600 bg-white p-2 rounded border border-slate-100">
              <p><strong>Life:</strong> You need to write a birthday wish for your aunt... You stare at the card for 20 minutes.</p>
              <p><strong>Business:</strong> You need to write a project summary... You spend 30 minutes just writing the first sentence.</p>
              <p className="mt-2 font-semibold" style={{color: colors.blue}}>The AI Fix: Ask AI for a draft. "Write 3 versions of a project update." Boom. Done in 5 seconds. You just edit it. That is Jidoka—machine does the heavy lifting, you add the human touch.</p>
            </div>
          </div>

          <div className="bg-slate-50 p-5 rounded-lg border-l-4" style={{borderColor: colors.green}}>
            <h5 className="font-bold text-lg" style={{color: colors.green}}>2. The Muda of Data Analysis (Over-processing)</h5>
            <p className="text-sm mt-1">Crunching numbers manually is so 2010.</p>
            <div className="mt-3 text-xs text-slate-600 bg-white p-2 rounded border border-slate-100">
              <p><strong>Life:</strong> You have a PDF bank statement... You spend hours with a calculator.</p>
              <p><strong>Business:</strong> You have a CSV file with 10,000 rows. You are manually filtering, creating Pivot Tables, and crying inside.</p>
              <p className="mt-2 font-semibold" style={{color: colors.blue}}>The AI Fix: Upload the file to a secure AI tool. Ask: "What are the top 3 trends here?" or "Visualize the sales drop." The machine detects the anomaly (Jidoka) and presents it to you. You make the decision.</p>
            </div>
          </div>

          <div className="bg-slate-50 p-5 rounded-lg border-l-4" style={{borderColor: colors.green}}>
            <h5 className="font-bold text-lg" style={{color: colors.green}}>3. The Muda of Searching (Unnecessary Motion)</h5>
            <p className="text-sm mt-1">Remember the 90 minutes wasted looking for things?</p>
            <div className="mt-3 text-xs text-slate-600 bg-white p-2 rounded border border-slate-100">
              <p><strong>Life:</strong> "Google, what is the name of that movie where the guy eats the pizza on the roof?"</p>
              <p><strong>Business:</strong> Searching through 50 folders of SOPs (Standard Operating Procedures) to find one specific compliance rule.</p>
              <p className="mt-2 font-semibold" style={{color: colors.blue}}>The AI Fix: Building a simple internal Knowledge Base (Chatbot). You ask: "What is the procedure for invoice approval?" It gives you the answer instantly. No clicking through folders.</p>
            </div>
          </div>

          <div className="bg-slate-50 p-5 rounded-lg border-l-4" style={{borderColor: colors.green}}>
            <h5 className="font-bold text-lg" style={{color: colors.green}}>4. The Muda of Errors (Defects)</h5>
            <div className="mt-3 text-xs text-slate-600 bg-white p-2 rounded border border-slate-100">
              <p><strong>Life:</strong> Sending a text to your boss with a terrible typo because of autocorrect.</p>
              <p><strong>Business:</strong> Sending a proposal with the wrong company name copied from a previous template. (We have all been there... 😉).</p>
              <p className="mt-2 font-semibold" style={{color: colors.blue}}>The AI Fix: AI is the ultimate "Poka-Yoke" (mistake-proofing). It scans your text, your code, or your data patterns and flags inconsistencies before you hit send.</p>
            </div>
          </div>
        </div>

        <div className="mt-8 p-4 bg-red-50 border border-red-200 rounded-lg">
           <p className="font-bold text-red-800 mb-2 text-center uppercase">👇👇👇 Please remember 👇👇👇</p>
           <p className="font-bold text-slate-800">AI is a tool, not a replacement.</p>
           <p className="text-sm mt-2">In the concept of Jidoka, the "Human Touch" is the most important part. AI can generate text, code, or images, but it can also hallucinate (lie confidently!).<br/>If you let AI run your process without supervision, you are not a Process-San-Shogun, you are just reckless.</p>
           <p className="text-sm mt-2 font-bold">Use AI to remove the "robot" from the human. Let the AI do the boring, repetitive, calculation stuff, so YOU can focus on creativity, strategy, and empathy.</p>
        </div>

        <p className="mt-8 italic text-slate-600 border-t pt-4">
          That's all for today!<br/>
          If you made it this far, do you know the Japanese word for "Artificial Intelligence"?<br/>
          It is Jinkō Chinō (人工知能).<br/><br/>
          Regards,<br/>
          Sayōnara (さようなら)<br/>
          <strong>Process - SAN - Shogun Wojtek 🙂</strong>
        </p>
      </div>
    )
  }
];
