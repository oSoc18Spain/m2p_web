export interface Event {
  title: string;
  type: string;
  status: string;
  time: Date;
  timeInSeconds: number;
  id: number;
}
export interface Datatable {
  status: number;
  columns: Event[];
}
export interface AddEvent {
  id_task: number;
  description: string;
  id_employee: number;
  id_role_assigned: number;
  id_employee_assigned: number;
  id_machine: number;
  id_line: number;
}
export interface Login {
  id_employee: number;
  password: string;
}
export interface Subscription {
  id_employee: number;
  lines_subscribed: Line[];
}
export interface Line {
  id: number;
  n_alerts: number;
}
