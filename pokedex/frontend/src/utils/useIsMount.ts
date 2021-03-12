import { useRef, useEffect } from "react";

export const useIsMount = (): boolean => {
    const isMountRef = useRef(true);
    useEffect(() => {
        isMountRef.current = false;
    }, []);
    return isMountRef.current;
};
