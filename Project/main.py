from fastapi import FastAPI
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles   # Used for serving static files
import uvicorn


app = FastAPI()

# Mount the static directory
app.mount("/public", StaticFiles(directory="public"), name="public")


@app.get("/", response_class=HTMLResponse)
def get_html() -> HTMLResponse:
    with open("index.html") as html:
        return HTMLResponse(content=html.read())
    
if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=6543)