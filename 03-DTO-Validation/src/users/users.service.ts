import {Injectable} from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';
import { UpdateUserDTO } from './dto/update-user.dto';
import { NotFoundException } from '@nestjs/common';

@Injectable()
export class UsersService {
    private users = [
        {
            "id": 1,
            "name": "John Smith",
            "email": "john.123@example.com",
            "role": "USER"
        },
        {
            "id": 2,
            "name": "Alice Johnson",
            "email": "alice_j@workplace.net",
            "role": "SUPER_ADMIN"
        },
        {
            "id": 3,
            "name": "Bob Williams",
            "email": "bob.williams78@domain.org",
            "role": "USER"
        },
        {
            "id": 4,
            "name": "Eva Brown",
            "email": "e.brown@another.co.uk",
            "role": "ADMIN"
        },
        {
            "id": 5,
            "name": "David Miller",
            "email": "david.m@service.io",
            "role": "USER"
        }
    ]

    findAll() {
        return this.users;
    }

    findAllRoleWise(role?: 'USER' | 'ADMIN' | 'SUPER_ADMIN') {
        if (role) {
            const rolesArray = this.users.filter(user => user.role === role);
            if (rolesArray.length === 0) throw new NotFoundException("No users found with this role");
            return rolesArray;
        }
        return this.users;
    }

    findOne(id: number) {
        const user = this.users.find((user) => user.id === id);
        if (!user) throw new NotFoundException("User not found");
        return user;
    }

    create(createUserDTO: CreateUserDTO) {
        const newUser = { id: this.users.length + 1, ...createUserDTO };
        this.users.push(newUser);
        return newUser;
    }

    update(id: number, updateUserDTO: UpdateUserDTO) {
        const index = this.users.findIndex(user => user.id === id);
        if (index !== -1) {
            this.users[index] = { ...this.users[index], ...updateUserDTO };
            return this.users[index];
        }
        return null;
    }

    remove(id: number) {
        const index = this.users.findIndex(user => user.id === id);
        if (index !== -1) {
            const deletedUser = this.users.splice(index, 1);
            return deletedUser[0];
        }
        return null;
    }
}
