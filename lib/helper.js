export const ButtonColors = (color) => {
  switch (color) {
    case "success":
      return "bg-green-600 text-white border-green-500 hover:bg-green-500 hover:border-green-600";
    case "danger":
      return "bg-red-700 text-white border-red-600 hover:bg-red-600 hover:border-red-700";
    case "primary":
      return "bg-blue-800 text-white border-blue-800 hover:bg-transparent hover:text-blue-800 hover:border-blue-800";
    case "secondary":
      return "bg-transparent text-blue-800 border-blue-800 hover:bg-blue-800 hover:text-white hover:border-blue-800";
  }
};
