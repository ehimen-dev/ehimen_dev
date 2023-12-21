import Container from '../util/container'
import { EXAMPLE_PATH } from '../../lib/constants'

type Props = {
  preview?: boolean
}

const Status = ({ preview }: Props) => {
  return (
    <div
      className="bg-primary-content text-neutral-content dark:bg-neutral-950 dark:text-neutral-300"
    >
      <Container>
        <div className="py-2 text-center text-sm">
          {preview ? (
            <>
              This page is a preview.{' '}
              <a
                href="/api/exit-preview"
                className="underline hover:text-teal-300 duration-200 transition-colors"
              >
                Click here
              </a>{' '}
              to exit preview mode.
            </>
          ) : (
            <>
            <div className="badge badge-primary badge-xs bg-green-400 rounded-full mx-2 animate-pulse"></div>
              Currently building Digital Strategy @{' '}
              <a
                href={`https://github.com/vercel/next.js/tree/canary/examples/${EXAMPLE_PATH}`}
                className="underline hover:text-primary duration-200 transition-colors"
              >
                Nett Pharmacy
              </a>
              .
            </>
          )}
        </div>
      </Container>
    </div>
  )
}

export default Status
