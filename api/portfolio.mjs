export default async function handler(request, response) {
  const apiUrl = 'https://nnoah29-backend.vercel.app/api/portfolio';
  try {
    const res = await fetch(apiUrl);
    if (!res.ok) throw new Error(`Backend returned status ${res.status}`);
    const data = await res.json();
    response.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate=86400');
    return response.status(200).json(data);
  } catch (error) {
    console.error('Proxy error:', error);
    return response.status(500).json({ error: error.message });
  }
}
