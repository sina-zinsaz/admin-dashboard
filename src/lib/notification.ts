import { toast } from "react-toastify";

type NotificationStatus = "success" | "error" | "info" | "warning";

export function showNotification(message: string, status: NotificationStatus = "success") {
  return toast[status](message);
}
