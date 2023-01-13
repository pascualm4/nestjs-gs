import { Document } from 'mongoose';

export interface Task extends Document {
  id?: number;
  title: string | null;
  description: string;
  done: boolean;
}
