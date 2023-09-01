import { AcademicCapIcon } from "@heroicons/react/24/solid"
import clsx from "clsx"
import Image from "next/image"

export function Logo(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <div className={clsx('flex justify-between align-middle gap-2')}>
      <Image src='/logo.png' alt="" width={40} height={20}></Image>
      <h1 className={clsx('text-xl mt-1 font-bold')}>Snowmountain</h1>
    </div>
  )
}
