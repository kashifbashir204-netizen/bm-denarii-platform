import { TOKEN_CURRENCY_CODE, ISSUER_ADDRESS } from '../config';
import { Client } from 'xrpl';

const getBaseUrl = () => {
    // In development, we might ideally need to point to localhost:8888 if using netlify dev, 
    // but relative path '/.netlify/functions/xaman' works well if served correctly or deployed.
    return '/.netlify/functions/xaman';
};

export const createSignInPayload = async () => {
    // No secrets needed here!
    try {
        const response = await fetch(getBaseUrl(), {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                txjson: { TransactionType: 'SignIn' },
                options: { submit: true, expire: 5 }
            })
        });

        if (!response.ok) {
            const err = await response.json();
            throw new Error(err.error || `Server Error: ${response.statusText}`);
        }

        return await response.json();
    } catch (error) {
        console.error("Error creating payload:", error);
        throw error;
    }
};

export const getPayloadStatus = async (uuid) => {
    try {
        const response = await fetch(`${getBaseUrl()}?uuid=${uuid}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        });

        if (!response.ok) {
            const err = await response.json();
            throw new Error(err.error || `Server Error: ${response.statusText}`);
        }

        return await response.json();
    } catch (error) {
        console.error("Error checking payload status:", error);
        throw error;
    }
};

export const checkDfiBalance = async (accountAddress) => {
    const client = new Client('wss://xrplcluster.com');
    try {
        await client.connect();
        const response = await client.request({
            command: 'account_lines',
            account: accountAddress,
            peer: ISSUER_ADDRESS
        });

        const lines = response.result.lines;
        const dfiLine = lines.find(line => line.currency === TOKEN_CURRENCY_CODE);

        return dfiLine ? dfiLine.balance : '0';
    } catch (error) {
        console.error("Error fetching balance:", error);
        return '0';
    } finally {
        await client.disconnect();
    }
};
