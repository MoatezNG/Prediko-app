import { useMemo } from 'react';

export const checkIfActive = (active: boolean) =>
  useMemo(
    () =>
      (active
        ? { recfill: '#3E6BEC', pathfill: '#fff' }
        : { recfill: '#F7F7F7', pathfill: '#A4A8BB' }),
    [active],
  );
