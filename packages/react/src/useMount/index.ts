import { useEffect } from 'react';

function useMount(fn: () => void) {
  useEffect(() => {
    fn?.();
  }, []);
  return 1;
}

export default useMount;
