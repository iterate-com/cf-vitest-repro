// import { OpenAI } from "openai";

export default {
    async fetch(request: Request) {
        // new OpenAI({
        //     apiKey: "sk-proj-..."
        // })
         return new Response("Hello, World!");
    }
}