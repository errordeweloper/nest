import { RootEntity } from 'src/common/entities/root.entity'
import { UserRole } from 'src/common/enums/userRole.enum'
import {Column, Entity} from 'typeorm'

@Entity()
export class User extends RootEntity {
    @Column()
    name: string

    @Column({enum: UserRole, default: UserRole.user,type: 'enum'})
    role: UserRole

    @Column({unique: true})
    email: string

    @Column()
    hashedPassword: string

    @Column({default: false})
    loggedOut: boolean
}
