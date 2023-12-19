"use client";

import { createContext, useContext, useState } from "react";
import { PizzaType, PizzaProviderProps, PizzaContextType } from "@/types/pizza";

const PizzaContext = createContext({} as PizzaContextType);

export function PizzaProvider({ children }: PizzaProviderProps) {
    const [pizza, setPizza] = useState<PizzaType>({ base: "", toppings: [] });

    const addBase = (base: string) => {
        setPizza({ ...pizza, base });
    };

    const addTopping = (topping: string) => {
        let newToppings;

        if (!pizza.toppings.includes(topping)) {
            newToppings = [...pizza.toppings, topping];
        } else {
            newToppings = pizza.toppings.filter((item) => item !== topping);
        }

        setPizza({ ...pizza, toppings: newToppings });
    };

    return (
        <PizzaContext.Provider value={{ pizza, addBase, addTopping }}>
            {children}
        </PizzaContext.Provider>
    );
}

export const usePizza = () => useContext(PizzaContext);