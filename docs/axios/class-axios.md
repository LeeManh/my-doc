# Create class Axios

## Code

```ts title=LocalStorage.ts
class LocalStorage {
  public get(key: string, fallback: any = null) {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : fallback;
    } catch (error) {
      console.log(error);
      return fallback;
    }
  }

  public set(key: string, value: object | string, callback?: () => void) {
    window.localStorage.setItem(key, JSON.stringify(value));
    if (callback) {
      callback();
    }
  }

  public remove(key: string, callback?: () => void) {
    window.localStorage.removeItem(key);
    if (callback) {
      callback();
    }
  }
}

export default new LocalStorage();
```

```ts title=HttpClient.ts
import type {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from "axios";
import axios from "axios";

import LocalStorage from "./LocalStorage";

const baseURL = "http://localhost:3000";

const headers: AxiosRequestConfig["headers"] = {
  "Content-Type": "application/json",
};

class Axios {
  private instance: AxiosInstance;
  private interceptor: number | null = null;

  constructor() {
    console.log("::HttpClient");
    const instance = axios.create({
      baseURL,
      headers,
    });

    // Request interceptor
    instance.interceptors.request.use(
      (config: AxiosRequestConfig) => {
        const accessToken = LocalStorage.get("accessToken");
        if (config.headers) {
          if (accessToken) {
            config.headers.Authorization = `Bearer ${accessToken}`;
          } else {
            delete config.headers.Authorization;
          }
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    // Response interceptor
    const interceptor = instance.interceptors.response.use(
      (response: AxiosResponse) => response.data,
      (error: AxiosError) => Promise.reject(error)
    );

    this.interceptor = interceptor;
    this.instance = instance;
  }

  public get Instance(): AxiosInstance {
    return this.instance;
  }

  private useInterceptor() {
    if (this.interceptor === null) {
      const interceptor = this.instance.interceptors.response.use(
        (response: AxiosResponse) => response.data,
        (error: AxiosError) => Promise.reject(error)
      );
      this.interceptor = interceptor;
    }
  }

  private ejectInterceptor() {
    if (this.interceptor !== null) {
      this.instance.interceptors.response.eject(this.interceptor);
      this.interceptor = null;
    }
  }

  // Create
  public post<T = any, R = T>(
    url: string,
    data?: T,
    config?: AxiosRequestConfig
  ): Promise<R> {
    this.useInterceptor();
    return this.Instance.post<T, R>(url, data, config);
  }

  // Read
  public get<T = any, R = T>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<R> {
    this.useInterceptor();
    return this.Instance.get<T, R>(url, config);
  }

  // Update
  public put<T = any, R = T>(
    url: string,
    data?: T,
    config?: AxiosRequestConfig
  ): Promise<R> {
    this.useInterceptor();
    return this.Instance.put<T, R>(url, data, config);
  }

  // Delete
  public delete<T = any, R = T>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<R> {
    this.useInterceptor();
    return this.Instance.delete<T, R>(url, config);
  }

  // Post with full response
  public pull<T = any, R = T>(
    url: string,
    data?: T,
    config?: AxiosRequestConfig
  ): Promise<R> {
    this.ejectInterceptor();
    return this.Instance.post<T, R>(url, data, config);
  }
}

const HttpClient = new Axios();
export default HttpClient;
```

## Usage

```ts
// Sign in with email and password
export interface SignInWithEmailAndPasswordParams {
  username: string;
  password: string;
  rememberLogin: boolean;
}

const signInWithEmailAndPassword = async (
  params: SignInWithEmailAndPasswordParams
) => {
  return HttpClient.post<typeof params, SignInWithEmailAndPasswordResponse>(
    "/shared/Auth/Login",
    params
  );
};
```
