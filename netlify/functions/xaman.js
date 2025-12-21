
export default async (req, context) => {
    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type, X-API-Key, X-API-Secret',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS'
    };

    if (req.method === 'OPTIONS') {
        return new Response("OK", { status: 200, headers });
    }

    const apiKey = process.env.VITE_XAMAN_API_KEY || process.env.XAMAN_API_KEY;
    const apiSecret = process.env.VITE_XAMAN_API_SECRET || process.env.XAMAN_API_SECRET;

    if (!apiKey || !apiSecret) {
        return new Response(JSON.stringify({ error: "Server Xaman API Credentials not configured" }), {
            status: 500,
            headers: { ...headers, 'Content-Type': 'application/json' }
        });
    }

    try {
        // Parse URL to get endpoint
        const url = new URL(req.url);
        // Path will be like /.netlify/functions/xaman/payload -> we want 'payload'
        // or /.netlify/functions/xaman -> maybe base?
        // Let's assume the redirect maps /api/xaman/* -> /.netlify/functions/xaman/*

        // Easier: Just look at the last parts of the path or query params.
        // But wait, my frontend sends query param ?uuid=... for GET.
        // And POST is payload.

        // Helper to forward
        const callXaman = async (endpoint, options = {}) => {
            const response = await fetch(`https://xumm.app/api/v1/platform/${endpoint}`, {
                ...options,
                headers: {
                    ...options.headers,
                    'Content-Type': 'application/json',
                    'X-API-Key': apiKey,
                    'X-API-Secret': apiSecret
                }
            });

            if (!response.ok) {
                const text = await response.text();
                throw new Error(`Xaman API ${response.status}: ${text}`);
            }
            return await response.json();
        };

        if (req.method === 'POST') {
            const body = await req.json();
            const result = await callXaman('payload', {
                method: 'POST',
                body: JSON.stringify(body)
            });
            return new Response(JSON.stringify(result), {
                status: 200,
                headers: { ...headers, 'Content-Type': 'application/json' }
            });
        }

        if (req.method === 'GET') {
            const uuid = url.searchParams.get('uuid');
            if (uuid) {
                const result = await callXaman(`payload/${uuid}`, { method: 'GET' });
                return new Response(JSON.stringify(result), {
                    status: 200,
                    headers: { ...headers, 'Content-Type': 'application/json' }
                });
            }
        }

        return new Response(JSON.stringify({ error: "Invalid Request" }), {
            status: 400,
            headers: { ...headers, 'Content-Type': 'application/json' }
        });

    } catch (error) {
        console.error("Xaman Function Error:", error);
        return new Response(JSON.stringify({ error: error.message }), {
            status: 500,
            headers: { ...headers, 'Content-Type': 'application/json' }
        });
    }
};
