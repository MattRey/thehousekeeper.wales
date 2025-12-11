import clsx from "clsx";

export function TextBlock({
  children,
  position = "left",
}: {
  children: React.ReactNode;
  position?: "left" | "right";
}) {
  const isRight = position === "right";
  const isLeft = position === "left";
  return (
    <div
      className={clsx("relative flex w-full sm:w-2/3", {
        "self-end": isRight,
        "self-start": isLeft,
      })}
    >
      <div
        className={clsx(
          "relative flex flex-col gap-4 w-full text-xl bg-gray-50 p-4 md:p-16 z-10"
        )}
      >
        {children}
      </div>
      <div className={clsx(
        "absolute -bottom-3 h-full w-1/2 bg-accent/50 z-[-1]", {
          "-right-2": isRight,
          "-left-2": isLeft,
        })}
        />
    </div>
  );
}
