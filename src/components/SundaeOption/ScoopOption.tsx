interface ScoopOptionProps {
  name: string;
  imagePath: string;
}

export function ScoopOption({ name, imagePath }: ScoopOptionProps) {
  return (
    <div>
      <img
        data-testid="scoop-img"
        src={`http://localhost:3030/${imagePath}`}
        alt={`${name} scoop`}
        title={`${name} scoop`}
      />
    </div>
  );
}
