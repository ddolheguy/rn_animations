import React from 'react';
import {PropsWithChildren, createContext, useMemo, useState} from 'react';

export type ActiveAccountType = {
  accountName?: string;
  setAccountName: (name: string) => void;
};

export const ActiveAccountContext = createContext<ActiveAccountType>({
  setAccountName: () => {},
});

export const ActiveAccountProvider = ({children}: PropsWithChildren) => {
  const [accountName, setAccountName] = useState<string>();

  const values = useMemo(
    () => ({accountName, setAccountName}),
    [accountName, setAccountName],
  );
  return (
    <ActiveAccountContext.Provider value={values}>
      {children}
    </ActiveAccountContext.Provider>
  );
};
