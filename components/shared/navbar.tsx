'use client'

import {
  Bell,
  ChevronDown,
  CircleHelp,
  LogOut,
  Settings,
  User,
} from 'lucide-react'

import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

const navItems = [
  { label: 'Overview', href: '#overview' },
  { label: 'Projects', href: '#projects' },
  { label: 'Team', href: '#team' },
  { label: 'Reports', href: '#reports' },
]

type IUser = {
  success: boolean,
  statuCode: number,
  message: string,
  data: {
    profile: {
      id: string,
      name: string,
      email: string,
      activeStatus: boolean,
      role: string,
      createdAt: string,
      updatedAt: string,
      profile: {
        id: string,
        profilePhoto: string,
        bio: string | null,
        userId: string,
        createdAt: string,
        updatedAt: string,
      }
    }
  }
}

type NavbarProps = {
  user: IUser
}

export function Navbar({ user }: NavbarProps) {
  return (
    <header className="border-b bg-background">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-6 lg:px-8"
      >
        <div className="flex min-w-0 items-center gap-10">
          <a
            href="#home"
            className="flex items-center gap-2 text-lg font-semibold tracking-tight"
          >
            <span className="flex size-8 items-center justify-center rounded-lg bg-primary text-sm font-bold text-primary-foreground">
              N
            </span>
            Nextjs Press
          </a>

          <div className="hidden items-center gap-1 md:flex">
            {navItems.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                aria-current={index === 0 ? 'page' : undefined}
                className={`rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground ${index === 0
                  ? 'bg-muted text-foreground'
                  : 'text-muted-foreground'
                  }`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* <Button variant="ghost" size="icon" aria-label="Notifications">
            <Bell />
          </Button> */}

          <DropdownMenu>
            <DropdownMenuTrigger
              aria-label="Open user menu"
              className="inline-flex h-10 items-center justify-center gap-2 rounded-md px-2 text-sm font-medium transition-colors outline-none hover:bg-accent hover:text-accent-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50"
            >
              <Avatar className="size-8">
                <AvatarFallback className="bg-primary text-xs text-primary-foreground">
                  JD
                </AvatarFallback>
              </Avatar>
              <span className="hidden text-sm font-medium sm:inline">{user.data?.profile.name || "Name"}</span>
              <ChevronDown className="text-muted-foreground" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuGroup>
                <DropdownMenuLabel>
                  <p className="font-medium">{user.data?.profile.name || "Name"}</p>
                  <p className="font-normal text-muted-foreground">{user.data?.profile.email || "Email"}</p>
                </DropdownMenuLabel>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <User />
                  Profile
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings />
                  Settings
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <CircleHelp />
                  Help center
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem variant="destructive">
                <LogOut />
                Log out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>
    </header>
  )
}
