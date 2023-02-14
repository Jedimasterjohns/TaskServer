COMMUNICATION CONTRACT

How to REQUEST data from this microservice for Python applications:
1. import requests
2. define a function that calls requests.get() with the param being the http address of the locally running microservice

ex:
    def get_tasks_from_server():
        response = requests.get('http://localhost:3000/tasks')
        if response.status_code == 200:
            tasks = response.json().get('tasks')
            return tasks
        else:
            raise Exception('Request to Task Server failed with status code: {}'.format(response.status_code))
 
How to RECEIVE data from this microservice for Python applications:
1. in the same function mentioned above return the tasks by calling response.json().get('tasks')
2. call this function in the portion of the app where you want to load data


UML sequence diagram link: https://drive.google.com/file/d/1TOHqvWxcJsuz5kM8uS62nrVQfGqOf4sm/view?usp=sharing