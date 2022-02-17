import {
  Button,
  Card as GrommetCard,
  CardBody,
  CardFooter,
  CardHeader,
} from "grommet";
import { Favorite, ShareOption } from "grommet-icons";

export const Card = ({
  header,
  children,
}: {
  header: string;
  children?: any;
}) => {
  return (
    <GrommetCard height="small" width="large" background="light-1">
      <CardHeader pad="medium">{header}</CardHeader>
      <CardBody pad="medium">{children}</CardBody>
      <CardFooter pad={{ horizontal: "small" }} background="light-2">
        <Button icon={<Favorite color="red" />} hoverIndicator />
        <Button icon={<ShareOption color="plain" />} hoverIndicator />
      </CardFooter>
    </GrommetCard>
  );
};
