import React, { useState } from "react";
import  {multiply} from 'mathjs'
import "./styles/Home.css";
import Swal from 'sweetalert2'

function Home() {
  const [state, setState] = useState({
    matrixSecret: {
      dimension: "",
      password: "",
    },
    message: "",
});
const multiplyMatrixs = (e) => {
    try {
    e.preventDefault();
    const dimension = parseInt(state.matrixSecret.dimension);
    let secret = state.matrixSecret.password.split("");
    secret = secret.map(e=>parseInt(e));
    const matrixA = [];
    while (secret.length) matrixA.push(secret.splice(0, dimension));
    const message = state.message.toLowerCase().split('');
    const arrayMessage = [];
    message.forEach((letter) => {
      var index = 0;
      var i = letter.charCodeAt(index);
      arrayMessage.push(i);
    });
    const matrixB = [];
    while (arrayMessage.length) matrixB.push(arrayMessage.splice(0,dimension*2));

    console.log(state);
    console.log(matrixA);
    console.log(matrixB);

    console.log(multiply(matrixA, matrixB));

        Swal.fire('Nice', `${multiply(matrixA, matrixB)}`, 'Succes')
    } catch (error ) {
        throw new Error(
            Swal.fire('Oops...', `No alcancé a terminar el parcial`, 'error')
        )
    }



    /*
    Output: 65
*/
  };

  function createMatrix(N, M) {
    var matrix = new Array(N); // Array with initial size of N, not fixed!

    for (var i = 0; i < N; ++i) {
      matrix[i] = new Array(M);
    }

    return matrix;
  }

  function setValues(e, matrix) {
    switch (matrix) {
      case "password":
        console.log(e);
        setState({
          ...state,
          matrixSecret: {
            ...state.matrixSecret,
            [e.target.name]: e.target.value,
          },
        });
        break;
      case "message":
        console.log(e);

        setState({
          ...state,
          [e.target.name]: e.target.value,
        });
        break;
      default:
        break;
    }
  }
  return (
    <>
      <div className="container mx-auto">
        <div className="row justify-content-center">
          <h1 className="text-center">Cifro Uniminuto</h1>
          <h2 className="h2"></h2>
        </div>
        <form onSubmit={multiplyMatrixs} className="row justify-content-center">
          <div className="inputs-container col-6 text-center">
            <h2 className="h2">Clave</h2>
            <span>
              <label htmlFor="height">Password</label>
              <br />
              <input
                type="number"
                name="password"
                onChange={(e) => setValues(e, "password")}
              />
            </span>
            <span>
              <label htmlFor="dimension">Matrix Dimension</label>
              <br />
              <input
                type="number"
                name="dimension"
                onChange={(e) => setValues(e, "password")}
              />
            </span>
          </div>
          <div className="inputs-container col-6 text-center">
            <h2 className="h2">Mensaje</h2>
            <input
              type="text"
              name="message"
              onChange={(e) => setValues(e, "message")}
            />
          </div>
          <input type="submit" className="btn btn-primary" />
        </form>
      </div>
    </>
  );
}

export default Home;
