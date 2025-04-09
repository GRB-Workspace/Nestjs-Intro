import {IsEmail, IsEnum, IsNotEmpty, IsString} from "class-validator";

export class CreateUserDTO {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsEmail()
    email: string;

    @IsEnum(['USER', 'ADMIN', 'SUPER_ADMIN'], {
        message: 'Role must be one of the following: USER, ADMIN, SUPER_ADMIN',
    })
    role: 'USER' | 'ADMIN' | 'SUPER_ADMIN';
}