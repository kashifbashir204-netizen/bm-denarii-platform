
export default async (req, context) => {
    // Handle CORS for preflight requests if needed (though rewrite handles same-origin)
    if (req.method === "OPTIONS") {
        return new Response("OK", {
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "Content-Type",
                "Access-Control-Allow-Methods": "POST, OPTIONS",
            },
        });
    }

    if (req.method !== "POST") {
        return new Response("Method Not Allowed", { status: 405 });
    }

    const apiKey = process.env.VITE_OPENAI_API_KEY || process.env.OPENAI_API_KEY;

    if (!apiKey) {
        return new Response(JSON.stringify({ error: "Server API Key not configured" }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });
    }

    try {
        const body = await req.json();
        const { messages, model } = body;

        const response = await fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${apiKey}`,
            },
            body: JSON.stringify({
                model: model || "gpt-3.5-turbo",
                messages: messages || [],
                max_tokens: 500,
                temperature: 0.7,
            }),
        });

        const data = await response.json();

        return new Response(JSON.stringify(data), {
            status: response.status,
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*", // Allow all for now, or restrict to domain
            },
        });
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });
    }
};
