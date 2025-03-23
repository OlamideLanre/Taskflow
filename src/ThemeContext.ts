import { createContext } from "react";
// import React from "react"
export const ThemeContext= createContext({  
  filter: "All",
  setFilter: (category: string) => {},
  category:"",
  setCategory:()=>[]

});
export const CategoryContext= createContext("")
export function customDate() {
    const today = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  return today
}
