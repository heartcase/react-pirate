from flask import Flask, request
from flask_restful import Resource, Api


class GreetingRes(Resource):
    def get(self):
        return {'message': 'hello'}


class Login(Resource):
    def post(self):
        data = request.json.get('data')
        username = data.get('username')
        password = data.get('password')
        token = data.get('token')
        if (token == 'passport') or \
                (username == 'admin' and password == 'qwer1234'):
            return {'token': 'passport', 'username': username}, 200
        else:
            return {}, 401


app = Flask(__name__)
api = Api(app)
api.add_resource(GreetingRes, '/greeting')
api.add_resource(Login, '/login')

if __name__ == '__main__':
    app.run(port=3000, debug=True)
