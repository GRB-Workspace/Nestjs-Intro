import { Body, Controller, Delete, Get, Param, Patch, Post, Query, ParseIntPipe, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDTO } from './dto/create-user.dto';
import { UpdateUserDTO } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
    // The UsersService is injected into the UsersController to handle business logic (readonly means it won't be modified)
    constructor(private readonly usersService: UsersService) {}

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.usersService.findOne(id);
    }

    @Get()
    findAllRoleWise(@Query('role') role?: 'USER' | 'ADMIN' | 'SUPER_ADMIN') {
        return this.usersService.findAllRoleWise(role);
    }

    @Get()
    findAll() {
        return this.usersService.findAll();
    }

    @Post()
    create(@Body(ValidationPipe) createUserDTO: CreateUserDTO) {
        return this.usersService.create(createUserDTO)
    }

    @Patch(':id')
    update(@Param('id', ParseIntPipe) id: number, @Body(ValidationPipe) updateUserDTO: UpdateUserDTO) {
        return this.usersService.update(id, updateUserDTO)
    }

    @Delete(':id')
    remove(@Param('id', ParseIntPipe) id: number) {
        return this.usersService.remove(id);
    }
}
