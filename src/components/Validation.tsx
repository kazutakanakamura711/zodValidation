import { useForm } from "react-hook-form";
import { Box, Button, FormLabel, Input, Text } from "@chakra-ui/react";

type Form = {
  name: string;
  email: string;
  password: string;
};

export const Validation = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Form>({mode: 'onChange'});
  const onSubmit = (data: Form) => console.log(data);

  return (
    <Box>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormLabel>Username</FormLabel>
          <Input id="name" type="text" {...register("name", {required: '名前は必須です'}) }  />
          <Text color="red">{errors.name?.message}</Text>
          <FormLabel>E-Mail</FormLabel>
          <Input id="email" type="email" {...register("email",  {required: 'メールは必須です'})}  />
          <Text color="red">{errors.email?.message}</Text>
          <FormLabel>Password</FormLabel>Ï
          <Input
            id="password"
            type="password"
            {...register("password",{required: 'パスワードは必須です', minLength: {value: 8, message: 'パスワードは8文字以上です'}})}
          />
          <Text color="red">{errors.password?.message}</Text>
          
          <Button type="submit">送信</Button>
        </form>
      </Box>
  )
}
