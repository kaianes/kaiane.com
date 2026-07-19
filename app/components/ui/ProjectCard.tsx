interface ProjectCardProps {
  title: string;
  description: string;
}

export default function ProjectCard({ title, description }: ProjectCardProps) {
  return (
    <div>
      <h3 className="font-heading">{title}</h3>
      <p className="font-body">{description}</p>
    </div>
  );
}
