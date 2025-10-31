import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <h3>📚 StoryBooks</h3>
            <p>Bringing magical stories to young readers everywhere.</p>
          </div>

          <div className={styles.footerSection}>
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/shop">Shop</a></li>
              <li><a href="/cart">Cart</a></li>
            </ul>
          </div>

          <div className={styles.footerSection}>
            <h4>Categories</h4>
            <ul>
              <li><a href="/shop?category=Fantasy">Fantasy</a></li>
              <li><a href="/shop?category=Adventure">Adventure</a></li>
              <li><a href="/shop?category=Bedtime">Bedtime</a></li>
            </ul>
          </div>

          <div className={styles.footerSection}>
            <h4>Contact</h4>
            <ul>
              <li>Email: hello@storybooks.com</li>
              <li>Phone: (555) 123-4567</li>
            </ul>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p>&copy; 2025 StoryBooks. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
