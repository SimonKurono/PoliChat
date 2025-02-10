# test_main.py
from fastapi.testclient import TestClient
from main import app  # Make sure your main.py defines 'app'

client = TestClient(app)

def test_read_root():
    response = client.get("/")
    assert response.status_code == 200
    assert response.json() == {"message": "Hello, World!"}
