interface BadgeProps {
  label: string;
}

export default function Badge({ label }: BadgeProps) {
  return <span className="font-body">{label}</span>;
}
