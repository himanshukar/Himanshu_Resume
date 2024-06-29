import React from "react";
import {Avatar} from "@nextui-org/react";

export default function UserAvatar() {
  return (
    <div className="flex gap-4 items-center absolute top-0 left-0">
      <Avatar isBordered radius="sm" src="src/assets/profilePic.png" />
    </div>
  );
}
