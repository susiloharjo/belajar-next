'use client';

import CardSimple from '../components/CardSimple';
import { BellIcon } from '@heroicons/react/24/outline';
import BarChart from '../components/BarChart';
import LineChart from '../components/LineChart';
import { CurrencyDollarIcon } from '@heroicons/react/24/outline';
import { ShoppingBagIcon } from '@heroicons/react/24/outline';
import { BookOpenIcon } from '@heroicons/react/24/outline';
import TableComponent from '../components/TableComponent';
import { CarouselImg } from '../components/CarouselImg';
import { ListWithSelectedItem } from '../components/ListWithSelectedItem';
import { DefaultTimeline } from '../components/DefaultTimeline';
import { Suspense } from 'react';
import Loading from '../loading';


export default function Dashboard() {
  return (
    <Suspense fallback={<Loading />}>
      <div>
        <div className="grid gap-2 grid-cols-4">
          <CardSimple>
            <div className="flex  items-center justify-between">
              <div className="w-12 h-12 rounded-full bg-blue-200 flex items-center justify-center mr-3">
                <BellIcon className="h-8 w-8 text-blue-500" />
              </div>
              <div className="flex flex-col space-y-1">
                <div className="font-semibold text-xl">Earnings</div>
                <p>Rp. 2.000.000</p>
              </div>
            </div>
          </CardSimple>

          <CardSimple>
            <div className="flex  items-center justify-between">
              <div className="w-12 h-12 rounded-full bg-blue-200 flex items-center justify-center mr-3">
                <CurrencyDollarIcon className="h-8 w-8 text-blue-500" />
              </div>
              <div className="flex flex-col space-y-1">
                <div className="font-semibold text-xl">Spend This Month</div>
                <p>Rp. 500.000</p>
              </div>
            </div>
          </CardSimple>

          <CardSimple>
            <div className="flex  items-center justify-between">
              <div className="w-12 h-12 rounded-full bg-blue-200 flex items-center justify-center mr-3">
                <ShoppingBagIcon className="h-8 w-8 text-blue-500" />
              </div>
              <div className="flex flex-col space-y-1">
                <div className="font-semibold text-xl">Sales</div>
                <p>Rp. 1.000.000</p>
              </div>
            </div>
          </CardSimple>

          <CardSimple>
            <div className="flex  items-center justify-between">
              <div className="w-12 h-12 rounded-full bg-blue-200 flex items-center justify-center mr-3">
                <BookOpenIcon className="h-8 w-8 text-blue-500" />
              </div>
              <div className="flex flex-col space-y-1">
                <div className="font-semibold text-xl">Projects Done</div>
                <p>5 / 10</p>
              </div>
            </div>
          </CardSimple>
        </div>
        <div className="grid gap-2 grid-cols-2 h-96">
          <CardSimple>
            <div className="chart">
              <BarChart />
            </div>
          </CardSimple>

          <CardSimple>
            <div className="chart">
              <LineChart />
            </div>
          </CardSimple>
        </div>

        <div className="grid gap-2 grid-cols-2  mt-10">
          <CardSimple>
            <div className="full">
              <TableComponent />
            </div>
          </CardSimple>

          <CardSimple>
            <div className="chart">
              <CarouselImg />
            </div>
          </CardSimple>
        </div>

        <div className="grid gap-2 grid-cols-2 ">
          <CardSimple>
            <div>
              <ListWithSelectedItem />
            </div>
          </CardSimple>

          <CardSimple>
            <div className="chart">
              <DefaultTimeline />
            </div>
          </CardSimple>
        </div>
      </div>
    </Suspense>
  );
}
