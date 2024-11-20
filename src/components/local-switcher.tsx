
'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { ChangeEvent, useTransition } from 'react';

export default function LocalSwitcher() {
  const [isPending, startTransition] = useTransition();

  const router = useRouter();
  const currentLocale = useLocale();
  const pathname = usePathname();
  console.log('cccccccc',currentLocale)

  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;

    // Replace the current locale in the pathname
    const segments = pathname.split('/');

    console.log('ssssssssss',segments)
    segments[1] = nextLocale; // Replace the locale segment
    console.log('dddddddddddddd',segments)
    const nextPath = segments.join('/');
    console.log('xxxxxxxxsaaaaaaaaaaaaaaaaaaaaaaaaaaa',nextPath)

    startTransition(() => {
      router.replace(nextPath);
    });
  };

  return (
    <label className="border-2 rounded">
      <p className="sr-only">Change language</p>
      <select
        defaultValue={currentLocale}
        className="bg-transparent py-2"
        onChange={onSelectChange}
        // disabled={isPending}
      >
        <option value="en">English</option>
        <option value="de">German</option>
      </select>

      
    </label>
  );
}