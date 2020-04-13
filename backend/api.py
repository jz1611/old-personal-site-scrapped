from flask import Flask
import json

app = Flask(__name__)

@app.route('/api/hello')
def hello():
    return {'message': 'Hello'}

@app.route('/api/blog/recent')
def recent():
    f = open("posts.json", "r")
    post = json.loads(f.read())
    f.close()
    return post[str(len(post) - 1)]
