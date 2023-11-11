import { useEffect, useState } from "react";
import { getRandomFact } from "../services/fact,js";

export function useCatFact(){
    const [fact, setFact] = useState();

    const updateFact = () => {
      getRandomFact().then((fact) => setFact(fact));
    }
    
      return {fact, updateFact }
} 