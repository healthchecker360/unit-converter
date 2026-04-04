'use client'
import { useState } from 'react'
const units = { Meter:1, Kilometer:0.001, Centimeter:100, Millimeter:1000, Mile:0.000621371, Yard:1.09361, Foot:3.28084, Inch:39.3701, Nautical_Mile:0.000539957 }
export default function LengthConverter() {
  const [value, setValue] = useState('')
  const [from, setFrom] = useState('Meter')
  const [to, setTo] = useState('Kilometer')
  const [result, setResult] = useState(null)
  const convert = () => { const b = parseFloat(value)/units[from]; setResult((b*units[to]).toFixed(6)) }
  return (
    <div className="converter-card">
      <h2 style={{ marginBottom:'20px', fontSize:'18px', color:'#a5b4fc' }}>📏 Length Converter</h2>
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
