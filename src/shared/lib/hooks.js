import { useEffect, useState } from "react";

export function useOutsideClickClose(ref, stateChanger) {
  useEffect(() => {
    const handleClickOutside = (evt) => {
      if (ref.current && !ref.current.contains(evt.target)) {
        stateChanger(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });
}

export function useMediaQuery(query, initialValue = false) {
  const [matches, setMatches] = useState(initialValue);

  useEffect(() => {
    const media = window.matchMedia(query);

    if (media.matches !== matches) {
      setMatches(media.matches);
    }

    const listener = () => {
      setMatches(media.matches);
    };

    media.addListener(listener);
    
    return () => media.removeListener(listener);
  }, [matches, query]);

  return matches;
}
