import React from 'react'
import { BtnPrimary } from '../BtnPrimary'

export const VarConstLet = () => {
    /*
    const nombre = "Juan";
    let edad = 25;



    console.log(nombre);
    console.log(edad);

    edad = 26

    console.log(edad + " " + nombre)
    */

    return (
        <>
            <h2>Var Const Let</h2>
            <p>Diferencia entre</p>
            <ul>
                <li>
                    <code>var</code>
                </li>
                <li>
                    <code>const</code>
                </li>
                <li>
                    <code>let</code>
                </li>
            </ul>
            <h6>Temas relacionados</h6>
            <ul>
                <li>Fragmet</li>
                <li>Function</li>
            </ul>
            <BtnPrimary 
                url={'https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/const'}
                targ={'_blank'}
                btnTxt={'CONST'}
            />
            <BtnPrimary 
                url={'https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/let'}
                targ={'_blank'}
                btnTxt={'LET'}
            />

            <hr />
        </>

    )
}
