"use client";

import Link from "next/link";
import { usePizza } from "@/contexts/PizzaContext";

export default function Toppings() {
    const { pizza, addTopping } = usePizza();

    let toppings = ["mushrooms", "peppers", "onions", "olives", "extra cheese", "tomatoes"];

    return (
        <div className="toppings container">
            <h3>Step 2: Choose Toppings</h3>
            <ul>
                {
                    toppings.map((topping) => {
                        let spanClass = pizza.toppings.includes(topping) ? "active" : "";

                        return (
                            <li key={topping} onClick={() => addTopping(topping)}>
                                <span className={spanClass}>{topping}</span>
                            </li>
                        )
                    })
                }
            </ul>
            <Link href="/order">
                <button type="button">Order</button>
            </Link>
        </div>
    )
}
