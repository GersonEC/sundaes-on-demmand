interface AlertBannerProps {
  message?: string;
  variant?: string;
}
export function AlertBanner({ message }: AlertBannerProps) {
  return (
    <div data-testid="alert-error" style={{ color: "red" }}>
      {message
        ? message
        : "An unexpected error ocurred. Please try again later."}
    </div>
  );
}
