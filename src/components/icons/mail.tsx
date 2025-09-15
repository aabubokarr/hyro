const MailIcon = ({ className, ...props }: React.ComponentProps<"svg">) => (
  <svg
    width="55"
    height="45"
    viewBox="0 0 55 45"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    <path
      d="M3.91825 4.33524C4.40836 3.84513 5.08545 3.54199 5.83333 3.54199H49.1667C49.9146 3.54199 50.5916 3.84513 51.0817 4.33524M3.91825 4.33524C3.42814 4.82536 3.125 5.50244 3.125 6.25033V38.7503C3.125 40.2461 4.33756 41.4587 5.83333 41.4587H49.1667C50.6624 41.4587 51.875 40.2461 51.875 38.7503V6.25033C51.875 5.50244 51.5719 4.82536 51.0817 4.33524M3.91825 4.33524L23.6698 24.0867C25.7852 26.202 29.2148 26.202 31.3302 24.0867L51.0817 4.33524"
      stroke="#C0B7E8"
      stroke-width="6"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

export { MailIcon };
