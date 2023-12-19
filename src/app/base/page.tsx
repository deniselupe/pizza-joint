"use client";

import Link from "next/link";
import { usePizza } from "@/contexts/PizzaContext";

export default function Base() {
    const { pizza, addBase } = usePizza();
    const bases = ["Classic", "Thin & Crispy", "Thick Crust"];

    return (
        <div className="base container">
            <h3>Step 1: Choose Your Base</h3>
            <ul>
                {
                    bases.map((base) => {
                        let spanClass = "";

                        if (!!pizza.base && (pizza.base === base)) {
                            spanClass = "active";
                        }

                        return (
                            <li key={base} onClick={() => addBase(base)}>
                                <span className={spanClass}>{base}</span>
                            </li>
                        )
                    })
                }
            </ul>
            {
                !!pizza.base 
                && 
                <div className="next">
                    <Link href="/toppings">
                        <button>Next</button>
                    </Link>
                </div>
            }
        </div>
    );
}
