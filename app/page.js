'use client'
import { useState } from 'react'
import Navbar from '../components/Navbar'
import LengthConverter from '../components/converters/LengthConverter'
import WeightConverter from '../components/converters/WeightConverter'
import TemperatureConverter from '../components/converters/TemperatureConverter'
import AreaConverter from '../components/converters/AreaConverter'
import VolumeConverter from '../components/converters/VolumeConverter'
import SpeedConverter from '../components/converters/SpeedConverter'
import CurrencyConverter from '../components/converters/CurrencyConverter'
import GeminiExplainer from '../components/GeminiExplainer'

const tabs = ['Length','Weight','Temperature','Area','Volume','Speed','Currency']

export default function Home() {
  const [active, setActive] = useState('Length')
  const renderConverter = () => {
    switch(active) {
      case 'Length': return <LengthConverter />
      case 'Weight': return <WeightConverter />
      case 'Temperature': return <TemperatureConverter />
      case 'Area': return <AreaConverter />
      case 'Volume': return <VolumeConverter />
      case 'Speed': return <SpeedConverter />
      case 'Currency': return <CurrencyConverter />
    }
  }
  return (
    <main>
      <Navbar />
      <div style={{ maxWidth:'800px', margin:'0 auto', padding:'32px 16px' }}>
        <div style={{ textAlign:'center', marginBottom:'40px' }}>
          <h1 style={{ fontSize:'36px', fontWeight:'800', color:'#f1f5f9', marginBottom:'12px' }}>⚡ Unit Converter Pro</h1>
          <p style={{ color:'#64748b', fontSize:'18px' }}>Convert anything — Length, Weight, Temperature, Area, Volume, Speed and Currency</p>
        </div>
        <div style={{ display:'flex', flexWrap:'wrap', gap:'8px', marginBottom:'24px', justifyContent:'center' }}>
          {tabs.map(tab => (
            <button key={tab} className={`tab-btn ${active===tab?'active':''}`} onClick={()=>setActive(tab)}>{tab}</button>
          ))}
        </div>
        {renderConverter()}
        <GeminiExplainer />
        <div style={{ textAlign:'center', marginTop:'60px', color:'#334155', fontSize:'14px' }}>
          © 2025 UnitConvert Pro · Free Forever · Powered by AI
        </div>
      </div>
    </main>
  )
}
