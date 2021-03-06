import type { AppProps as NextAppProps } from "next/app";
import { ReactNode } from "react";

// Workaround for https://github.com/vercel/next.js/issues/8592
export type AppProps = NextAppProps & {
  /** Will be defined only is there was an error */
  err?: Error;
};

type AppPropsWithChildren = AppProps & {
  children: ReactNode;
};

const AppProviders = (props: AppPropsWithChildren) => {
  return <>{props.children} </>;
};

export default AppProviders;
