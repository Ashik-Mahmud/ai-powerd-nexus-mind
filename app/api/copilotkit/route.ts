import {
    CopilotRuntime,
    GoogleGenerativeAIAdapter,
    copilotRuntimeNextJSAppRouterEndpoint
} from '@copilotkit/runtime';
import { NextRequest } from 'next/server';
const delay = (ms: number) => new Promise(res => setTimeout(res, ms));
// We use the Gemini Adapter for the 2026 "Flash" model
const serviceAdapter = new GoogleGenerativeAIAdapter({
    model: 'gemini-1.5-flash-8b'
});

const runtime = new CopilotRuntime();

export const POST = async (req: NextRequest) => {
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