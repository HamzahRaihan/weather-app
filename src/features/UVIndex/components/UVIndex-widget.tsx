import { Card, CardContent } from '@/components/ui/card';
import { MdSunny } from 'react-icons/md';
import useGetUVIndex from '../api/get-uvindex';

const UVIndexWidget = () => {
  const { describeUVIndex, data } = useGetUVIndex();
  console.log('🚀 ~ UVIndexWidget ~ data:', data);
  return (
    <Card>
      <CardContent className="h-full">
        <div className="flex flex-col gap-4 justify-between h-full">
          <div className="flex flex-col gap-1">
            <p className="flex items-center font-bold gap-1 text-sm">
              <MdSunny /> UV Index
            </p>
            <div className="flex flex-col gap-0">
              <p className="font-bold text-xl">3</p>
              <p className="text-md">
                {
                  describeUVIndex(Math.round(data?.daily?.uv_index_max[0]))
                    ?.uvLevel
                }
              </p>
            </div>
            <div>
              <input
                type="range"
                min="0"
                max="10"
                step="1"
                value={Math.round(data?.daily?.uv_index_max[0])}
                className="accent-zinc-100 h-2 w-full appearance-none overflow-hidden rounded-sm"
                style={{
                  background:
                    'linear-gradient(90deg, rgba(126,212,87,1) 0%, rgba(248,212,73,1) 25%, rgba(235,77,96,1) 75%, rgba(180,96,231,1) 100%)',
                }}
              />
            </div>
          </div>
          <div className="text-xs dark:text-zinc-300">
            {
              describeUVIndex(Math.round(data?.daily?.uv_index_max[0]))
                ?.uvMessage
            }
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default UVIndexWidget;
