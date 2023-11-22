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
  
  @Entity({ name: 'support' })
  export class Support {
    @PrimaryGeneratedColumn({ type: 'bigint' })
    id: number;
  
    @Column()
    support: string;

    @ManyToOne(() => Supplier, (supplier) => supplier.supports)
    supplier: Supplier;
  
   
  }
  