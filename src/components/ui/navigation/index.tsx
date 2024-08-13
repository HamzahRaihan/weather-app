import { MoonIcon, SunIcon } from '@radix-ui/react-icons';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '../dropdown-menu';

import { Button } from '../button';
import { useTheme } from '@/hooks/useTheme';
import { FaLocationDot } from 'react-icons/fa6';
import { useSelector } from 'react-redux';
import { RootState } from '@/states/store';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandList,
} from '../command';
import { useState, ChangeEvent, useEffect } from 'react';
import { useGetAutocompleteLocationQuery } from '@/services/GeopifyAPI';

const Navigation = () => {
  const location = useSelector((state: RootState) => state.location.location);
  const [search, setSearch] = useState<string>('');
  const [suggestion, setSuggestion] = useState<any[] | undefined>([]);
  console.log('🚀 ~ Navigation ~ suggestion:', suggestion);

  const { data } = useGetAutocompleteLocationQuery(search);

  useEffect(() => {
    const getLocation = async (): Promise<void> => {
      if (!search || '') {
        setSuggestion([]);
      }
      if (search) {
        const locationSugestion = await data?.features;
        setSuggestion(locationSugestion);
      }
    };
    getLocation();
  }, [data, search]);

  const { setTheme } = useTheme();

  function handleSearch(event: ChangeEvent<HTMLInputElement>) {
    const target = event.target as HTMLInputElement;
    setSearch(target.value);
  }

  return (
    <div className="flex lg:flex-row flex-col items-center justify-between gap-5 pb-2 mb-10">
      <h1 className="lg:flex gap-1 items-center hidden flex-shrink-0">
        <span>
          <FaLocationDot />
        </span>{' '}
        {location}
      </h1>
      <div className="relative dark:bg-zinc-800 rounded-md lg:w-1/2 w-full">
        <Command className="rounded-lg border">
          <CommandInput
            placeholder="Search location..."
            onChangeCapture={handleSearch}
            value={search}
          />

          <CommandList
            className={`${search ? '' : 'hidden'} absolute z-10 bg-white dark:bg-[#09090b] border top-10 rounded-lg w-full right-0 shadow-lg`}
          >
            <CommandGroup heading="Suggestions">
              {suggestion?.length === 0 ? (
                <CommandEmpty>No results found.</CommandEmpty>
              ) : (
                suggestion?.map((item) => {
                  return (
                    <div
                      className="flex gap-2 items-center p-1 dark:hover:bg-zinc-900 hover:bg-zinc-100 duration-150 cursor-pointer rounded-md"
                      key={item.id}
                    >
                      <FaLocationDot />
                      <span>
                        {item.properties.city
                          ? `${item.properties.city}, ${item.properties.country}`
                          : item.properties.country}
                      </span>
                    </div>
                  );
                })
              )}
            </CommandGroup>
          </CommandList>
        </Command>
      </div>
      <div className="lg:block lg:w-fit flex w-full items-center justify-between">
        <h1 className="lg:hidden flex items-center gap-1 flex-shrink-0">
          <span>
            <FaLocationDot />
          </span>{' '}
          {location}
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
