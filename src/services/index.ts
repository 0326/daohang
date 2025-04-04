// import cloudbase from "@cloudbase/js-sdk";

export * from "./category";
export * from "./tenant";
export * from "./website"

export async function initCloudbase(env?: string) {
  return env
  // const app = cloudbase.init({
  //   env: env || "daohang-1gmk7uhx314adbde", // 替换为你的云开发环境 ID
  //   clientId: env || "daohang-1gmk7uhx314adbde", // 替换为你的云开发环境 ID
  // });
  // const auth = app.auth({
  //   persistence: "local",
  // });
  // await auth.signInAnonymously({}); // 或者使用其他登录方式
  // return app.models
}
