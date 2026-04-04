'use client'
import { useState } from 'react'
export default function GeminiExplainer() {
  const [question, setQuestion] = useState('')
  const [answer, setAnswer] = useState('')
  const [loading, setLoading] = useState(false)
  const ask = async () => {
    if (!question.trim()) return
    setLoading(true); setAnswer('')
    try {
      const res = await fetch('/api/gemini', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question })
      })
      const data = await res.json()
      setAnswer(data.answer || data.error)
    } catch { setAnswer('Something went wrong.') }
    setLoading(false)
  }
  return (
    <div className="ai-box" style={{ marginTop:'40px' }}>
      <h2 style={{ fontSize:'20px', color:'#a5b4fc', marginBottom:'8px' }}>🤖 AI Unit Explainer (Gemini)</h2>
      <p style={{ color:'#64748b', marginBottom:'16px', fontSize:'14px' }}>Ask anything — "How many feet in a mile?" or "Explain Kelvin"</p>
      <div style={{ display:'flex', gap:'12px' }}>
        <input className="input-field" placeholder="Ask about any unit..." value={question} onChange={e=>setQuestion(e.target.value)} onKeyDown={e=>e.key==='Enter'&&ask()} />
        <button className="btn-primary" onClick={ask} disabled={loading} style={{ width:'auto', whiteSpace:'nowrap' }}>{loading?'...':'Ask AI'}</button>
      </div>
      {answer && <div style={{ marginTop:'16px', background:'#0f172a', borderRadius:'8px', padding:'16px', color:'#e2e8f0', lineHeight:'1.6' }}>{answer}</div>}
    </div>
  )
}
