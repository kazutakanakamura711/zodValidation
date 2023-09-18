import { useForm } from "react-hook-form";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { validationSchema } from "../utils/validationSchema";
import { Select as MulchSelect } from "chakra-react-select";

type Form = {
  name: string;
  number: string;
  email: string;
  password: string;
  group: { value: string; label: string }[];
};
const options = [
  { value: "First", label: "First" },
  { value: "Second", label: "Second" },
  { value: "Third", label: "Third" },
];
export const ZodValidation = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<Form>({
    mode: "onChange",
    resolver: zodResolver(validationSchema),
  });

  const onSubmit = (data: Form) => console.log(data);

  return (
    <Box w="50%" border="1px" m="0 auto" p="32px" rounded="16px">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box mb="16px">
          <FormLabel>Username</FormLabel>
          <Input id="name" type="text" {...register("name")} />
          <Text color="red">{errors.name?.message}</Text>
        </Box>

        <Box mb="16px">
          <FormLabel>Number</FormLabel>
          <Input id="number" type="text" {...register("number")} />
          <Text color="red">{errors.number?.message}</Text>
        </Box>

        <Box mb="16px">
          <FormLabel>E-Mail</FormLabel>
          <Input id="email" type="email" {...register("email")} />
          <Text color="red">{errors.email?.message}</Text>
        </Box>

        <Box mb="16px">
          <FormLabel>Password</FormLabel>
          <Input
            id="password"
            type="password"
            {...register("password", {
              required: "パスワードは必須です",
              minLength: { value: 8, message: "パスワードは8文字以上です" },
            })}
          />
          <Text color="red">{errors.password?.message}</Text>
        </Box>

        <Box mb="16px">
          <FormControl id="group" isRequired>
            <FormLabel>Group</FormLabel>
            <MulchSelect
              isMulti
              options={options}
              closeMenuOnSelect={false}
              hideSelectedOptions={false}
              placeholder="選択してください"
              onChange={(values) => {
                const convertedValues = Array.isArray(values)
                  ? values
                  : [values];
                setValue("group", convertedValues);
              }}
            />
          </FormControl>
          <Text color="red">{errors.group?.message}</Text>
        </Box>

        <Button colorScheme="blue" type="submit" mt="32px">
          送信
        </Button>
      </form>
    </Box>
  );
};
