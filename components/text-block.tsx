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
      className={clsx(
        "flex flex-col gap-4 w-full sm:w-2/3 text-xl border-accent bg-gray-50 p-4 md:p-16 rounded-sm",
        {"self-end border-r-2": isRight, "self-start border-l-2": isLeft}
      )}
    >
      {children}
    </div>
  );
}
