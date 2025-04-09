import {Body, Controller, Delete, Get, Param, Patch, Post, Query} from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    // The UsersService is injected into the UsersController to handle business logic (readonly means it won't be modified)
    constructor(private readonly usersService: UsersService) {}

    @Get()
    findAll() {
        return this.usersService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.usersService.findOne(+id); // + converts string to number
    }

    @Get()
    findAllRoleWise(@Query('role') role?: 'USER' | 'ADMIN' | 'SUPER_ADMIN') {
        return this.usersService.findAllRoleWise(role);
    }

    @Post()
    create(@Body() user: { name: string; email: string; role: 'USER' | 'ADMIN' | 'SUPER_ADMIN' }) {
        return this.usersService.create(user)
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() user: { name?: string; email?: string; role?: 'USER' | 'ADMIN' | 'SUPER_ADMIN' }) {
        return this.usersService.update(+id, user)
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.usersService.remove(+id);
    }
}
