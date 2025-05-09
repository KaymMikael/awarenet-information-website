import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface QuestionItemProps {
  q: { label: string; questions: string[] };
}

const QuestionItem = ({ q }: QuestionItemProps) => {
  return (
    <div key={q.label} className="grid gap-4">
      <h2 className="text-xl font-bold">{q.label}</h2>
      <div className="grid gap-4">
        {q.questions.map((item) => (
          <div key={item} className="grid gap-2">
            <p className="text-lg">{item}</p>
            <RadioGroup>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value={`${item}-one`} id={`${item}-one`} />
                <Label htmlFor={`${item}-one`}>Agree One</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value={`${item}-two`} id={`${item}-two`} />
                <Label htmlFor={`${item}-two`}>Agree Two</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value={`${item}-three`} id={`${item}-three`} />
                <Label htmlFor={`${item}-three`}>Disagree Two</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value={`${item}-four`} id={`${item}-four`} />
                <Label htmlFor={`${item}-four`}>Disagree One</Label>
              </div>
            </RadioGroup>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionItem;
