# PoliChat

**PoliChat** is a React-based chatbot application that enables users to engage in political debates with an AI that always argues the opposing viewpoint. The backend is powered by **FastAPI** and connects to the **OpenAI API** to generate responses. PoliChat also includes text-to-speech functionality, allowing users to speak to the chatbot and hear responses read back in a natural voice.

---

## Features

- **Adversarial Political Debate**  
  The chatbot always takes the opposite side of the user’s argument, providing harsh, blunt, and logically constructed counterarguments. Responses are concise, capped at five sentences.

- **FastAPI Backend**  
  A Python FastAPI server handles requests, communicates with the OpenAI API, and delivers responses to the React frontend.

- **CORS-Enabled API**  
  Configured with `CORSMiddleware` to support cross-origin requests during development.

- **Environment Variable Management**  
  API keys and sensitive information are managed securely with `.env` files using `python-dotenv`.

- **Speech Synthesis (TTS)**  
  The frontend integrates the Web Speech API (`window.speechSynthesis`) to read AI responses aloud, with customizable voice, rate, and pitch.

---

## Tech Stack

- **Frontend:** React, Web Speech API  
- **Backend:** FastAPI (Python), Pydantic, CORSMiddleware  
- **AI:** OpenAI API (`gpt-4o-mini` model)  
- **Utilities:** `dotenv` for environment variables  

---

## Project Structure

- **Backend (`main.py`)**
  - Loads environment variables  
  - Configures FastAPI app with CORS  
  - Defines `/chat` endpoint for handling user messages and returning AI responses  

- **Frontend (`src/utils/speak.js`)**
  - Implements text-to-speech functionality using the Web Speech API  
  - Selects available system voices and configures speech rate and pitch  

---
