import {
  Card,
  CardHeader,
  CardFooter,
  CardBody,
  Divider,
  Button,
} from "@heroui/react";

function TodoCard(props) {
  return (
    <>
      <Card className="max-w-[400px]">
        <CardHeader className="font-bold text-lg">
          {props.day}({props.numberOfActivity})
        </CardHeader>
        <Divider />
        <CardBody>
          <ul className="list-decimal list-inside">
            <li>Mandi</li>
            <li>Makan</li>
            <li>Ngoding</li>
          </ul>
        </CardBody>
        <Divider />
        <CardFooter>
          <Button> Finish </Button>
        </CardFooter>
      </Card>
    </>
  );
}

TodoCard.prototype = {
  day: PropTypes.string,
  numberOfActivity: PropTypes.number,
};

export default TodoCard;
