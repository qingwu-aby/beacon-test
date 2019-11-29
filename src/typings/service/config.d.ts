declare namespace CONFIG {
  export interface IConfig {
    api: {
      uri: string;
      timeout_s?: number;
      retry_count?: number;
      retry_delay_s?: number;
    };
  }
}
