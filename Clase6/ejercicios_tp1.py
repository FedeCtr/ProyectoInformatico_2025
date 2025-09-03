data = { 
    "users": [ 
        {"id":1, "name": "Ana", "info": { "theme": "light", "color": "blue", "level": 4 } },
        {"id":2, "name": "Juan", "info": { "theme": "dark", "category": 2  , "level": 1} }, 
        {"id":3, "name": "Pedro", "info": { "theme": "dark", "level": 1} },
        {"id":4, "name": "Mario", "info": { "color": "red"  , "level": 1} }
    ] 
}

# # Mostrar nombres
# print("a. Mostrar nombres de todos los usuarios")
# for user in data["users"]:
#     print(user["name"])

# nombres = [user["name"] for user in data["users"]]
# print(nombres)

# # Filtrar usuarios con id < 10
# filtrada = []
# listaUsuarios = data["users"]
# for user in listaUsuarios:
#     if user["id"] < 3:
#         filtrada.append(user)
# print(filtrada)
# filtrada2 = [user for user in data["users"] if user["id"] < 3]
# print(filtrada2)

# # Mapeo
# mapeada = []
# for user in data["users"]:
#     cadena = f'Nombre: {user["name"]} - id: {user["id"]}'
#     mapeada.append(cadena)
# print(mapeada)

# # Filtrado 
# def filtrarPorNivel(data, nivel):
#     filtradaNivel = []
#     for user in data["users"]:
#         if user["info"]["level"] == nivel:
#             filtradaNivel.append(user)
#     return filtradaNivel

# nivel1 = filtrarPorNivel(data, 1)
# print(nivel1)

# # Filtrar usuarios con info mayor o igual a 3 elementos
# filtradaInfo = []
# for user in data["users"]:
#     if len(user["info"]) >= 3:
#         filtradaInfo.append(user)

# print(filtradaInfo)
def buscarPorId(data, id):
    i = 0
    encontrado = False
    while i < len(data["users"]) and not encontrado:
        if data["users"][i]["id"] == id:
            encontrado = True
        else:
            i += 1
    if encontrado:
        return data["users"][i]
    else:
        return None

def clavesNumericas(data, id, limite):
    # buscar si hay un usuario con ese id
    usuario = buscarPorId(data, id)
    if usuario is not None:
        infoUsuario = usuario["info"]
        listaClaves = []
        for clave, valor in infoUsuario.items():
            if isinstance(valor, int) and valor < limite:
                listaClaves.append(clave)
        return listaClaves

clavesMenor5 = clavesNumericas(data, 7, 5)
# print(clavesMenor5)

def temaPreferido(data):
    contadorDark = 0
    contadorLight = 0
    for user in data["users"]:
        if "theme" in user["info"].keys():
            temaUsuario = user["info"]["theme"]
            if temaUsuario == "dark":
                contadorDark += 1
            else:
                contadorLight += 1
    if contadorDark > contadorLight:
        return "dark"

    return "light"
    
preferido = temaPreferido(data)
print(preferido)