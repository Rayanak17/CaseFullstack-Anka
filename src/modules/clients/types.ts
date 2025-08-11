export interface Client {
  id: string;
  name: string;
  email: string;
  age: number;
  status: boolean;
  profile: 'conservative' | 'moderate' | 'aggressive';
}
