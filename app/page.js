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

const tabs = [
  { name: 'Length', icon: '📏' },
  { name: 'Weight', icon: '⚖️' },
  { name: 'Temperature', icon: '🌡️' },
  { name: 'Area', icon: '📐' },
  { name: 'Volume', icon: '🧪' },
  { name: 'Speed', icon: '🚀' },
  { name: 'Currency', icon: '💱' },
]

const features = [
  { icon: '⚡', title: 'Instant Results', desc: 'Get conversion results instantly' },
  { icon: '🌍', title: '7 Categories', desc: 'Length, Weight, Temperature, Area, Volume, Speed, Currency' },
  { icon: '🤖', title: 'AI Powered', desc: 'Ask Gemini AI anything about units' },
  { icon: '💱', title: 'Live Currency', desc: 'Real-time exchange rates for 150+ currencies' },
  { icon: '📱', title: 'Mobile Friendly', desc: 'Works perfectly on all devices' },
  { icon: '🆓', title: '100% Free', desc: 'No signup required, free forever' },
]

const faqs = [
  { q: 'How do I convert meters to kilometers?', a: 'Select Length, enter your value, choose Meter and Kilometer, then click Convert.' },
  { q: 'Are the currency rates real-time?', a: 'Yes! We use live exchange rates updated regularly.' },
  { q: 'How does the AI explainer work?', a: 'Powered by Google Gemini AI — just ask any question about units.' },
  { q: 'Is this tool free?', a: 'Yes, 100% free with no signup needed.' },
  { q: 'Which temperature scales are supported?', a: 'Celsius, Fahrenheit, Kelvin and Rankine.' },
]

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

      {/* SIMPLE HERO */}
      <div style={{ textAlign: 'center', padding: '48px 16px 32px', background: '#0f172a' }}>
        <h1 style={{ fontSize: '36px', fontWeight: '800', color: '#f1f5f9', marginBottom: '12px' }}>
          ⚡ Unit Converter Pro
        </h1>
        <p style={{ color: '#64748b', fontSize: '16px' }}>
          Convert Length, Weight, Temperature, Area, Volume, Speed & Currency — Free & Instant
        </p>
      </div>

      {/* CONVERTER */}
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '24px 16px' }}>

        {/* Tabs */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '24px', justifyContent: 'center' }}>
          {tabs.map(tab => (
            <button
              key={tab.name}
              className={`tab-btn ${active === tab.name ? 'active' : ''}`}
              onClick={() => setActive(tab.name)}
            >
              {tab.icon} {tab.name}
            </button>
          ))}
        </div>

        {/* Converter */}
        {renderConverter()}

        {/* AI */}
        <GeminiExplainer />

        {/* FEATURES */}
        <div style={{ marginTop: '60px' }}>
          <h2 style={{ textAlign: 'center', fontSize: '24px', fontWeight: '700', color: '#f1f5f9', marginBottom: '8px' }}>
            Why Use UnitConvert Pro?
          </h2>
          <p style={{ textAlign: 'center', color: '#64748b', marginBottom: '28px', fontSize: '14px' }}>
            The most complete free unit converter with AI-powered explanations
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
            {features.map((f, i) => (
              <div key={i} style={{ background: '#1e293b', border: '1px solid #334155', borderRadius: '12px', padding: '20px' }}>
                <div style={{ fontSize: '24px', marginBottom: '8px' }}>{f.icon}</div>
                <h3 style={{ color: '#f1f5f9', fontWeight: '600', marginBottom: '4px', fontSize: '15px' }}>{f.title}</h3>
                <p style={{ color: '#64748b', fontSize: '13px' }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* HOW TO USE */}
        <div style={{ marginTop: '48px', background: '#1e293b', border: '1px solid #334155', borderRadius: '16px', padding: '28px' }}>
          <h2 style={{ fontSize: '22px', fontWeight: '700', color: '#f1f5f9', marginBottom: '24px', textAlign: 'center' }}>
            How To Use
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '20px' }}>
            {[
              { step: '1', title: 'Choose Category', desc: 'Click any tab above' },
              { step: '2', title: 'Enter Value', desc: 'Type the number to convert' },
              { step: '3', title: 'Select Units', desc: 'Pick FROM and TO units' },
              { step: '4', title: 'Get Result', desc: 'Click Convert instantly' },
            ].map((item, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <div style={{ width: '36px', height: '36px', background: '#6366f1', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 10px', fontWeight: '700', color: 'white', fontSize: '14px' }}>
                  {item.step}
                </div>
                <h3 style={{ color: '#f1f5f9', fontWeight: '600', marginBottom: '4px', fontSize: '14px' }}>{item.title}</h3>
                <p style={{ color: '#64748b', fontSize: '13px' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div style={{ marginTop: '48px' }}>
          <h2 style={{ textAlign: 'center', fontSize: '24px', fontWeight: '700', color: '#f1f5f9', marginBottom: '8px' }}>
            FAQs
          </h2>
          <p style={{ textAlign: 'center', color: '#64748b', marginBottom: '24px', fontSize: '14px' }}>
            Common questions about UnitConvert Pro
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {faqs.map((faq, i) => (
              <div key={i} style={{ background: '#1e293b', border: '1px solid #334155', borderRadius: '10px', padding: '16px' }}>
                <h3 style={{ color: '#a5b4fc', fontWeight: '600', marginBottom: '6px', fontSize: '14px' }}>Q: {faq.q}</h3>
                <p style={{ color: '#94a3b8', fontSize: '13px' }}>A: {faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* SEO TEXT */}
        <div style={{ marginTop: '48px', padding: '24px', background: '#1e293b', borderRadius: '12px', border: '1px solid #334155' }}>
          <h2 style={{ fontSize: '18px', fontWeight: '700', color: '#f1f5f9', marginBottom: '12px' }}>
            Free Online Unit Converter
          </h2>
          <p style={{ color: '#64748b', lineHeight: '1.8', fontSize: '14px', marginBottom: '10px' }}>
            UnitConvert Pro is a free online unit converter that helps you convert between different units of measurement instantly. Convert meters to kilometers, Celsius to Fahrenheit, kilograms to pounds, or dollars to Pakistani Rupees with ease.
          </p>
          <p style={{ color: '#64748b', lineHeight: '1.8', fontSize: '14px' }}>
            Our AI-powered explainer uses Google Gemini to answer any question about units in plain English. Supports 7 categories with 50+ units total.
          </p>
        </div>

        {/* FOOTER */}
        <div style={{ textAlign: 'center', marginTop: '48px', paddingTop: '24px', borderTop: '1px solid #1e293b' }}>
          <div style={{ fontSize: '20px', marginBottom: '6px' }}>⚡</div>
          <div style={{ color: '#f1f5f9', fontWeight: '700', marginBottom: '4px' }}>UnitConvert Pro</div>
          <div style={{ color: '#475569', fontSize: '13px', marginBottom: '12px' }}>Free · Fast · AI-Powered</div>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <span style={{ color: '#475569', fontSize: '12px' }}>📏 Length</span>
            <span style={{ color: '#475569', fontSize: '12px' }}>⚖️ Weight</span>
            <span style={{ color: '#475569', fontSize: '12px' }}>🌡️ Temperature</span>
            <span style={{ color: '#475569', fontSize: '12px' }}>💱 Currency</span>
            <span style={{ color: '#475569', fontSize: '12px' }}>🚀 Speed</span>
            <span style={{ color: '#475569', fontSize: '12px' }}>📐 Area</span>
            <span style={{ color: '#475569', fontSize: '12px' }}>🧪 Volume</span>
          </div>
          <div style={{ marginTop: '12px', color: '#334155', fontSize: '12px' }}>
            © 2025 UnitConvert Pro · All rights reserved
          </div>
        </div>

      </div>
    </main>
  )
}
