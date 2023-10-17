import type { User } from "next-auth";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";

interface UserAvatarProps {
  user: User;
}

const UserAvatar = ({ user }: UserAvatarProps) => {
  return (
    <Avatar>
      {user.image && user.name ? (
        <AvatarImage src={user.image} alt={user.name} />
      ) : null}
      <AvatarFallback>{user.name}</AvatarFallback>
    </Avatar>
  );
};

export { UserAvatar };
