export interface AlertData {
  message: string
  type: AlertType
}
export type AlertType = "neutral" | "success" | "danger" | "warning"
