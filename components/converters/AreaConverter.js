'use client'
import { useState } from 'react'
const units = { Square_Meter:1, Square_Kilometer:1e-6, Square_Mile:3.861e-7, Square_Yard:1.19599, Square_Foot:10.7639, Square_Inch:1550, Hectare:0.0001, Acre:0.000247105 }
export default function AreaConverter() {
  const [value, setValue] = useState('')
  const [from, setFrom] = useState('Square_Meter')
  const [to, setTo] = useState('Hectare')
  const [result, setResult] = useState(null)
  const convert = () => { const b = parseFloat(value)/units[from]; setResult((b*units[to]).toFixed(6)) }
  return (
    <div className="converter-card">
      <h2 style={{ marginBottom:'20px', fontSize:'18px', color:'#a5b4fc' }}>📐 Area Converter</h2>
      <input className="input-field" type="number" placeholder="Enter value" value={value} onChange={e=>setValue(e.target.value)} style={{ marginBottom:'12px' }} />
      <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'12px', marginBottom:'16px' }}>
        <select className="input-field" value={from} onChange={e=>setFrom(e.target.value)}>{Object.keys(units).map(u=><option key={u}>{u.replace(/_/g,' ')}</option>)}</select>
        <select className="input-field" value={to} onChange={e=>setTo(e.target.value)}>{Object.keys(units).map(u=><option key={u}>{u.replace(/_/g,' ')}</option>)}</select>
      </div>
      <button className="btn-primary" onClick={convert}>Convert</button>
      {result!==null && <div className="result-box">{value} {from.replace(/_/g,' ')} = {result} {to.replace(/_/g,' ')}</div>}
    </div>
  )
}
