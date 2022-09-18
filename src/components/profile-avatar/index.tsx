import React from "react";

import { Container } from "./styles";
import randomcolor from "randomcolor";

const ProfileAvatar: React.FC<{
  size: number;
  title: string;
}> = ({ size, title }) => {
  const [color] = React.useState(randomcolor());

  const userInitials = React.useMemo(() => {
    const names = title?.split(" ");
    const { firstName, secondName } =
      title && names
        ? { firstName: names[0], secondName: names[1] }
        : { firstName: names[0], secondName: names[1] };

    const [firstInitial] = firstName.split("");

    if (!secondName) {
      return `${firstInitial}`.toLocaleUpperCase();
    }

    const [secondInitial] = secondName.split("");


    return `${firstInitial}${secondInitial}`.toLocaleUpperCase();
    
  }, [title]);

  return (
    <Container size={size} color={color}>
      <span>{userInitials}</span>
    </Container>
  );
};

export default ProfileAvatar;
