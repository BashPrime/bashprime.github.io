import { createFileRoute } from "@tanstack/react-router";
import { SocialMediaIcons } from "./-components/social-media-icons";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="flex flex-col items-center gap-4" data-name="index">
      <div
        className="flex flex-row items-center gap-4 justify-center"
        data-name="bashprime-logo-text"
      >
        <img
          src="./src/assets/icons/bp-logo-transparent.svg"
          className="w-auto h-24"
        />
        <h1 className="text-7xl font-bold">
          <span className="text-bashprime-red">Bash</span>
          <span className="text-bashprime-yellow">Prime</span>
        </h1>
      </div>
      <div
        className="flex flex-row gap-3 text-xl items-center -mt-4"
        data-name="subheader"
      >
        <p>Metroid Prime Enjoyer</p>
        <p>•</p>
        <p>he/him</p>
      </div>
      <SocialMediaIcons />
    </div>
  );
}
