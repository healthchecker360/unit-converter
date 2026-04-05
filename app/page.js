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
  { icon: '⚡', title: 'Instant Results', desc: 'Get conversion results instantly as you type' },
  { icon: '🌍', title: '7 Unit Categories', desc: 'Length, Weight, Temperature, Area, Volume, Speed, Currency' },
  { icon: '🤖', title: 'AI Powered', desc: 'Ask our Gemini AI anything about units and conversions' },
  { icon: '💱', title: 'Live Currency', desc: 'Real-time exchange rates for 150+ currencies' },
  { icon: '📱', title: 'Mobile Friendly', desc: 'Works perfectly on all devices' },
  { icon: '🆓', title: '100% Free', desc: 'No signup required, completely free forever' },
]

const faqs = [
  { q: 'How do I convert meters to kilometers?', a: 'Simply select Length converter, enter your value, choose Meter as FROM and Kilometer as TO, then click Convert.' },
  { q: 'Are the currency rates real-time?', a: 'Yes! We use live exchange rates updated regularly via ExchangeRate API.' },
  { q: 'How does the AI unit explainer work?', a: 'We use Google Gemini AI. Just type any question about units and get an instant expert answer.' },
  { q: 'Is this tool free to use?', a: 'Yes, UnitConvert Pro is 100% free with no signup or subscription required.' },
  { q: 'Which temperature scales are supported?', a: 'We support Celsius, Fahrenheit, Kelvin and Rankine.' },
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

      {/* HERO SECTION */}
      <div style={{ background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)', padding: '60px 16px', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ display: 'inline-block', background: '#6366f1', borderRadius: '20px', padding: '4px 16px', fontSize: '14px', marginBottom: '16px', color: 'white' }}>
            🆓 Free Forever · No Signup Required
          </div>
          <h1 style={{ fontSize: '42px', fontWeight: '800', color: '#f1f5f9', marginBottom: '16px', lineHeight: '1.2' }}>
            The Fastest Free<br />
            <span style={{ color: '#a5b4fc' }}>Unit Converter Online</span>
          </h1>
          <p style={{ color: '#94a3b8', fontSize: '18px', marginBottom: '32px', maxWidth: '600px', margin: '0 auto 32px' }}>
            Convert Length, Weight, Temperature, Area, Volume, Speed and Currency instantly.
            Powered by Google Gemini AI for smart unit explanations.
          </p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <span style={{ background: '#1e293b', border: '1px solid #334155', borderRadius: '8px', padding: '8px 16px', fontSize: '14px', color: '#94a3b8' }}>📏 Length</span>
            <span style={{ background: '#1e293b', border: '1px solid #334155', borderRadius: '8px', padding: '8px 16px', fontSize: '14px', color: '#94a3b8' }}>⚖️ Weight</span>
            <span style={{ background: '#1e293b', border: '1px solid #334155', borderRadius: '8px', padding: '8px 16px', fontSize: '14px', color: '#94a3b8' }}>🌡️ Temperature</span>
            <span style={{ background: '#1e293b', border: '1px solid #334155', borderRadius: '8px', padding: '8px 16px', fontSize: '14px', color: '#94a3b8' }}>💱 Currency</span>
            <span style={{ background: '#1e293b', border: '1px solid #334155', borderRadius: '8px', padding: '8px 16px', fontSize: '14px', color: '#94a3b8' }}>🚀 Speed</span>
          </div>
        </div>
      </div>

      {/* CONVERTER SECTION */}
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '40px 16px' }}>

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

        {/* Active Converter */}
        {renderConverter()}

        {/* AI Explainer */}
        <GeminiExplainer />

        {/* FEATURES SECTION */}
        <div style={{ marginTop: '60px' }}>
          <h2 style={{ textAlign: 'center', fontSize: '28px', fontWeight: '700', color: '#f1f5f9', marginBottom: '8px' }}>
            Why Use UnitConvert Pro?
          </h2>
          <p style={{ textAlign: 'center', color: '#64748b', marginBottom: '32px' }}>
            The most complete free unit converter with AI-powered explanations
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
            {features.map((f, i) => (
              <div key={i} style={{ background: '#1e293b', border: '1px solid #334155', borderRadius: '12px', padding: '20px' }}>
                <div style={{ fontSize: '28px', marginBottom: '8px' }}>{f.icon}</div>
                <h3 style={{ color: '#f1f5f9', fontWeight: '600', marginBottom: '4px' }}>{f.title}</h3>
                <p style={{ color: '#64748b', fontSize: '14px' }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* HOW TO USE SECTION */}
        <div style={{ marginTop: '60px', background: '#1e293b', border: '1px solid #334155', borderRadius: '16px', padding: '32px' }}>
          <h2 style={{ fontSize: '24px', fontWeight: '700', color: '#f1f5f9', marginBottom: '24px', textAlign: 'center' }}>
            How To Use UnitConvert Pro
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
            {[
              { step: '1', title: 'Choose Category', desc: 'Click on Length, Weight, Temperature or any other category tab' },
              { step: '2', title: 'Enter Value', desc: 'Type the number you want to convert in the input field' },
              { step: '3', title: 'Select Units', desc: 'Choose your FROM and TO units from the dropdown menus' },
              { step: '4', title: 'Get Result', desc: 'Click Convert and see your instant result' },
            ].map((item, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <div style={{ width: '40px', height: '40px', background: '#6366f1', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 12px', fontWeight: '700', color: 'white' }}>
                  {item.step}
                </div>
                <h3 style={{ color: '#f1f5f9', fontWeight: '600', marginBottom: '4px' }}>{item.title}</h3>
                <p style={{ color: '#64748b', fontSize: '14px' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ SECTION */}
        <div style={{ marginTop: '60px' }}>
          <h2 style={{ textAlign: 'center', fontSize: '28px', fontWeight: '700', color: '#f1f5f9', marginBottom: '8px' }}>
            Frequently Asked Questions
          </h2>
          <p style={{ textAlign: 'center', color: '#64748b', marginBottom: '32px' }}>
            Everything you need to know about UnitConvert Pro
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {faqs.map((faq, i) => (
              <div key={i} style={{ background: '#1e293b', border: '1px solid #334155', borderRadius: '12px', padding: '20px' }}>
                <h3 style={{ color: '#a5b4fc', fontWeight: '600', marginBottom: '8px' }}>Q: {faq.q}</h3>
                <p style={{ color: '#94a3b8', fontSize: '14px' }}>A: {faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* SEO TEXT SECTION */}
        <div style={{ marginTop: '60px', padding: '32px', background: '#1e293b', borderRadius: '16px', border: '1px solid #334155' }}>
          <h2 style={{ fontSize: '22px', fontWeight: '700', color: '#f1f5f9', marginBottom: '16px' }}>
            Free Online Unit Converter — Convert Any Unit Instantly
          </h2>
          <p style={{ color: '#64748b', lineHeight: '1.8', marginBottom: '12px' }}>
            UnitConvert Pro is a free online unit converter tool that helps you convert between different units of measurement instantly. Whether you need to convert meters to kilometers, Celsius to Fahrenheit, kilograms to pounds, or US dollars to Pakistani Rupees, our tool makes it simple and fast.
          </p>
          <p style={{ color: '#64748b', lineHeight: '1.8', marginBottom: '12px' }}>
            Our length converter supports meters, kilometers, centimeters, millimeters, miles, yards, feet, inches and nautical miles. The weight converter handles kilograms, grams, milligrams, pounds, ounces, tons and stones. For temperature, we support Celsius, Fahrenheit, Kelvin and Rankine scales.
          </p>
          <p style={{ color: '#64748b', lineHeight: '1.8' }}>
            The currency converter uses live exchange rates and supports over 150 world currencies including USD, EUR, GBP, PKR, INR, AED, SAR and more. Our AI-powered unit explainer uses Google Gemini to answer any question about units and measurements in plain English.
          </p>
        </div>

        {/* FOOTER */}
        <div style={{ textAlign: 'center', marginTop: '60px', paddingTop: '32px', borderTop: '1px solid #1e293b' }}>
          <div style={{ fontSize: '24px', marginBottom: '8px' }}>⚡</div>
          <div style={{ color: '#f1f5f9', fontWeight: '700', marginBottom: '4px' }}>UnitConvert Pro</div>
          <div style={{ color: '#334155', fontSize: '14px', marginBottom: '16px' }}>Free · Fast · AI-Powered · No Signup Required</div>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <span style={{ color: '#475569', fontSize: '13px' }}>📏 Length Converter</span>
            <span style={{ color: '#475569', fontSize: '13px' }}>⚖️ Weight Converter</span>
            <span style={{ color: '#475569', fontSize: '13px' }}>🌡️ Temperature Converter</span>
            <span style={{ color: '#475569', fontSize: '13px' }}>💱 Currency Converter</span>
            <span style={{ color: '#475569', fontSize: '13px' }}>🚀 Speed Converter</span>
          </div>
          <div style={{ marginTop: '16px', color: '#334155', fontSize: '13px' }}>
            © 2025 UnitConvert Pro · All rights reserved
          </div>
        </div>

      </div>
    </main>
  )
}
