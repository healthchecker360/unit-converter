export async function POST(request) {
  const { question } = await request.json()
  const apiKey = process.env.GEMINI_API_KEY

  if (!apiKey) {
    return Response.json({ error: 'Gemini API key not configured' })
  }

  try {
    const res = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{
            role: 'user',
            parts: [{ text: `You are a helpful unit conversion expert. Answer this clearly: ${question}` }]
          }],
          generationConfig: {
            temperature: 0.7,
            maxOutputTokens: 500
          }
        })
      }
    )
    const data = await res.json()
    console.log('Gemini response:', JSON.stringify(data))
    
    if (data.error) {
      return Response.json({ error: data.error.message })
    }
    
    const answer = data.candidates?.[0]?.content?.parts?.[0]?.text
    if (!answer) {
      return Response.json({ error: 'No response from Gemini. Check your API key.' })
    }
    return Response.json({ answer })
  } catch (e) {
    return Response.json({ error: 'Gemini API error: ' + e.message })
  }
}
