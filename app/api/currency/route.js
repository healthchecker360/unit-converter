export async function GET(request) {
  const { searchParams } = new URL(request.url)
  const from = searchParams.get('from')
  const to = searchParams.get('to')
  const amount = searchParams.get('amount')
  const apiKey = process.env.EXCHANGE_RATE_API_KEY
  try {
    const res = await fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/pair/${from}/${to}/${amount}`)
    const data = await res.json()
    if (data.result === 'success') return Response.json({ result: data.conversion_result.toFixed(4) })
    return Response.json({ error: 'Conversion failed' })
  } catch { return Response.json({ error: 'API error' }) }
}
