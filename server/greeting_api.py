from flask import Flask
from flask_restful import Resource, Api


class GreetingRes(Resource):
    def get(self):
        return {'message': 'hello'}


app = Flask(__name__)
api = Api(app)
api.add_resource(GreetingRes, '/greeting')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=3000, threaded=True)
