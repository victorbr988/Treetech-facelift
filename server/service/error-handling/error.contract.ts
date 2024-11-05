export interface IError {
  badRequest(message: string): void;
  unauthorized(message: string): void;
  notFound(message: string): void;  
}