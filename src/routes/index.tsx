import { Button } from "@/components/ui/button";
import { createFileRoute, Link } from "@tanstack/react-router";
import { SocialMediaIcons } from "./-components/social-media-icons";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="flex flex-col gap-4" data-name="index">
      <div
        className="flex flex-row items-center gap-4 justify-center"
        data-name="bashprime-logo-text"
      >
        <img src="/favicon.svg" className="w-auto h-24" />
        <h1 className="text-7xl font-bold">
          <span className="text-bashprime-red">Bash</span>
          <span className="text-bashprime-yellow">Prime</span>
        </h1>
      </div>
      <div
        className="flex flex-row gap-3 text-xl justify-center items-center -mt-4"
        data-name="subheader"
      >
        <p>Metroid Prime Enjoyer</p>
        <p>•</p>
        <p>he/him</p>
      </div>
      <SocialMediaIcons />
      <div className="flex flex-col gap-2" data-name="projects">
        <h2 className="font-bold text-bashprime-yellow text-2xl">
          Projects
        </h2>
        <Link to="/hint-tracker">
        <Button className="text-lg bg-bashprime-red text-foreground">Hint Tracker</Button>
        </Link>
      </div>
    </div>
  );
}
