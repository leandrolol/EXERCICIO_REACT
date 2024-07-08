import { useState } from "react";
import './formulario.css';

const Formulario = () => {
    const [altura, setAltura] = useState('');
    const [peso, setPeso] = useState('');
    const [resultadoIMC, setResultadoIMC] = useState(null);

    const calculoIMC = (e) => {
        e.preventDefault();

        const alturaNum = parseFloat(altura);
        const pesoNum = parseFloat(peso);

        const imc = pesoNum / (alturaNum * alturaNum);

        if (imc <= 16.9) {
            setResultadoIMC(
                <>
                    <p>Seu IMC é {imc.toFixed(2)}</p>
                    <p>Muito abaixo do peso</p>
                </>
            );
        } else if (imc <= 18.4) {
            setResultadoIMC(
                <>
                    <p>Seu IMC é {imc.toFixed(2)}</p>
                    <p>Abaixo do peso</p>
                </>
            );
        } else if (imc <= 24.9) {
            setResultadoIMC(
                <>
                    <p>Seu IMC é {imc.toFixed(2)}</p>
                    <p>Peso Normal</p>
                </>
            );
        } else if (imc <= 29.9) {
            setResultadoIMC(
                <>
                    <p>Seu IMC é {imc.toFixed(2)}</p>
                    <p>Acima do peso</p>
                </>
            );
        } else if (imc <= 34.9) {
            setResultadoIMC(
                <>
                    <p>Seu IMC é {imc.toFixed(2)}</p>
                    <p>Obesidade grau 1</p>
                </>
            );
        } else if (imc <= 40) {
            setResultadoIMC(
                <>
                    <p>Seu IMC é {imc.toFixed(2)}</p>
                    <p>Obesidade grau 2</p>
                </>
            );
        } else {
            setResultadoIMC(
                <>
                    <p>Seu IMC é {imc.toFixed(2)}</p>
                    <p>Obesidade grau 3</p>
                </>
            );
        }
    }

    return (
        <form onSubmit={calculoIMC}>
            <h1>Calculadora de IMC</h1>
            <input type="number" placeholder="Digite a Altura em metros." value={altura} onChange={evento => setAltura(evento.target.value)} />
            <input type="number" placeholder="Digite o Peso em kg" value={peso} onChange={evento => setPeso(evento.target.value)} />
            <button type="submit">Calcular IMC</button>
            {resultadoIMC}
        </form>
    );
}

export default Formulario;