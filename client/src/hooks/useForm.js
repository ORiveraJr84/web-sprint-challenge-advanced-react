// write your custom hook here to control your checkout form
import { useState } from "react";

export const useForm = (value) => {
  const [something, setSomething] = useState(value);

  return [something, setSomething];
};
