import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div data-name="index-route-parent">
      <div
        className="flex flex-row items-center gap-4 justify-center"
        data-name="header"
      >
        <img
          src="./src/assets/bp-logo-transparent.svg"
          className="w-auto h-24"
        />
        <h1 className="text-7xl font-bold">
          <span className="text-bashprime-red">Bash</span>
          <span className="text-bashprime-yellow">Prime</span>
        </h1>
      </div>
    </div>
  );
}
