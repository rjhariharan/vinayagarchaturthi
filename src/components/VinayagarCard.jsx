import { useState } from 'react'
import './VinayagarCard.css'

const VinayagarCard = () => {
  const [showCard, setShowCard] = useState(false)

  const handleShowCard = () => {
    setShowCard(true)
  }

  const handleCloseCard = () => {
    setShowCard(false)
  }

  return (
    <div className="card-container">
      {!showCard ? (
        <button className="main-button" onClick={handleShowCard}>
          🎉 Click for Vinayagar Chaturthi Wishes! 🎉
        </button>
      ) : (
        <div className="wish-card">
          <button className="close-button" onClick={handleCloseCard}>
            ✕
          </button>
          <a href="https://www.google.com/search?q=Good+thing+we+can+do+for+others+on+vinayagar+chaturthi&sca_esv=1c3d4a504141976f&sxsrf=AE3TifPN6hXjdUh6-lWLEmJHWRE7ZQK3FQ%3A1756279049305&ei=CbGuaNKnErjCjuMPscWD-Qk&ved=0ahUKEwiS0PCmuaqPAxU4oWMGHbHiIJ8Q4dUDCBE&uact=5&oq=Good+thing+we+can+do+for+others+on+vinayagar+chaturthi&gs_lp=Egxnd3Mtd2l6LXNlcnAiNkdvb2QgdGhpbmcgd2UgY2FuIGRvIGZvciBvdGhlcnMgb24gdmluYXlhZ2FyIGNoYXR1cnRoaTIKECEYoAEYwwQYCkj7QFCjBFidFHABeAGQAQCYAZACoAHgD6oBBjAuMTAuMbgBA8gBAPgBAZgCB6AC-gjCAgoQABiwAxjWBBhHwgIEECEYCsICBRAAGO8FwgIIEAAYgAQYogTCAggQABiiBBiJBZgDAIgGAZAGCJIHBTEuNS4xoAejNLIHBTAuNS4xuAfrCMIHBTItNC4zyAc-&sclient=gws-wiz-serp">
          <div className="card-content">
            <div className="ganesh-icon">🐘</div>
            <h1 className="main-title">Happy Vinayagar Chaturthi!</h1>
            <div className="decorative-elements">
              <span className="flower">🌺</span>
              <span className="om">ॐ</span>
              <span className="flower">🌺</span>
            </div>
            <p className="blessing">
              May Lord Ganesha remove all obstacles from your path
              and bless you with wisdom, prosperity, and happiness!
            </p>
            <div className="footer-decoration">
              <span className="lotus">🪷</span>
              <span className="diya">🪔</span>
              <span className="lotus">🪷</span>
            </div>
          </div>
          </a>
        </div>
      )}
    </div>
  )
}

export default VinayagarCard
