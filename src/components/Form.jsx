import { useState } from "react";
import { useForm } from "../hooks/useForm";

export const Form = () => {
  const [numbers, setNumbers] = useState([1, 2, 3]);
  const [found, setFound] = useState([]);
  const { formState, onInputChange, onResetForm, number } = useForm({
    number: "",
  });

  const target = 3;

  const handleNumbers = () => {
    console.log(number);
    const max = Math.max(...numbers);
    console.log(max);
    if (number < max) {
      alert(
        `No puede ingresar un número menor a los que existen en el arreglo`
      );
      return;
    }
    setNumbers([...numbers, number]);
    onResetForm();
  };

  const searchTarget = () => {
    const search = binarySearch();
    console.log(`search: ${search}`);
    console.log(numbers);
    if (search == -1) {
      alert(`No se encontró el target :/`);
    } else {
      alert(`Se encontró el target`);
      setFound([...found, { [target]: numbers }]);
    }

    console.log(`limpiando datos`);
    onResetForm();
    setNumbers([]);
  };

  const binarySearch = () => {
    console.log(`Inside search function, target: ${target}`);
    if (numbers.length < 1) {
      alert(`Ingrese un número`);
      return;
    }

    let left = 0;
    let right = numbers.length - 1;

    while (left <= right) {
      console.log(`Dentro del ciclo right: ${right}, left: ${left}`);
      let middle = Math.floor((left + right) / 2);
      if (numbers[middle] == target) {
        return middle;
      } else if (numbers[middle] < target) {
        left = middle + 1;
      } else {
        right = middle - 1;
      }
    }
    return -1;

    console.log(`left: ${left}, right: ${right}, middle: ${middle}`);
  };

  return (
    <>
      <input
        type="text"
        placeholder="Ingrese números"
        name="number"
        value={number}
        onChange={onInputChange}
      />
      <button
        type="button"
        className="margin-left"
        onClick={() => handleNumbers()}
      >
        Agregar
      </button>

      <button
        type="button"
        className="margin-left"
        onClick={() => searchTarget()}
      >
        Calcular búsqueda
      </button>

      <hr />

      <p>{JSON.stringify(numbers)}</p>
      <p>{JSON.stringify(found)}</p>
    </>
  );
};
