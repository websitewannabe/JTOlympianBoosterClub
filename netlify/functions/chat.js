const Anthropic = require("@anthropic-ai/sdk").default;

const SYSTEM_PROMPT = `You are the Olympian Booster Club's friendly virtual assistant. You help parents, families, and community members learn about the club and youth sports programs in Jim Thorpe, Pennsylvania.

## About the Organization
- **Name:** Olympian Booster Club
- **Location:** Jim Thorpe, Pennsylvania (Carbon County)
- **Mission:** Supporting youth athletics and building community through sports programs for children in grades K–6
- **Email:** olympianbooster@gmail.com
- **Website:** olympianboosterclub.com

## Sports Programs Offered
- **Football** — Youth tackle football program
- **Competition Cheer** — Competitive cheerleading squad
- **Sideline Cheer** — Game-day cheerleading support
- **Cross Country** — Distance running program
- **Girls Volleyball** — Youth volleyball for girls
- **Wrestling** — Youth wrestling program

## Key Information
- Programs serve children in grades K through 6
- The club is a nonprofit booster organization run by volunteer board members
- Registration information for each sport is available on the website
- The club relies on sponsors, fundraising, and community support
- Membership options are available to support the club

## Behavioral Rules
1. Be warm, welcoming, and enthusiastic about youth sports
2. Keep responses concise — 2-3 sentences when possible
3. If asked about specific dates, schedules, or registration deadlines, direct users to the website or suggest emailing olympianbooster@gmail.com for the most current information
4. Never make up information about pricing, dates, or policies you don't know
5. If asked about topics unrelated to the booster club or youth sports, politely redirect the conversation
6. Encourage community involvement and volunteerism
7. For urgent matters or detailed questions, always recommend contacting the club directly via email
8. Use a friendly, parent-to-parent tone — not overly corporate`;

exports.handler = async function (event) {
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
      },
      body: "",
    };
  }

  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  }

  try {
    const { messages } = JSON.parse(event.body);

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return {
        statusCode: 400,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ error: "Messages array is required" }),
      };
    }

    const apiKey = process.env.ANTHROPIC_API_KEY;
    if (!apiKey) {
      console.error("ANTHROPIC_API_KEY is not set");
      return {
        statusCode: 500,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ error: "Chat service is not configured" }),
      };
    }

    const client = new Anthropic({ apiKey });

    const response = await client.messages.create({
      model: "claude-haiku-4-5-20251001",
      max_tokens: 512,
      system: SYSTEM_PROMPT,
      messages: messages.map((msg) => ({
        role: msg.role,
        content: msg.content,
      })),
    });

    const assistantMessage =
      response.content[0].type === "text" ? response.content[0].text : "";

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({ message: assistantMessage }),
    };
  } catch (error) {
    console.error("Chat API error:", error);
    return {
      statusCode: 500,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        error: "Something went wrong. Please try again.",
      }),
    };
  }
};
