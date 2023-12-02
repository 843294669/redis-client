export default {
    redis: {
        help: "/redis/eval?command=HELP ",
        sendCommand: "/redis/eval?command="
    },
    /** gpt api 本身并不跨域，后端似乎已处理 */
    chat: {
        completions: "https://api.openai.com/v1/chat/completions"
    }
}