export interface IUser {
  name: string;
  email: string;
  status: string; //'ACT' | 'INA' | 'BLQ';
  password?: string;
  oldPasswords?: string[];
  created: Date;
  updated: Date;
  avatar?: string;
  failedAttempts? : number;
  lastLogin?: Date;
  roles: string[];
  lastBMI:string;
  lastWeight:string;
  lastAge:string;
  lastHeight:string;
  lastChecked:Date;
  _id?: unknown;
}
