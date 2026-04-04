'use client'
import { useState } from 'react'
const units = { Kilogram:1, Gram:1000, Milligram:1000000, Pound:2.20462, Ounce:35.274, Ton:0.001, Stone:0.157473, Microgram:1e9 }
export default function WeightConverter() {
  const [value, setValue] = useState('')
  const [from, setFrom] = useState('Kilogram')
  const [to, setTo] = useState('Pound')
  const [result, setResult] = useState(null)
  const convert = () => { const b = parseFloat(value)/units[from]; setResult((b*units[to]).toFixed(6)) }
  return (
    <div className="converter-card">
      <h2 style={{ marginBottom:'20px', fontSize:'18px', color:'#a5b4fc' }}>⚖️ Weight Converter</h2>
      <input className="input-field" type="number" placeholder="Enter value" value={value} onChange={e=>setValue(e.target.value)} style={{ marginBottom:'12px' }} />
      <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'12px', marginBottom:'16px' }}>
        <select className="input-field" value={from} onChange={e=>setFrom(e.target.value)}>{Object.keys(units).map(u=><option key={u}>{u}</option>)}</select>
        <select className="input-field" value={to} onChange={e=>setTo(e.target.value)}>{Object.keys(units).map(u=><option key={u}>{u}</option>)}</select>
      </div>
      <button className="btn-primary" onClick={convert}>Convert</button>
      {result!==null && <div className="result-box">{value} {from} = {result} {to}</div>}
    </div>
  )
}
