import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Employee } from './employee.entity';
import { EmployeeService } from './employee.service';

@Controller('employees')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Post()
  async createEmployee(@Body() body: Partial<Employee>): Promise<Employee> {
    return this.employeeService.create(body);
  }

  @Get()
  async getAllEmployees(): Promise<Employee[]> {
    return this.employeeService.findAll();
  }

  @Get(':id')
  async getEmployeeById(@Param('id') id: number): Promise<Employee> {
    return this.employeeService.findOne(id);
  }

  @Put(':id')
  async updateEmployee(@Param('id') id: number, @Body() body: Partial<Employee>): Promise<Employee> {
    return this.employeeService.update(id, body);
  }

  @Delete(':id')
  async deleteEmployee(@Param('id') id: number): Promise<{ message: string }> {
    return this.employeeService.remove(id);
  }
}
