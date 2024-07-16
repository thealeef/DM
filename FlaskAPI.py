from flask import Flask, jsonify, request
import Script_v0_0

app = Flask(__name__)


# Rota para listar todos os funcionários (GET)
@app.route("/funcionarios", methods=["GET"])
def chamaFuncionarios():
    try:
        return jsonify(Script_v0_0.dados)
    except:
        return jsonify({"message": "Erro ao fazer request.", "erro": 404}), 404


if __name__ == "__main__":
    # debug=True permite que erros do Python apareçam na página da web.
    app.run(debug=True)
