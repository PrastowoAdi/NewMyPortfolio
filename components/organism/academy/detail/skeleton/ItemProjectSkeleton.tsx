export default function ItemProjectSkeleton() {
  return (
    <div className="w-full px-4 lg:w-1/2 xl:w-1/3">
      <div className="rounded-md shadow-lg overflow-hidden mb-10 bg-white dark:bg-neutral-100">
        <div className="w-full p-5 animate-pulse">
          <div className="w-[150px] h-[150px] bg-gray-300 mx-auto rounded-full" />
        </div>
        <div className="px-6 py-4 animate-pulse">
          <div className="w-2/3 h-3 bg-gray-300 rounded-md" />
          <div className="w-1/2 h-3 bg-gray-300 rounded-md mt-3" />
          <div className="w-1/3 h-3 bg-gray-300 rounded-md mt-1" />
          <div className="w-3/4 h-3 bg-gray-300 rounded-md mt-1" />
        </div>
        <div className="p-5 animate-pulse">
          <div className="flex flex-wrap items-center justify-center">
            <div className="w-1/3 border-r-2 border-r-neutral-100 dark:border-r-neutral-500">
              <div className="w-5 h-5 mx-auto bg-gray-300 rounded-full" />
              <div className="w-1/3 h-3 bg-gray-300 rounded-md mt-1 mx-auto" />
            </div>
            <div className="w-1/3 border-r-2 border-r-neutral-100 dark:border-r-neutral-500">
              <div className="w-5 h-5 mx-auto bg-gray-300 rounded-full" />
              <div className="w-1/3 h-3 bg-gray-300 rounded-md mt-1 mx-auto" />
            </div>
            <div className="w-1/3">
              <div className="w-5 h-5 mx-auto bg-gray-300 rounded-full" />
              <div className="w-1/3 h-3 bg-gray-300 rounded-md mt-1 mx-auto" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
