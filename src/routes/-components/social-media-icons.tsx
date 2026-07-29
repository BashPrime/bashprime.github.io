import { cn } from "../../../@/lib/utils";
import Bluesky from "../../assets/icons/socials/bluesky.svg?react";
import Twitch from "../../assets/icons/socials/twitch.svg?react";

type IconProps = {
  variant: "twitch" | "youtube" | "bsky";
};
function Icon({ variant }: IconProps) {
  const shared = "w-auto h-12";
  const hover = "hover:brightness-150";

  switch (variant) {
    case "bsky":
      return (
        <a href="https://bsky.app/profile/bashprime.com" target="_blank">
          <Bluesky
            className={cn("fill-[#1185fe]", shared, hover)}
            title="Bluesky"
            alt="Bluesky logo"
          />
        </a>
      );
    case "twitch":
      return (
        <a href="https://twitch.tv/bashprime" target="_blank">
          <Twitch
            className={cn("fill-[#9146ff]", shared, hover)}
            fill="white"
            title="Bluesky"
            alt="Bluesky logo"
          />
        </a>
      );
    case "youtube":
      return (
        <a href="https://youtube.com/bashprime" target="_blank">
          <img
            src="/src/assets/icons/socials/youtube.png"
            className={cn("w-auto h-16", hover)}
          />
        </a>
      );
  }
}

export function SocialMediaIcons() {
  return (
    <div
      className="flex flex-row gap-6 items-center"
      data-name="social-media-icons"
    >
      <Icon variant="twitch" />
      <Icon variant="youtube" />
      <Icon variant="bsky" />
    </div>
  );
}
