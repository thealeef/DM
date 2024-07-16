import json
import datetime
from flask import Flask

# Este arquivo é o backend

# Lendo arquivo JSON
with open(r"Base.json") as arquivo:
    dados = json.load(arquivo)

try:
    # Formatando data de nascimento para Brasil
    nascimento = dados["funcionarios"]["0"]["nascimento"]

    # nascimentoFormatado = datetime.datetime.strptime(nascimento, "%Y-%m-%d").strftime("%d/%m/%Y")
    nascimentoFormatado = datetime.datetime.strptime(nascimento, "%d-%m-%Y").strftime(
        "%d/%m/%Y"
    )
except:
    print("Erro no formato da DATA!")

# Gravando dados no JSON
