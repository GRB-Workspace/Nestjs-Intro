import {Body, Controller, Delete, Get, Param, Patch, Post, Query} from '@nestjs/common';

@Controller('users')
export class UsersController {
    @Get()
    findAll() {
        return [
            {
                id: 1,
                name: 'John Doe',
            },
            {
                id: 2,
                name: 'Jane Doe',
            },
        ];
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return {
            id,
            name: 'John Doe',
        }
    }

    @Get()
    findAllRoleWise(@Query('role') role?: 'USER' | 'ADMIN' | 'SUPER_ADMIN') {
        return [
            {
                id: 1,
                name: 'John Doe',
                role: role || 'USER',
            },
            {
                id: 2,
                name: 'Jane Doe',
                role: role || 'ADMIN',
            },
        ];
    }

    @Post()
    create(@Body() user: {}) {
        return {
            id: 1,
            ...user,
        };
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() user: {}) {
        return {
            id,
            ...user,
        };
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return {
            id,
            message: 'User deleted',
        };
    }
}
