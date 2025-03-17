import {
  Card,
  CardHeader,
  CardFooter,
  CardBody,
  Divider,
  Button,
} from "@heroui/react";
import { withalert } from "../HOC/withAlert";

function TodoCard(props) {
  return (
    <>
      <div>
        <Card className="flex max-w-[400px] items-center justify-center ">
          <CardHeader className="font-bold text-lg">
            {props.day}({props.numberOfActivity})
          </CardHeader>
          <Divider />
          <CardBody className="">
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
      </div>
    </>
  );
}

// TodoCard.prototype = {
//   day: PropTypes.string,
//   numberOfActivity: PropTypes.number,
// };

export default withalert(TodoCard);
