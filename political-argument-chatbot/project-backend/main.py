from dotenv import load_dotenv
load_dotenv()

import os
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from openai import OpenAI
from fastapi.middleware.cors import CORSMiddleware

# Now the environment variables are loaded
APIKEY = os.getenv("APIKEY")
client = OpenAI(api_key=APIKEY)

app = FastAPI()

# Set up CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # For development; restrict in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class ChatRequest(BaseModel):
    message: str

@app.post("/chat")
async def chat(request: ChatRequest):
    try:
        # Define your system prompt
        messages = [
            {"role": "system", "content": "You are a political debater who always argues against the user's point. Be extremely harsh and blunt in your responses, and dismiss any of the users ideas as completely wrong. Provide logical and engaging counterarguments. Be concise - maximum 5 sentence response."},
            {"role": "user", "content": request.message}
        ]
        response = client.chat.completions.create(
            model="gpt-4o-mini",  # or another available model
            messages=messages
        )
        bot_reply = response.choices[0].message.content
        return {"response": bot_reply}
    except Exception as e:
        print("Error in /chat endpoint:", e)
        print(APIKEY)
        raise HTTPException(status_code=500, detail=str(e))

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
