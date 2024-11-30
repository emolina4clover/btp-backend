import { Injectable, Logger, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/user.schema';
import { CreateUserDto } from './dto/create-user.dto';
import { Payload } from '../auth/auth.service';
import dayjs from 'dayjs';
import { Model, Types } from 'mongoose';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  private readonly logger = new Logger(UsersService.name);
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
  ) {}

  /**
   * Finds a user by their email.
   *
   * @param {string} email - The email of the user to find.
   * @returns {Promise<User|null>} - A promise that resolves with a User object if found, or null if not found.
   */
  async findByEmail(email: string): Promise<User | null> {
    return this.userModel.findOne({ email }).exec();
  }

  /**
   * Finds a user by their unique identifier.
   *
   * @param {Types.ObjectId} _id - The unique identifier of the user.
   * @return {Promise<User | null>} A promise that resolves to the user if found, or null if not found.
   */
  async findById(_id: Types.ObjectId): Promise<User | null> {
    return this.userModel.findById(_id).exec();
  }

  /**
   * Asynchronously creates a new user based on the provided user data.
   *
   * @param {CreateUserDto} createUserDto - The data transfer object containing user information.
   * @param {string} createUserDto.name - The name of the user to be created.
   * @param {string} createUserDto.email - The email address of the user to be created.
   * @param {string} createUserDto.password - The password for the user to be created.
   */
  async createUser(
    createUserDto: CreateUserDto,
  ): Promise<{ name: string; email: string }> {
    const userUsed = await this.findByEmail(createUserDto.email);

    if (userUsed) {
      throw new BadRequestException('Email already in use');
    }

    const { name, email, password } = createUserDto;

    const newPassword = await bcrypt.hash(password, 10);

    const user = new this.userModel({
      name,
      email,
      password: newPassword,
    });

    await user.save();

    return {
      name: user.name,
      email: user.email,
    };
  }
}
