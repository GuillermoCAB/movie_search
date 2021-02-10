// TYPES
import { ActionTypes, Alert } from './types';


export const setAlert = (alert: Alert) => {
  return { type: ActionTypes.SET_ALERT, payload: { alert } }
}

export const removeAlert = () => {
  return { type: ActionTypes.REMOVE_ALERT }
}

export const newAlert = (alert: Alert) => {
  return { type: ActionTypes.NEW_ALERT, payload: { alert } }
}

export const storeAlert = (alert: Alert) => {
  return { type: ActionTypes.STORE_ALERT, payload: { alert } }
}

export const clearAlert = () => {
  return { type: ActionTypes.CLEAR_ALERT }
}

export const clearAllAlerts = () => {
  return { type: ActionTypes.CLEAR_ALL_ALERTS }
}

export const nextAlert = () => {
  return { type: ActionTypes.NEXT_ALERT }
}