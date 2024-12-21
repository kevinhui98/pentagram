import { NextResponse } from "next/server";
import { put, head } from "@vercel/blob";
import crypto from "crypto";

// const { url } = await put('articles/blob.txt', 'Hello World!', { access: 'public' });

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { text } = body;

        // TODO: Call your Image Generation API here
        // For now, we'll just echo back the text
        const url = new URL(
            "https://kevinhui98--pentagram-model-generate.modal.run"
        );
        url.searchParams.set("prompt", text);
        console.log(url.toString());
        console.log("requesting URL: ", url.toString());
        const response = await fetch(url.toString(), {
            method: "GET",
            headers: {
                "X-API-KEY": process.env.MODAL_AUTH_KEY || "",
                description: text,
                Aceept: "image/jpeg",
            },
        });
        if (!response.ok) {
            const errorText = await response.text();
            console.error("API Response: ", errorText);
            console.error(process.env.MODAL_AUTH_KEY);
            throw new Error(
                `HTTP error! status: ${response.status},message: ${errorText}`
            );
        } else {
            console.log("response ok");
        }
        const imageBuffer = await response.arrayBuffer();
        const filename = `${crypto.randomUUID()}.jpg`;

        const blob = await put(filename, imageBuffer, {
            access: "public",
            contentType: "image/jpeg",
        });
        const blobDetails = await head(blob.url);
        console.log(blob.url);
        return NextResponse.json({
            success: true,
            imageUrl: blob.url,
            description: text,
            meta: blobDetails,
        });
    } catch (error) {
        return NextResponse.json(
            { success: false, error: `Failed to process request ${error}` },
            { status: 500 }
        );
    }
}
