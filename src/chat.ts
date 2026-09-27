// Style C stub. Wire this from src/index.ts when you add POST /api/chat.
// TODO(student): accept messages, call Ollama or return a documented mock, and surface timeouts.

export type ChatMessage = {
  role: "user" | "assistant"
  content: string
}

export async function replyToChat(_messages: ChatMessage[]): Promise<string> {
  throw new Error("TODO(student): implement /api/chat")
}
