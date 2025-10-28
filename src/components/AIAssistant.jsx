import React, { useEffect, useMemo, useRef, useState } from 'react';
import { MessageSquare, Send, Sparkles, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const initialTips = [
  'Ask Emijes to find gifts under $100',
  'Compare two products instantly',
  'Get size recommendations',
];

const AIAssistant = () => {
  const [open, setOpen] = useState(true);
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content:
        "Hi, I'm Emijes — your AI shopping guide. Ask me for personalized picks or help comparing products!",
    },
  ]);
  const [input, setInput] = useState('');
  const listRef = useRef(null);

  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight;
    }
  }, [messages, open]);

  const placeholder = useMemo(() => initialTips[Math.floor(Math.random() * initialTips.length)], []);

  const sendMessage = () => {
    const text = input.trim();
    if (!text) return;

    const next = [...messages, { role: 'user', content: text }];
    setMessages(next);
    setInput('');

    // Simulate Emijes AI thinking and responding
    setTimeout(() => {
      const reply =
        'Here are three smart picks based on your query — optimized for value and quality. You can add any to cart from the list above.';
      setMessages((m) => [
        ...m,
        { role: 'assistant', content: reply },
      ]);
    }, 700);
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.2 }}
            className="w-[22rem] sm:w-[24rem] overflow-hidden rounded-xl border border-white/10 bg-gradient-to-b from-neutral-900 to-black shadow-2xl"
          >
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-white/5">
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-emerald-400" />
                <span className="text-white font-medium">Emijes AI</span>
              </div>
              <button onClick={() => setOpen(false)} className="text-white/60 hover:text-white">
                <X className="h-5 w-5" />
              </button>
            </div>

            <div ref={listRef} className="h-64 overflow-y-auto p-4 space-y-3">
              {messages.map((m, idx) => (
                <div key={idx} className={`text-sm ${m.role === 'assistant' ? 'text-white/90' : 'text-white/80'}`}>
                  <div className={`inline-block rounded-lg px-3 py-2 border ${m.role === 'assistant' ? 'bg-white/5 border-white/10' : 'bg-emerald-500/10 border-emerald-400/30 text-emerald-100'}`}>
                    {m.content}
                  </div>
                </div>
              ))}
            </div>

            <div className="p-3 border-t border-white/10 bg-black/60">
              <div className="flex items-center gap-2">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                  className="flex-1 bg-white/5 text-white placeholder:text-white/50 rounded-md px-3 py-2 outline-none border border-white/10 focus:border-emerald-400/60"
                  placeholder={placeholder}
                />
                <button
                  onClick={sendMessage}
                  className="inline-flex items-center justify-center gap-2 px-3 py-2 rounded-md bg-emerald-500 text-black font-semibold hover:bg-emerald-400 transition"
                >
                  <Send className="h-4 w-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="inline-flex items-center gap-2 px-4 py-3 rounded-full bg-emerald-500 text-black font-semibold shadow-xl hover:bg-emerald-400 transition"
        >
          <MessageSquare className="h-5 w-5" /> Ask Emijes
        </button>
      )}
    </div>
  );
};

export default AIAssistant;
