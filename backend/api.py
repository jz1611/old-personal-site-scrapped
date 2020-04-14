from flask import Flask, request, jsonify
import json

app = Flask(__name__)

@app.route('/api/blog/recent', methods = ['GET'])
def recent():
    if request.method == 'GET':
        f = open("posts.json", "r")
        post = json.loads(f.read())
        f.close()

        post_count = 0
        if len(post) > 5:
            post_count = 5
        else:
            post_count = len(post)

        recent_posts = []
        for i in range(0, post_count):
            recent_posts.insert(0, post[str(i)])

        return jsonify(recent_posts)