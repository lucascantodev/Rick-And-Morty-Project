import { useOnScreen } from '../../utils/hook'
import { useRef, useEffect } from 'react'
import { TOTAL_PAGES } from '../../utils/request'

const InfiniteScroll = ({ 
    children,
    size,
    next
}) => {
  const ref = useRef()
  const isVisible = useOnScreen(ref)
  const isEnded = size === TOTAL_PAGES

  useEffect(() => {
    if (isVisible && !isEnded) {
      next(size + 1)
    }
  }, [isVisible])

  return (
    <>
      {children}
      <div ref={ref}></div>
    </>
  );
};

export default InfiniteScroll