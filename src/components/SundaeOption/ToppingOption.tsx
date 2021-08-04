interface ToppingOptionProps {
  name: string;
  imagePath: string;
}

export function ToppingOption({ name, imagePath }: ToppingOptionProps) {
  return (
    <div>
      <img
        src={`http://localhost:3030/${imagePath}`}
        alt={`${name} topping`}
        title={`${name} topping`}
      />
    </div>
  );
}
