import {
  Alert,
  Button,
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Divider,
  Input,
} from "@heroui/react";
import {useForm, Controller} from "react-hook-form";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {Link} from "react-router-dom";
import Heading from "../components/Heading";
import {SignupContextProvider} from "../context/SignupContext";

const signUpFormSchema = z.object({
  email: z.string().email("Format email belum sesuai"),
  username: z.string().min(6, "Username minimal harus 6 karakter / lebih"),
  password: z.string().min(8, "Password minimal harus 8 karakter / lebih"),
});

function SignUp() {
  const form = useForm({
    defaultValues: {
      email: "",
      username: "",
      password: "",
    },
    resolver: zodResolver(signUpFormSchema),
  });

  const registerUser = (data) => {
    alert(
      `Data berhasil di submit, Email: ${data.email} | Username: ${data.username} | Password: ${data.password}`,
    );
  };

  return (
    <SignupContextProvider value={{title: "SignUp Page"}}>
      <Heading />
      <div className="flex flex-col items-center justify-center p-8">
        <Card className="w-[300px]">
          <CardHeader className="font-semibold text-lg flex items-center justify-center">
            SignUp!
          </CardHeader>
          <Divider></Divider>
          <CardBody>
            <form
              onSubmit={form.handleSubmit(registerUser)}
              className="flex flex-col gap-4">
              <Controller
                name="email"
                control={form.control}
                render={({field, fieldState}) => {
                  return (
                    <Input
                      {...field}
                      label="Email"
                      type="email"
                      isInvalid={Boolean(fieldState.error)}
                      errorMessage={fieldState.error?.message}>
                      Email
                    </Input>
                  );
                }}
              />
              <Controller
                name="username"
                control={form.control}
                render={({field, fieldState}) => {
                  return (
                    <Input
                      {...field}
                      label="Username"
                      isInvalid={Boolean(fieldState.error)}
                      errorMessage={fieldState.error?.message}>
                      Username
                    </Input>
                  );
                }}
              />
              <Controller
                name="password"
                control={form.control}
                render={({field, fieldState}) => {
                  return (
                    <Input
                      {...field}
                      label="Password"
                      type="password"
                      isInvalid={Boolean(fieldState.error)}
                      errorMessage={fieldState.error?.message}>
                      Password
                    </Input>
                  );
                }}
              />

              <Button type="submit">SignUp Now!</Button>
            </form>
          </CardBody>
          <CardFooter className="flex flex-col items-center">
            <Link to="/wishlist" className="text-center font-semibold">
              to wishlist
            </Link>
          </CardFooter>
        </Card>
      </div>
    </SignupContextProvider>
  );
}

export default SignUp;
