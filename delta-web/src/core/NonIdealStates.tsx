export function Loading() {
  return <div className='p-10 text-center opacity-40'>
    <svg className='mx-auto size-20' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
      <path d="M19 1c-.55 0-1 .45-1 1v2.06C16.18 1.61 13.29 0 10 0 4.48 0 0 4.48 0 10c0 .55.45 1 1 1s1-.45 1-1c0-4.42 3.58-8 8-8 2.52 0 4.76 1.18 6.22 3H15c-.55 0-1 .45-1 1s.45 1 1 1h4c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1zm0 8c-.55 0-1 .45-1 1 0 4.42-3.58 8-8 8-2.52 0-4.76-1.18-6.22-3H5c.55 0 1-.45 1-1s-.45-1-1-1H1c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1s1-.45 1-1v-2.06C3.82 18.39 6.71 20 10 20c5.52 0 10-4.48 10-10 0-.55-.45-1-1-1z" fillRule="evenodd"></path>
    </svg>
  </div>;
}

export function ErrorMessage(props: { message: string }) {
  return <div className='p-10 text-center'>
    <div className='text-4xl'>
      ❌
    </div>
    <div className='mt-4 text-orange-600 text-lg'>
      {props.message}
    </div>
  </div>;
}
