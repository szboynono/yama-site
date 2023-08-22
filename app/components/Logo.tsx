import { AcademicCapIcon } from "@heroicons/react/24/solid"
import clsx from "clsx"

export function Logo(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <div className={clsx('flex justify-between align-middle gap-2')}>
      <h1 className={clsx('text-lg')}>JINRONGGONSI</h1>
    </div>
  )
}
