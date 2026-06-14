import React from "react";
import {
  BoxIcon,
  Camera,
  ChevronLeft,
  ChevronRight,
  Download,
  Feather,
  Paintbrush,
  ZapIcon,
} from "lucide-react";

function UseIcon({ icon, size }) {
  console.log(icon === "camera");
  switch (icon) {
    case "camera":
      return <Camera size={size} />;
    case "draw":
      return <Paintbrush size={size} />;
    case "cube":
      return <BoxIcon size={size} />;

    case "anime":
      return <ZapIcon size={size} />;

    case "minimal":
      return <Feather size={size} />;
    default:
      return <div>useIcons</div>;
      break;
  }
}

export default UseIcon;
