import Container from "@/components/Layout/container";

export default function FooterSection() {
  return (
    <footer className="py-6 md:px-8 md:py-0">
      <Container>
        <div className="text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()}
          <span className="font-bold"> Made In AASTU</span>. All rights
          reserved.
        </div>
        <div className="container flex flex-col items-center justify-center gap-2 md:h-24 md:flex-row">
          <p className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
            Built by{" "}
            <a
              href={"https://t.me/AASTUSEA"}
              target="_blank"
              rel="noreferrer"
              className="font-bold underline underline-offset-4"
            >
              AASTU SEA
            </a>
            . The source code is available on{" "}
            <a
              href={"https://github.com/aastusea"}
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              GitHub
            </a>
            .
          </p>
        </div>
      </Container>
    </footer>
  );
}
