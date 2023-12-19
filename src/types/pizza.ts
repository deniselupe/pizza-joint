export type PizzaType = {
    base: string;
    toppings: string[];
};

export type PizzaProviderProps = {
    children: React.ReactNode;
};

export type PizzaContextType = {
    pizza: PizzaType,
    addBase: (base: string) => void;
    addTopping: (topping: string) => void;
};