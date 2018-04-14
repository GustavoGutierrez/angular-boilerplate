import { TodoService } from './todo.service';
import { InterceptorService } from './interceptor.service';

export const services: any[] = [InterceptorService, TodoService];

export * from './todo.service';
export * from './interceptor.service';
