const { getAIResponse } = require("./config/ai.js");

(async () => {
    try {
        const res = await require("./config/ai.js").getAIResponse("hello", "You are an assistant. Always output JSON like {\"status\":\"ok\"}");
        console.log("RESPONSE:", res);
    } catch (e) {
        console.error("ERROR:", e);
    }
})();
