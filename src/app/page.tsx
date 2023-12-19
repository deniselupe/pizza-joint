"use client";

import Link from "next/link";
import { useState } from "react";
import { Pizza } from "@/types/pizza";

export default function Home() {
  const [pizza, setPizza] = useState<Pizza>({ base: "", toppings: [] });

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
    <div className="home container">
      <h2>Welcome to Pizza Joint</h2>
      <Link href="/base">
        <button type="button">Create Your Pizza</button>
      </Link>
    </div>
  );
}
