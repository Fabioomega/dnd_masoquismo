from flask import Flask, render_template, send_from_directory
import json
import os

app = Flask(__name__, static_url_path='/static')

@app.route('/racas')
def racas():
    return render_template('index.html')

@app.route('/source/<path:filename>')
def sources(filename):
    return send_from_directory(os.path.join(app.root_path, 'source'), filename)

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=2707)