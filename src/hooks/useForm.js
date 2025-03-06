import { useState } from "react";
import { validateNumber } from "../utils/validateNumber";

export const useForm = (initialState = {}) => {
  const [formState, setFormState] = useState(initialState);

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    const number = validateNumber(value);
    if (number) {
      setFormState({ ...formState, [name]: value });
    }
  };

  const onResetForm = () => {
    setFormState(initialState);
  };

  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm,
  };
};
