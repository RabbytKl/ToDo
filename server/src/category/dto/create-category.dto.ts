import { IsEmail, MinLength } from "class-validator";

export class CreateCategoryDto {
    @IsEmail()
    email: String;

    @MinLength(6, {message: 'Пароль повинен містити не більше 6 символів'})
    password: String;
}
