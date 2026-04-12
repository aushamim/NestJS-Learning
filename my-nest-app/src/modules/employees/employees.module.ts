import { Module } from '@nestjs/common';
import { EmployeesController } from './employees.controller';
import { EmployeesService } from './employees.service';

@Module({
  providers: [EmployeesService],
  controllers: [EmployeesController],
})
export class EmployeesModule {}
