import { useEffect } from 'react';
import useLatestRef from '../useLatestRef';

function useUnMount(fn: () => void) {
  const fnRef = useLatestRef(fn);

  useEffect(() => () => fnRef.current?.(), []);
}

export default useUnMount;
