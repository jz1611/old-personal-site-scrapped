from flask import Flask, request, jsonify
import json

app = Flask(__name__)

@app.route('/api/blog/recent/<amount>', methods = ['GET'])
def recent(amount):
    '''
    Returns the most recent blog posts for use.
    '''
    if request.method == 'GET':
        amount = int(amount)
        f = open("posts.json", "r")
        posts = json.loads(f.read())
        f.close()

        post_count = 0
        if len(posts) > amount:
            post_count = amount
        else:
            post_count = len(posts)

        recent_posts = []
        for i in range(1, post_count + 1):
            recent_posts.append(posts[str(len(posts) - i)])

        return jsonify(recent_posts)

@app.route('/api/blog/post/<id>', methods = ['GET'])
def post(id):
    '''
    Returns blog post with given ID.
    '''
    if request.method == 'GET':
        f = open("posts.json", "r")
        posts = json.loads(f.read())
        f.close()

        try:
            info = posts[id]
            return jsonify(info)
        except:
            return {"exists": False}

@app.route('/api/blog/totalPosts', methods = ['GET'])
def totalPosts():
    '''
    Returns total number of blog posts.
    '''
    if request.method == 'GET':
        f = open("posts.json", "r")
        posts = json.loads(f.read())
        f.close()

        return jsonify({'postCount': len(posts)})