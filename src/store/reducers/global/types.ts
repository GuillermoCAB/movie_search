// ACTIONS TYPES
export enum ActionTypes {
  SET_ALERT = "SET_ALERT",
  REMOVE_ALERT = "REMOVE_ALERT",
  NEW_ALERT = "NEW_ALERT",
  STORE_ALERT = "STORE_ALERT",
  CLEAR_ALERT = "CLEAR_ALERT",
  CLEAR_ALL_ALERTS = "CLEAR_ALL_ALERTS",
  NEXT_ALERT = "NEXT_ALERT",
}

// DATA TYPES
export interface Alert {
  title: string,
  text: string,
  img?: string,
  timed?: boolean,
  timedAmmount?: number,
  onAccept?: (e: any) => void,
  acceptLabel?: string,
  onRefuse?: (e: any) => void,
  refuseLabel?: string,
}

// REDUCER STATE
export interface ReducerTypes {
  readonly hasAlert: boolean,
  readonly alertContent: Alert,
  readonly nextAlert: Alert[],
}