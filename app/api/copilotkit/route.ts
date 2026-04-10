import {
    CopilotRuntime,
    GoogleGenerativeAIAdapter,
    OpenAIAdapter,
    copilotRuntimeNextJSAppRouterEndpoint
} from '@copilotkit/runtime';
import { NextRequest } from 'next/server';
import OpenAI from 'openai'; // Import the standard OpenAI library
const delay = (ms: number) => new Promise(res => setTimeout(res, ms));
// We use the Gemini Adapter for the 2026 "Flash" model
const geminiServiceAdapter = new GoogleGenerativeAIAdapter({
    model: 'gemini-1.5-flash-8b'
});

// Initialize the OpenAI client
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

// Use the OpenAIAdapter
const openAIServiceAdapter = new OpenAIAdapter({
    openai,
    model: 'gpt-4o', // or 'gpt-4-turbo', 'gpt-3.5-turbo', etc.
});

const runtime = new CopilotRuntime();

export const POST = async (req: NextRequest) => {

    // get query parameter "adapter" to determine which adapter to use
    const { searchParams } = new URL(req.url);
    const adapterType = searchParams.get('adapter');
    console.log(adapterType, 'adapterType')
    let serviceAdapter;
    if (adapterType === 'gemini') {
        serviceAdapter = geminiServiceAdapter;
    } else if (adapterType === 'openai') {
        serviceAdapter = openAIServiceAdapter;
    }
    const { handleRequest } = copilotRuntimeNextJSAppRouterEndpoint({
        runtime,
        serviceAdapter,
        endpoint: '/api/copilotkit',
    });

    try {
        return await handleRequest(req);
    } catch (error: any) {
        if (error.status === 429) {
            console.log("Rate limit hit, retrying in 2 seconds...");
            await delay(2000);
            return await handleRequest(req);
        }
        throw error;
    }

};