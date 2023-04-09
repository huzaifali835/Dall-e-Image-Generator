import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
    organization: process.env.OPEN_AI_ORGANIZATION_ID,
    apiKey: process.env.OPEN_AI_KEY,
});
const openai = new OpenAIApi(configuration);

export default openai;