import { useState } from "react";
import { useForm } from "../hooks/useForm";

export const Form = () => {
  const [numbers, setNumbers] = useState([]);
  const { formState, onInputChange, onResetForm, number } = useForm({
    number: "",
  });

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

  return (
    <>
      <input
        type="text"
        placeholder="Ingrese números"
        name="number"
        value={number}
        onChange={onInputChange}
      />
      <button type="button" onClick={() => handleNumbers()}>
        Agregar
      </button>

      <hr />

      <p>{JSON.stringify(numbers)}</p>
    </>
  );
};
