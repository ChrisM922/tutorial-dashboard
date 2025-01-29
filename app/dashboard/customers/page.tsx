import { lusitana } from '@/app/ui/fonts';
import React from 'react'
import { CustomersTableSkeleton } from '@/app/ui/skeletons';
import { Suspense } from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Customers',
};

const page = () => {
  return (
    <div className="w-full">
      <div className='flex w-full items-center justify-between'>
        <h1 className={`${lusitana.className} text-2xl`}>Customers</h1>
      </div>
      <Suspense fallback={<CustomersTableSkeleton />}>
        {/* <CustomersTable customers={fetchCustomers()} /> */}
      </Suspense>
    </div>
  )
}

export default page