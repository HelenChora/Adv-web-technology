import {
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
    OneToMany,
    OneToOne,
    PrimaryGeneratedColumn,
  } from 'typeorm';
  import { Post } from './Post';
  import { Profile } from './Profile';
  import { Vehicle } from './Vehicle';
  import {Schedule } from  './Schedule';
  import { Order } from './Order';
  import { Mngorder } from './ManagementOrder';
import { Customer } from './customer';
import { User } from './User';
import { Supplier } from './supplier';
  
  @Entity({ name: 'returnProduct' })
  export class ReturnProduct {
    @PrimaryGeneratedColumn({ type: 'bigint' })
    id: number;

    @Column()
    name: string;
  
    @Column()
    description: string;

    @Column()
    filename: string;

    @ManyToOne(() => Supplier, (supplier) => supplier.returnProducts)
    supplier: Supplier;
  
   
  }
  