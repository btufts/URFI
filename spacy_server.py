import spacy
from spacy import displacy
import warnings
warnings.filterwarnings("ignore")
nlp = spacy.load('en_core_web_sm')
# displacy.render(doc, jupyter = True, style = "ent")
warnings.filterwarnings("default")

import flask
from flask import request
from flask_cors import CORS
import json

app = flask.Flask(__name__)
cors = CORS(app)
app.config["DEBUG"] = True

@app.route('/nlp', methods=['POST'])
def home():
    if not request.json or not 'query' in request.json:
      return
    print(request.json['query'])
    doc = nlp(request.json['query'])
    exDict = dict()
    for tuple_pair in doc:
      if not exDict.get(tuple_pair.pos_):
        exDict[tuple_pair.pos_] = []
      exDict[tuple_pair.pos_].append(tuple_pair.text)
    print(exDict)
    print([(w.text, w.pos_) for w in doc])
    return json.dumps(exDict)

app.run()
