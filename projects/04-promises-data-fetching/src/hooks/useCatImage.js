import { useEffect, useState } from "react";

export function useCatImage({fact}) {
    const [url, setUrl] = useState();

    useEffect(() => {
        if (!fact) return;
        const twoFirstWord = fact.split(" ").slice(0, 2).join(" ");
        setUrl(
          `https://cataas.com/cat/says/${twoFirstWord}?fontSize=50&fontColor=red`
        );
      }, [fact]);

    return {url};
}