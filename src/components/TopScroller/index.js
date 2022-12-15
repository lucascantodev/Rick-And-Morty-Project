import { useState, useEffect } from "react"

const TopScroller = () => {
  const [showTopBtn, setShowTopBtn] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
            setShowTopBtn(true)
        } else {
            setShowTopBtn(false)
        }
    })
  }, [])

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <div className="scroll-to-top">
      {showTopBtn && (
        <span className="icon-position icon-style" onClick={goToTop}>
          👆🏻
        </span>
      )}
    </div>
  )
}
  
export default TopScroller