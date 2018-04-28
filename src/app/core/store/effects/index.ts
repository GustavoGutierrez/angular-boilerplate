import { RouterEffects } from './router.effect';
import { LoginEffects } from './login.effect';

export const effects: any[] = [RouterEffects, LoginEffects];

export * from './router.effect';
export * from './login.effect';
export * from './tasking.effect';
