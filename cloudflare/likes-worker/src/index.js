// 匿名点赞计数 API（Cloudflare Workers + KV，免费额度 10 万请求/天）
// GET  /api/like/<id>    → { count: n }
// POST /api/like/<id>   → 计数 +1，返回 { count: n }
// POST /api/unlike/<id> → 计数 -1（不低于 0），返回 { count: n }

function json(obj, cors) {
  return new Response(JSON.stringify(obj), {
    headers: { 'Content-Type': 'application/json', ...cors },
  });
}

export default {
  async fetch(request, env) {
    const cors = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    };

    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: cors });
    }

    const m = new URL(request.url).pathname.match(/^\/api\/(un)?like\/([\w-]+)$/);
    if (!m) {
      return json({ error: 'not found' }, cors, 404);
    }

    const unlike = m[1] === 'un';
    const id = m[2];

    try {
      const current = parseInt((await env.LIKES.get(id)) || '0', 10) || 0;
      const next = Math.max(0, unlike ? current - 1 : current + 1);
      await env.LIKES.put(id, String(next));
      return json({ count: next }, cors);
    } catch (e) {
      return json({ error: 'storage failed' }, cors, 500);
    }
  },
};
