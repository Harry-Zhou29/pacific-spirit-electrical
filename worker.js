async function handleQuote(request, env) {
  if (request.method !== 'POST') {
    return new Response('Method Not Allowed', {
      status: 405,
      headers: { Allow: 'POST' }
    });
  }

  if (!env.QUOTE_WEBHOOK_URL) {
    return new Response('Quote service is not configured.', { status: 503 });
  }

  try {
    const headers = { 'Content-Type': 'application/json' };
    if (env.QUOTE_WEBHOOK_AUTH) headers.Authorization = env.QUOTE_WEBHOOK_AUTH;

    const upstream = await fetch(env.QUOTE_WEBHOOK_URL, {
      method: 'POST',
      headers,
      body: request.body
    });

    return new Response(null, { status: upstream.status });
  } catch {
    return new Response('Quote service is temporarily unavailable.', { status: 502 });
  }
}

export default {
  fetch(request, env) {
    const { pathname } = new URL(request.url);
    if (pathname === '/api/quote' || pathname === '/api/quote/') {
      return handleQuote(request, env);
    }

    return env.ASSETS.fetch(request);
  }
};
