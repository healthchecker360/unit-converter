export async function POST(request) {
  const { question } = await request.json()
  const apiKey = process.env.GEMINI_API_KEY
  try {
    const res = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: `You are a unit conversion expert. Answer clearly and concisely: ${question}` }] }]
        })
      }
    )
    const data = await res.json()
    const answer = data.candidates?.[0]?.content?.parts?.[0]?.text || 'No answer returned.'
    return Response.json({ answer })
  } catch (e) {
    return Response.json({ error: 'Gemini API error: ' + e.message })
  }
}
