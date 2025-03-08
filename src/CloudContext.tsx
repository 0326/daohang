import { createContext, useState, useEffect, ReactNode } from "react";
import cloudbase from "@cloudbase/js-sdk";

type CloudApp = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  models: any;
}

type CloudProviderProps = {
  children: ReactNode;
};

export const CloudContext = createContext<CloudApp | null>(null);

export const CloudProvider = ({ children }: CloudProviderProps) => {
  const [cloudbaseApp, setCloudbaseApp] = useState<CloudApp | null>(null);

  useEffect(() => {
    const initialize = async () => {
      const app = cloudbase.init({
        env: "daohang-1gmk7uhx314adbde", // 替换为你的云开发环境 ID
        clientId: "daohang-1gmk7uhx314adbde", // 替换为你的云开发环境 ID
      });
      const auth = app.auth({
        persistence: "local",
      });
      await auth.signInAnonymously({}); // 或者使用其他登录方式
      setCloudbaseApp(app);
    };

    initialize();
  }, []);

  return (
    <CloudContext.Provider value={cloudbaseApp}>
      {children}
    </CloudContext.Provider>
  );
};
