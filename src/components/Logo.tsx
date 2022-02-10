import { Avatar, Box, Heading } from "grommet";

export const Logo = () => {
  return (
    <Box direction="row" align="center" gap="14px" alignSelf="center">
      <Avatar src="//upload.wikimedia.org/wikipedia/commons/9/9b/Emoji_u1f37b.svg" />
      <Heading>BEER UP!</Heading>
    </Box>
  );
};
