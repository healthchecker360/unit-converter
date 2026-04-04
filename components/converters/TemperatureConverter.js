'use client'
import { useState } from 'react'
export default function TemperatureConverter() {
  const [value, setValue] = useState('')
  const [from, setFrom] = useState('Celsius')
  const [to, setTo] = useState('Fahrenheit')
  const [result, setResult] = useState(null)
  const units = ['Celsius','Fahrenheit','Kelvin','Rankine']
  const convert = () => {
    const v = parseFloat(value)
    let c = from==='Celsius'?v:from==='Fahrenheit'?(v-32)*5/9:from==='Kelvin'?v-273.15:(v-491.67)*5/9
    let r = to==='Celsius'?c:to==='Fahrenheit'?c*9/5+32:to==='Kelvin'?c+273.15:(c+273.15)*9/5
    setResult(r.toFixed(4))
  }
  return (
    <div className="converter-card">
      <h2 style={{ marginBottom:'20px', fontSize:'18px', color:'#a5b4fc' }}>🌡️ Temperature Converter</h2>
      <input className="input-field" type="number" placeholder="Enter value" value={value} onChange={e=>setValue(e.target.value)} style={{ marginBottom:'12px' }} />
      <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'12px', marginBottom:'16px' }}>
        <select className="input-field" value={from} onChange={e=>setFrom(e.target.value)}>{units.map(u=><option key={u}>{u}</option>)}</select>
        <select className="input-field" value={to} onChange={e=>setTo(e.target.value)}>{units.map(u=><option key={u}>{u}</option>)}</select>
      </div>
      <button className="btn-primary" onClick={convert}>Convert</button>
      {result!==null && <div className="result-box">{value}° {from} = {result}° {to}</div>}
    </div>
  )
}
