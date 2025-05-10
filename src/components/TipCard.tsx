import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

interface TipCardProps {
  tip: { title: string; content: string };
}

const TipCard = ({ tip }: TipCardProps) => {
  return (
    <Card key={tip.title}>
      <CardHeader>
        <CardTitle>{tip.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <em>{tip.content}</em>
      </CardContent>
    </Card>
  );
};

export default TipCard;
