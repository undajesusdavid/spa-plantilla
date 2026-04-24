import { Input } from "@src/06-shared/ui/base/input";
import { useState } from "react";
import { set } from "zod/v4";

export const TestComponent = () => {
  const [val, setVal] = useState("Valor por defecto en react state");

 

  return (
    <div>
      {`val =  ${val}`}

      <Input
        error="Este es un error"
        value={val}
        onChange={(e) => setVal(e.target.value)}
        inputSize="large"
        orientation="row"
        leftIcon={<span>👤</span>}
        labelClick={()=> alert("Hola desde el label")}
        leftIconClick={(input) => {
          const nuevo = "Valor nuevo";
          input.value = nuevo;
          setVal(nuevo);
        }}
        rightIconClick={(input) => {
          input.value = "";
          setVal("");
        }}
        rightIcon={<span>✅</span>}
        label="My Label bastante largo"
        type="text"
        required
        placeholder="Ingrese un valor"
      />
    </div>
  );
};
