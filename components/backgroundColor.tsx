interface BackgroundColor {
    id: number;
    display_name: string;
    value: string;
}

// const backgroundColorList = ["bg-blue-900", "bg-current", "bg-slate-800", "bg-zinc-800", "bg-orange-600",
//                              "bg-amber-400", "bg-yellow-400", "bg-lime-600", "bg-green-500"];

const backgroundColorList: BackgroundColor[] = [
    {id: 1, display_name: "blue", value: "bg-blue-900"},
    {id: 2, display_name: "current", value: "bg-current"},
    {id: 3, display_name: "slate", value: "bg-slate-800"},
    {id: 4, display_name: "orange", value: "bg-orange-600"},
    {id: 5, display_name: "zinc", value: "bg-zinc-800"},
    {id: 6, display_name: "amber", value: "bg-amber-400"},
    {id: 7, display_name: "yellow", value: "bg-yellow-400"},
    {id: 8, display_name: "lime", value: "bg-lime-600"},
    {id: 9, display_name: "green", value: "bg-green-500"},
  ]

export { backgroundColorList };
export type { BackgroundColor };
