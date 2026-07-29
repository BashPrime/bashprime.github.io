import { cn } from "@/lib/utils";

export function SocialMediaIcons() {
  const size = "w-auto h-12";
  const hover = "hover:brightness-150";

  return (
    <div
      className="flex flex-row gap-6 items-center justify-center"
      data-name="social-media-icons"
    >
      <a href="https://twitch.tv/bashprime" target="_blank">
        <img src="/icons/socials/twitch.svg" className={cn(size, hover)} />
      </a>
      <a href="https://youtube.com/bashprime" target="_blank">
        <img
          src="/icons/socials/youtube.png"
          className={cn("w-auto h-16", hover)}
        />
      </a>
      <a href="https://bsky.app/profile/bashprime.com" target="_blank">
        <img src="/icons/socials/bluesky.svg" className={cn(size, hover)} />
      </a>
    </div>
  );
}
