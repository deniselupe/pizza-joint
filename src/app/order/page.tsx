"use client";

import { usePizza } from "@/contexts/PizzaContext";

export default function Order() {
    const { pizza } = usePizza();

    return (
        <div className="container order">
            <h2>Thank you for your order :)</h2>
            <p>You ordered a {pizza.base} pizza with:</p>
            {pizza.toppings.map((topping) => <div key={topping}>{topping}</div>)}
        </div>
    )
}
