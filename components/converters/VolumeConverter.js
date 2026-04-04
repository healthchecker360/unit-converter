'use client'
import { useState } from 'react'
const units = { Liter:1, Milliliter:1000, Cubic_Meter:0.001, Cubic_Centimeter:1000, Gallon_US:0.264172, Quart:1.05669, Pint:2.11338, Cup:4.22675, Fluid_Ounce:33.814, Tablespoon:67.628, Teaspoon:202.884 }
export default function VolumeConverter() {
  const [value, setValue] = useState('')
  const [from, setFrom] = useState('Liter')
  const [to, setTo] = useState('Gallon_US')
  const [result, setResult] = useState(null)
  const convert = () => { const b = parseFloat(value)/units[from]; setResult((b*units[to]).toFixed(6)) }
  return (
    <div className="converter-card">
      <h2 style={{ marginBottom:'20px', fontSize:'18px', color:'#a5b4fc' }}>🧪 Volume Converter</h2>
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
