import Link from "next/link";
import { buttonVariants } from "./ui/button";

export function Footer() {
  return (
    <footer className="border-t w-full h-16">
      <div className="container flex items-center sm:justify-between justify-center sm:gap-0 gap-4 h-full text-muted-foreground text-sm flex-wrap sm:py-0 py-3">
        <div className="flex items-center gap-3">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © {new Date().getFullYear()}{" "}
            <Link
              href={process.env.NEXT_PUBLIC_OTASK || "https://otask.club"}
              className="font-medium "
            >
              Otask
            </Link>{" "}
            . All Rights Reserved.
          </p>
        </div>

        <div className="gap-4 items-center hidden md:flex">
          <FooterButtons />
        </div>
      </div>
    </footer>
  );
}

export function FooterButtons() {
  return (
    <>
      <Link
        href={process.env.NEXT_PUBLIC_OTASK || "https://otask.club"}
        className={buttonVariants({ variant: "outline", size: "sm" })}
      >
        <div className="flex gap-1 justify-center items-center">
          <div
            style={{
              width: "20px",
              height: "20px",
              border: `3px solid #01e601`,
              borderRadius: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "100%",
                background: "#01e601",
              }}
            ></span>
          </div>
          <p className="font-mono text-lg font-semibold tracking-wide">Task</p>
        </div>
      </Link>
    </>
  );
}
