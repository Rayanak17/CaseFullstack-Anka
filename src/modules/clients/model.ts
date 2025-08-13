export type CreateClientInput = {
  name: string;
  email: string;
  age: number;
  status: boolean;
  profile: 'conservative' | 'moderate' | 'aggressive';
};