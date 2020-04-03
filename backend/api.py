from flask import Flask

app = Flask(__name__)

@app.route('/api/hello')
def hello():
    return {'message': 'Hello'}

def main():
    return hello()

if __name__ == "__main__":
    main()