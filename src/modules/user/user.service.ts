import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { log } from 'console';
import {hashSync} from 'bcrypt'
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepo: Repository<User>
  ){}
  async create(createUserDto: CreateUserDto) {
    try {
      const {email,password,role,name} = createUserDto
      const hashedPassword = hashSync(password,10)
      const user = this.userRepo.create({email,hashedPassword,name,role})
      await this.userRepo.save(user)
      return
    } catch (error) {
      log(error.message)
      throw error
    }
  }

  findAll() {
    try {
      
    } catch (error) {
      throw error
    }
  }

  async findOne(id: number) {
    try {
      const user = await this.userRepo.findOneBy({id})
      return user
    } catch (error) {
      throw error
    }
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    try {
      const user = await this.userRepo.findOneBy({id})
      if(!user){
        throw new BadRequestException(`User with id ${id} not found`)
      }
      if(updateUserDto.email){
        const user = await this.userRepo.findOneBy({email: updateUserDto.email})
        if(user){
          throw new BadRequestException(`User with email ${updateUserDto.email} already exists`)
        }
      }
      this.userRepo.update({id}, updateUserDto)
      return
    } catch (error) {
      throw error
    }
  }

  async remove(id: number) {
    try {
      const user = await this.userRepo.findOneBy({id})
      if(!user){
        throw new BadRequestException(`User with id ${id} not found`)
      }
      await this.userRepo.delete({id})
      return
    } catch (error) {
      throw error
    }
  }
}
