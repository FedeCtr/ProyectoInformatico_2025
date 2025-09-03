import json

user = '{"name": "Ana", "id" : "8", "points": [10, 20, 30, 40], "register": "2025-08-21"}'

objeto = json.loads(user) # equivalente a JSON.parse , pero no tiene reviver

print(objeto) # convierte a diccionario
print(objeto["name"])

# post-procesamiento 
from datetime import datetime

objeto["register"] = datetime.fromisoformat(objeto["register"])
print(objeto)