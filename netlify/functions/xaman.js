
const fetch = require('node-fetch'); // Netlify Functions (Node 18) usually support global fetch, but require might be safer or just use global fetch if Node 18+

exports.handler = async (event, context) => {
    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS'
    };

    if (event.httpMethod === 'OPTIONS') {
        return { statusCode: 200, headers, body: 'OK' };
    }

    const apiKey = process.env.VITE_XAMAN_API_KEY || process.env.XAMAN_API_KEY;
    const apiSecret = process.env.VITE_XAMAN_API_SECRET || process.env.XAMAN_API_SECRET;

    if (!apiKey || !apiSecret) {
        return {
            statusCode: 500,
            headers,
            body: JSON.stringify({ error: "Server Xaman API Credentials not configured" })
        };
    }

    try {
        const path = event.path.replace(/\/\.netlify\/functions\/xaman\/?/, ''); // clean path
        const method = event.httpMethod;

        // Helper to forward request to Xaman
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

        // 1. Create Payload (POST /)
        if (method === 'POST') {
            const body = JSON.parse(event.body);
            // Safety Check: Ensure we only allow specific transaction types if needed, 
            // but for now we'll pass through the payload creation to allow flexibility.
            const result = await callXaman('payload', {
                method: 'POST',
                body: JSON.stringify(body)
            });
            return { statusCode: 200, headers, body: JSON.stringify(result) };
        }

        // 2. Get Payload Status (GET /payload/{uuid})
        // Path handling might be tricky with query params vs slashes. 
        // Let's assume the client sends the UUID in the query string or body for simplicity,
        // OR parses the path.
        // Let's simplify: client sends `?uuid=...` for GET
        if (method === 'GET') {
            const { uuid } = event.queryStringParameters;
            if (uuid) {
                const result = await callXaman(`payload/${uuid}`, { method: 'GET' });
                return { statusCode: 200, headers, body: JSON.stringify(result) };
            }
        }

        return {
            statusCode: 400,
            headers,
            body: JSON.stringify({ error: "Invalid Request" })
        };

    } catch (error) {
        console.error("Xaman Function Error:", error);
        return {
            statusCode: 500,
            headers,
            body: JSON.stringify({ error: error.message })
        };
    }
};
