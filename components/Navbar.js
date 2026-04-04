export default function Navbar() {
  return (
    <nav style={{ background:'#1e293b', borderBottom:'1px solid #334155', padding:'16px 24px', display:'flex', alignItems:'center', justifyContent:'space-between' }}>
      <div style={{ display:'flex', alignItems:'center', gap:'10px' }}>
        <span style={{ fontSize:'28px' }}>⚡</span>
        <span style={{ fontSize:'20px', fontWeight:'700', color:'#a5b4fc' }}>UnitConvert Pro</span>
      </div>
      <span style={{ color:'#64748b', fontSize:'14px' }}>Free • Fast • AI-Powered</span>
    </nav>
  )
}
