export async function onRequest(context) {
  const { request, env } = context;

  if (request.method !== 'POST') {
    return new Response('Method Not Allowed', {
      status: 405,
      headers: { Allow: 'POST' }
    });
  }

  if (!env.QUOTE_WEBHOOK_URL || !env.QUOTE_WEBHOOK_AUTH) {
    return new Response('Quote service is not configured.', { status: 503 });
  }

  try {
    const upstream = await fetch(env.QUOTE_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: env.QUOTE_WEBHOOK_AUTH
      },
      body: request.body
    });

    return new Response(null, { status: upstream.status });
  } catch {
    return new Response('Quote service is temporarily unavailable.', { status: 502 });
  }
}
