print("ola pessoal")
pi=3.1415
r=float(input('coloque o valor do raio'))
d=2*r
a=pi*r**2
print(f"diametro: {d:.2f} m".format(d))
print(f'comprimento: {c:.2f}m'.format(c))

from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/calcular', methods=['POST'])
def calcular_circunferencia():
    raio = request.json['raio']
    circunferencia = 2 * 3.14 * float(raio)
    return jsonify({'circunferencia': circunferencia})

if __name__ == '__main__':
    app.run(debug=True)