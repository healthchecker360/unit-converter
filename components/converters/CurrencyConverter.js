'use client'
import { useState } from 'react'
const currencies = ['USD','EUR','GBP','PKR','INR','AED','SAR','CAD','AUD','JPY','CNY','CHF','MYR','SGD','TRY']
export default function CurrencyConverter() {
  const [value, setValue] = useState('')
  const [from, setFrom] = useState('USD')
  const [to, setTo] = useState('PKR')
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const convert = async () => {
    setLoading(true); setError('')
    try {
      const res = await fetch(`/api/currency?from=${from}&to=${to}&amount=${value}`)
      const data = await res.json()
      if (data.error) setError(data.error)
      else setResult(data.result)
    } catch { setError('Conversion failed.') }
    setLoading(false)
  }
  return (
    <div className="converter-card">
      <h2 style={{ marginBottom:'20px', fontSize:'18px', color:'#a5b4fc' }}>💱 Currency Converter</h2>
      <input className="input-field" type="number" placeholder="Enter amount" value={value} onChange={e=>setValue(e.target.value)} style={{ marginBottom:'12px' }} />
      <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'12px', marginBottom:'16px' }}>
        <select className="input-field" value={from} onChange={e=>setFrom(e.target.value)}>{currencies.map(c=><option key={c}>{c}</option>)}</select>
        <select className="input-field" value={to} onChange={e=>setTo(e.target.value)}>{currencies.map(c=><option key={c}>{c}</option>)}</select>
      </div>
      <button className="btn-primary" onClick={convert} disabled={loading}>{loading?'Converting...':'Convert'}</button>
      {result && <div className="result-box">{value} {from} = {result} {to}</div>}
      {error && <div style={{ color:'#f87171', marginTop:'12px', textAlign:'center' }}>{error}</div>}
    </div>
  )
}
