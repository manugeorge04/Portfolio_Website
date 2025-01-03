# Personal Website with Interactive AI Chatbot  

This repository contains the source code for a personal website built using **Next.js**. The website features an **AI-powered chatbot** connected to a backend built with **Django** and hosted on AWS EC2 with **Nginx**. The chatbot is capable of answering queries related to professional experience, skills, and personality traits by leveraging **LangChain RAG** and **Agentic AI**. Chat logs are stored securely on **Azure** for future reference.
You can view the deployed personal website and interact with the AI chatbot at the following link:  
[https://manuvimal.vercel.app/](https://manuvimal.vercel.app/)  

## Features

- **Interactive Chatbot**: Engage with an AI chatbot that can remember context and uses LangChain RAG and Agentic AI to answer queries.
- **Chat Log Storage**: Stores chat logs in Azure using APIs defined in the Next.js backend.
- **Seamless Deployment**:
  - Frontend hosted on **Vercel**.
  - Backend hosted on **AWS EC2** with **Nginx**.
---

## Project Structure

### Frontend (Next.js)
- Hosted on **Vercel**.
- Includes:
  - A landing page introducing the website.
  - Chat interface to interact with the AI chatbot.
  - API endpoints for managing chat logs.

### Backend (Django)
- Hosted on **AWS EC2** with **Nginx**.
- Handles:
  - Chatbot functionality using LangChain RAG and Agentic AI.
  - Memory persistence for user sessions.
  - Integration with ChromaDB for vector storage.

### Storage
- **Chat Logs**: Stored on **Azure** using APIs defined in the Next.js backend.

---

## Installation and Setup  

### Prerequisites
1. **Frontend**: Node.js 16+  
2. **Backend**: Python 3.8+  
3. **Azure Storage Account**  
4. **AWS EC2 Instance** with Nginx configured.  

### Frontend Setup  

1. Clone the repository:
   ```bash
   git clone https://github.com/manugeorge04/Portfolio_Website.git
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure environment variables:
   Create a `.env.local` file in the `frontend` folder with the following content:
   ```
   AZURE_STORAGE_KEY=your_azure_storage_key
   AZURE_STORAGE_ACCOUNT=your_azure_storage_account
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Deploy to Vercel:
   - Follow [Vercel's deployment guide](https://vercel.com/docs/concepts/deployments/overview) to deploy the frontend.

### Backend Setup  

The backend for this project is based on the **PersonaAI** repository. Please refer to the [PersonaAI GitHub Repository](https://github.com/manugeorge04/PersonaAI) for detailed setup instructions, including environment configuration and dependencies.

Host the backend on AWS EC2 with **Nginx** as a reverse proxy.

By integrating the PersonaAI backend, you ensure a seamless AI chatbot experience on your website.

---

## Deployment  

### Frontend
- Deploy the Next.js app to **Vercel** using your Vercel account.

### Backend
- Deploy the Django app to **AWS EC2**.
- Use **Nginx** to proxy requests to the Django server.

---

## Usage

1. Navigate to the deployed website.
2. Interact with the chatbot via the chat interface.
3. Chat logs are automatically stored in **Azure** for analysis and debugging.

---

## Technologies Used

- **Frontend**: Next.js, TailwindCSS
- **Backend**: Django, LangChain, ChromaDB
- **Hosting**: Vercel (Frontend), AWS EC2 + Nginx (Backend)
- **Storage**: Azure, ChromaDB
- **AI Models**: OpenAI (GPT-based LLM)
