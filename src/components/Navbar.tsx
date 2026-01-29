"use client";

import { Button } from '@/components/ui/button'

export default function Navbar() {
  return (
    <header className='sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur-xl supports-[backdrop-filter]:bg-white/80'>
        <div className='px-6 py-4'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center space-x-4'>
              <div className='p-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl shadow-lg'>
                <Database className='w-8 h-8 text-white' />
              </div>
              <div>
                <h1 className='text-3xl font-bold text-gray-900'>AssetFlow Pro</h1>
                <p className='text-gray-600'>Centralized digital asset management platform</p>
              </div>
            </div>
            <div className='flex items-center space-x-4'>
              <Select value={timeRange} onValueChange={setTimeRange}>
                <SelectTrigger className='w-40 border-gray-300 shadow-sm'>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value='week'>This Week</SelectItem>
                  <SelectItem value='month'>This Month</SelectItem>
                  <SelectItem value='quarter'>This Quarter</SelectItem>
                  <SelectItem value='year'>This Year</SelectItem>
                </SelectContent>
              </Select>
              <Button className='bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 shadow-lg'>
                <Upload className='w-4 h-4 mr-2' />
                Upload Assets
              </Button>
            </div>
          </div>
        </div>
      </header>
  );
}
