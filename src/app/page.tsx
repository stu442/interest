import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="flex justify-between">
      <Card className="w-96">
        <CardHeader>
          <CardTitle>
            <h2>금리 계산기</h2>
          </CardTitle>
          <CardDescription>
          <span>디테일을 정해주세요.</span>
          </CardDescription>
        </CardHeader>
        <CardContent>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant={"secondary"}>
            계산하기
          </Button>
          <Button>
            리셋
          </Button>
        </CardFooter>
      </Card>
      <Card className="w-96">
        <CardTitle>
          <h2>결과</h2>
        </CardTitle>
        <CardDescription>
          성장을 지켜보세요!
        </CardDescription>
      </Card>
    </div>
  );
}