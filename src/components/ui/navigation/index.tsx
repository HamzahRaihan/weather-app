import { MoonIcon, SunIcon } from '@radix-ui/react-icons';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '../dropdown-menu';
import { Input } from '../input';
import { Button } from '../button';
import { useTheme } from '@/hooks/useTheme';
import { FaLocationDot } from 'react-icons/fa6';

const Navigation = () => {
  const { setTheme } = useTheme();

  return (
    <div className="flex lg:flex-row flex-col items-center justify-between gap-5 pb-2 mb-10">
      <h1 className="lg:flex gap-1 items-center hidden flex-shrink-0">
        <span>
          <FaLocationDot />
        </span>{' '}
        Indonesia, Jakarta
      </h1>
      <div className="dark:bg-zinc-800 rounded-md lg:w-1/2 w-full">
        <Input placeholder="Search" />
      </div>
      <div className="lg:block lg:w-fit flex w-full items-center justify-between">
        <h1 className="lg:hidden flex items-center gap-1 flex-shrink-0">
          <span>
            <FaLocationDot />
          </span>{' '}
          Indonesia, Jakarta
        </h1>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setTheme('light')}>
              Light
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme('dark')}>
              Dark
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme('system')}>
              System
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default Navigation;
