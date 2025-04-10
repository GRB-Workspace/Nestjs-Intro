import { Injectable, Query } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from "../database/database.service";

@Injectable()
export class EmployeesService {
  constructor(private readonly databaseService: DatabaseService) {}

  async create(createEmployeeDto: Prisma.EmployeeCreateInput) {
    return this.databaseService.employee.create({
        data: createEmployeeDto,
    });
  }

  async findAllRoleWise(@Query('role') role?: 'USER' | 'ADMIN' | 'SUPER_ADMIN') {
    if (role) return this.databaseService.employee.findMany({
        where: {
            role: role ? { equals: role } : undefined,
        },
    });
    return this.databaseService.employee.findMany();
  }

  async findAll() {
    return this.databaseService.employee.findMany();
  }

  async findOne(id: number) {
    return this.databaseService.employee.findUnique({
        where: { id },
    });
  }

  async update(id: number, updateEmployeeDto: Prisma.EmployeeUpdateInput) {
    return this.databaseService.employee.update(
        {
            where: { id },
            data: updateEmployeeDto,
        }
    );
  }

  async remove(id: number) {
    return this.databaseService.employee.delete({
        where: { id },
    });
  }
}
