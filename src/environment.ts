const defaultPort = 4001;

interface Environment {
  port: number | string;
  riot: {
    key: string;
    version: string;
  };
}

export const env: Environment = {
  port: process.env.PORT || defaultPort,
  riot: {
    key: process.env.RIOT_API_KEY || "",
    version: process.env.RIOT_PATCH_VER || "",
  },
};
