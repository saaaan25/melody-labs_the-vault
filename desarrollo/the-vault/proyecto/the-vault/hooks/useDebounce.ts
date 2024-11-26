import { busquedaBinaria } from "@/structures/binarysearch";
import { basename } from "path";
import { useEffect, useState } from "react";

function useDebounce<T>(value: T, delay?: number): T {
   const [debouncedValue, setDebouncedValue] = useState<T>(value);

   useEffect(() => {
      const handler = setTimeout(() => {
         setDebouncedValue(value);
      }, delay || 500);

      return () => {
         clearTimeout(handler);
      };
   }, [value, delay]);

   return debouncedValue;
};
caches
abstract
events
export default useDebounce;