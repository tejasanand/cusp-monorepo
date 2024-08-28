export const Button = (props: React.PropsWithChildren) => {
  return (
    <button className="relative px-3 py-2 rounded-lg font-medium text-sm bg-gradient-to-b from-[rgb(0,0,0,0)] to-[rgb(255,123,97)] shadow-[0px_0px_12px_rgb(255,123,97)]">
      <div className="absolute inset-0">
        <div className="border rounded-lg border-[rgba(0,0,0,0)] absolute inset-0 [mask-image:linear-gradient(to bottom,black,transparent)]"></div>
        <div className="border rounded-lg absolute inset-0 border-[rgba(255,123,97,0.4)] [mask-image:linear-gradient(to top,black,transparent)]"></div>
        <div className="absolute inset-0 shadow-[0_0_10px_rgb(255, 123, 97)_inset] rounded-lg"></div>
      </div>
      <span>{props.children}</span>
    </button>
  );
};
