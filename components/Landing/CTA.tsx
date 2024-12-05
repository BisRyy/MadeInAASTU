import Container from "@/components/Layout/container";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TelegramIcon } from "@/components/ui/icon";

export default function CTA() {
  return (
    <div id="community">
      <Container>
        <div className="container py-20 sm:py-20">
          <div className="mx-auto">
            <Card className="bg-secondary/[.6] border-none shadow-none text-center flex flex-col items-center justify-center">
              <CardHeader>
                <CardTitle className="text-4xl md:text-5xl font-bold flex flex-col items-center">
                  <TelegramIcon className="mb-2" width={80} height={80} />
                  <div>
                    Ready to stay
                    <span className="text-transparent pl-2 bg-gradient-to-r from-[#4d4c4c] to-primary bg-clip-text">
                      Connected?
                    </span>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="lg:w-[80%] text-xl text-muted-foreground">
                Follow our Telegram channel to get updates on events, resources,
                and opportunities. Don’t miss out on what’s coming next!
              </CardContent>

              <CardFooter>
                <Button asChild>
                  <a href="https://t.me/AASTUSEA" target="_blank">
                    <TelegramIcon className="mr-2" width={24} height={24} />
                    Follow Us
                  </a>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </Container>
    </div>
  );
}
