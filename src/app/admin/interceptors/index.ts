import { TokenInterceptor } from './token.interceptor';
import { TimingInterceptor } from './timing.interceptor';

export const interceptors: any [] = [TokenInterceptor, TimingInterceptor];

export * from './token.interceptor';
export * from './timing.interceptor';
