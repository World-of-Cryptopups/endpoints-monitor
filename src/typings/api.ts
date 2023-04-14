export interface APIProps<T extends Record<string, any>> {
  message?: string;
  data: T;
  error: boolean;
}
