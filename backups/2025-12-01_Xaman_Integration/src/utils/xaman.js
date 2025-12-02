import { XAMAN_API_ENDPOINT, TOKEN_CURRENCY_CODE, ISSUER_ADDRESS } from '../config';
import { Client } from 'xrpl';

const apiKey = import.meta.env.VITE_XAMAN_API_KEY;
const apiSecret = import.meta.env.VITE_XAMAN_API_SECRET;

export const createSignInPayload = async () => {
    if (!apiKey || !apiSecret) {
        throw new Error("Xaman API Credentials missing");
    }

    try {
        const response = await fetch(`${XAMAN_API_ENDPOINT}/payload`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-API-Key': apiKey,
                'X-API-Secret': apiSecret
            },
            body: JSON.stringify({
                txjson: {
                    TransactionType: 'SignIn'
                },
                options: {
                    submit: true,
                    expire: 5 // 5 minutes
                }
            })
        });

        if (!response.ok) {
            throw new Error(`Xaman API Error: ${response.statusText}`);
        }

        return await response.json();
    } catch (error) {
        console.error("Error creating payload:", error);
        throw error;
    }
};

export const getPayloadStatus = async (uuid) => {
    try {
        const response = await fetch(`${XAMAN_API_ENDPOINT}/payload/${uuid}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'X-API-Key': apiKey,
                'X-API-Secret': apiSecret
            }
        });

        if (!response.ok) {
            throw new Error(`Xaman API Error: ${response.statusText}`);
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
