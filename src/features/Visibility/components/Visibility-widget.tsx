import { Card, CardContent } from '@/components/ui/card';
import { FaEye } from 'react-icons/fa6';
import useGetVisibility from '../api/get-visibility';

const VisibilityWidget = () => {
  const { describeVisibility, distanceFormat, data } = useGetVisibility();
  return (
    <Card className="h-40">
      <CardContent className="h-full">
        <div className="flex flex-col justify-between h-full">
          <div>
            <div className="flex items-center gap-1 mb-2">
              <FaEye />
              <p className="font-bold text-sm">Visibility</p>
            </div>
            <p className="text-xl font-bold">
              {distanceFormat(data?.visibility)}
            </p>
          </div>
          <div className="text-xs dark:text-zinc-300">
            <p>{describeVisibility(data?.visibility)}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default VisibilityWidget;
